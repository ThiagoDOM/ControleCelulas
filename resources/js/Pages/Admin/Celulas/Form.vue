<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

const data = defineProps({
    celula: {
        type: Object,
    },
    lideres: {
        type: Array,
        default: []
    }
});

const $toast = useToast();
const options = {
    position: 'top-right',
    duration: 5000
};

const form = useForm({
    name: data.celula.name ?? '',
    lider_id: data.celula.lider_id ?? '',
});

const multiselect = ref(data.lideres.find((objeto) => objeto.id === form.lider_id));

const updateCelula = () => {
    form.patch(route('admin.celulas.update', usePage().props.celula.id), {
        preserveScroll: true,
        onSuccess: () => resetForm(),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const createCelula = () => {
    form.post(route('admin.celulas.store'), {
        preserveScroll: true,
        onSuccess: () => resetForm(true),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const resetForm = (created = false) => {
    if (created)
        $toast.success("Célula criada com sucesso!", options);
    else
        $toast.success("Célula atualizada com sucesso!", options);

    router.reload();
}

</script>

<template>
    <Head :title="celula.id ? 'Editar Célula' : 'Cadastrar Célula'" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ celula.id ? 'Editar' :
                'Cadastrar' }} Célula</h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <form @submit.prevent="celula.id ? updateCelula() : createCelula()" class="mt-6 space-y-6">
                            <div>
                                <InputLabel for="name" value="Nome" />

                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required
                                    autofocus autocomplete="name" />

                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div>
                                <InputLabel for="lider" value="Líder" />

                                <Multiselect name="lider" v-model="multiselect" :options="lideres"
                                @select="form.lider_id = multiselect.id"
                                    track-by="name" label="name" select-label="Pressione Enter para selecionar"
                                    placeholder="Selecionar Líder" deselect-label="Pressione Enter para remover"
                                    selected-label="Selecionado" :taggable="true" :multiple="false"
                                    :show-labels="false">
                                </Multiselect>
                                <InputError :message="form.errors.lider_id" class="mt-2" />
                            </div>

                            <div class="flex items-center gap-4">
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Salvar</PrimaryButton>

                                <Transition enter-active-class="transition ease-in-out" enter-from-class="opacity-0"
                                    leave-active-class="transition ease-in-out" leave-to-class="opacity-0">
                                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600 dark:text-gray-400">
                                        Salvo.</p>
                                </Transition>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </AuthenticatedLayout>
</template>
