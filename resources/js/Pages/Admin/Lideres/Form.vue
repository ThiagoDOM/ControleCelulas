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
import "@/Components/css/multiSelectDarkMode.css";
import Loading from '@/Components/Loading.vue';

const data = defineProps({
    user: {
        type: Object,
    },
    responsaveis: {
        type: Array,
        default: []
    }
});

const passwordInput = ref(null);
const $toast = useToast();
const options = {
    position: 'top-right',
    duration: 5000
};

const form = useForm({
    name: usePage().props?.user.name ?? '',
    email: usePage().props?.user.email ?? '',
    telefone: usePage().props?.user.telefone ?? '',
    responsavel_id: usePage().props?.user.responsavel_id ?? '',
    password: '',
    password_confirmation: '',
});

const multiselect = ref(data.responsaveis.find((objeto) => objeto.id === form.responsavel_id));

const updateUser = () => {
    form.patch(route('admin.lideres.update', usePage().props.user.id), {
        preserveScroll: true,
        onSuccess: () => resetForm(),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const createUser = () => {
    form.post(route('admin.lideres.store'), {
        preserveScroll: true,
        onSuccess: () => resetForm(true),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const resetForm = (created = false) => {
    if (created)
        $toast.success("Lider criado com sucesso!", options);
    else
        $toast.success("Lider atualizado com sucesso!", options);

    form.password = '';
    form.password_confirmation = '';
    router.reload();
}

</script>

<template>
    <Head :title="user.id ? 'Editar Líder' : 'Cadastrar Líder'" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ user.id ? 'Editar' :
                'Cadastrar' }} Líder</h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <form @submit.prevent="user.id ? updateUser() : createUser()" class="mt-6 space-y-6">
                            <div>
                                <InputLabel for="name" value="Nome" />

                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required
                                    autofocus autocomplete="name" />

                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div>
                                <InputLabel for="email" value="Email" />

                                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                                    autocomplete="username" placeholder="email@email.com"/>

                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>
                            <div>
                                <InputLabel for="telefone" value="Telefone" />

                                <TextInput id="telefone" type="text" class="mt-1 block w-full" v-model="form.telefone" autocomplete="telefone" placeholder="(##) #####-####" mask="(##) #####-####" />

                                <InputError class="mt-2" :message="form.errors.telefone" />
                            </div>

                            <div>
                                <InputLabel for="responsavel" value="Discipulador" />

                                <Multiselect
                                    name="responsavel"

                                    track-by="name"
                                    label="name"

                                    select-label=""
                                    deselect-label=""
                                    tagPlaceholder=""

                                    placeholder="Selecionar Discipulador"
                                    selected-label="Selecionado"

                                    :taggable="true"
                                    :multiple="false"
                                    :show-labels="false"

                                    :options="responsaveis"
                                    v-model="multiselect"
                                    @select="form.responsavel_id = multiselect.id"
                                >
                                    <template #noOptions>Nenhum discipulador cadastrado no sistema</template>
                                </Multiselect>

                                <InputError :message="form.errors.responsavel_id" class="mt-2" />
                            </div>

                            <div>
                                <InputLabel for="password" value="Senha" />

                                <TextInput id="password" ref="passwordInput" v-model="form.password" type="password"
                                    class="mt-1 block w-full" autocomplete="new-password" placeholder="********"/>

                                <InputError :message="form.errors.password" class="mt-2" />
                            </div>

                            <div>
                                <InputLabel for="password_confirmation" value="Confirmação da Senha" />

                                <TextInput id="password_confirmation" v-model="form.password_confirmation" type="password"
                                    class="mt-1 block w-full" autocomplete="new-password" placeholder="********"/>

                                <InputError :message="form.errors.password_confirmation" class="mt-2" />
                            </div>

                            <div class="flex items-center gap-4">
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Salvar</PrimaryButton> <Loading v-if="form.processing"/>

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
