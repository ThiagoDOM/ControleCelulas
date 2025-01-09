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
import moment from 'moment';
import Loading from '@/Components/Loading.vue';

const data = defineProps({
    celula: {
        type: Object,
    },
    relatorio: {
        type: Object
    }
});

const $toast = useToast();
const options = {
    position: 'top-right',
    duration: 5000
};

const form = useForm({
    celula_id: data.celula.id ?? '',
    date: data.relatorio.date ?? moment().locale('pt-br').format('YYYY-MM-DD'),
    membros_totais: data.relatorio.membros_totais ?? '0',
    membros_presentes: data.relatorio.membros_presentes ?? '0',
    batizados: data.relatorio.batizados ?? '0',
    frequentadores: data.relatorio.frequentadores ?? '0',
    visitantes: data.relatorio.visitantes ?? '0',
    vl_oferta: data.relatorio.vl_oferta ?? '0',
});


const updateRelatorio = () => {
    form.patch(route('admin.relatorios.update', [data.celula.id, data.relatorio.id]), {
        preserveScroll: true,
        onSuccess: () => resetForm(),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const createRelatorio = () => {
    form.post(route('admin.relatorios.store', data.celula.id), {
        preserveScroll: true,
        onSuccess: () => resetForm(true),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const resetForm = (created = false) => {
    if (created)
        $toast.success("Relatório criado com sucesso!", options);
    else
        $toast.success("Relatório atualizado com sucesso!", options);

    router.reload();
}

const config = {
          prefix: 'R$ ',
          suffix: '',
          thousands: '.',
          decimal: ',',
          precision: 2,
          disableNegative: true,
          disabled: false,
          min: 0,
          max: null,
          allowBlank: false,
          minimumNumberOfCharacters: 0,
          shouldRound: true,
          focusOnRight: false,
        };

</script>

<template>

    <Head :title="relatorio.id ? 'Editar Relatório' : 'Cadastrar Relatório'" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ relatorio.id ? 'Editar'
        :
        'Cadastrar' }} Relatório</h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <form @submit.prevent="relatorio.id ? updateRelatorio() : createRelatorio()"
                            class="mt-6 space-y-6">
                            <div>
                                <InputLabel for="date" value="Data" />

                                <TextInput id="date" type="date" class="mt-1 block w-full" v-model="form.date" required />

                                <InputError class="mt-2" :message="form.errors.date" />
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2">
                                <div class="me-0 sm:me-2">
                                    <InputLabel for="membros_totais" value="Total de Membros da Célula" autofocus/>

                                    <TextInput id="membros_totais" type="number" min="0" max="99"
                                        class="mt-1 block w-full" v-model="form.membros_totais" required />

                                    <InputError class="mt-2" :message="form.errors.membros_totais" />
                                </div>
                                <div class="ms-0 sm:ms-2 mt-6 sm:mt-0">
                                    <InputLabel for="membros_presentes" value="Total de Membros Presentes" />

                                    <TextInput id="membros_presentes" type="number" min="0" max="99"
                                        class="mt-1 block w-full" v-model="form.membros_presentes" required />

                                    <InputError class="mt-2" :message="form.errors.membros_presentes" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2">
                                <div class="me-0 sm:me-2">
                                    <InputLabel for="batizados" value="Total de Batizados" />

                                    <TextInput id="batizados" type="number" min="0" max="99" class="mt-1 block w-full"
                                        v-model="form.batizados" required />

                                    <InputError class="mt-2" :message="form.errors.batizados" />
                                </div>
                                <div class="ms-0 sm:ms-2 mt-6 sm:mt-0">
                                    <InputLabel for="frequentadores" value="Total de Frequentadores" />

                                    <TextInput id="frequentadores" type="number" min="0" max="99"
                                        class="mt-1 block w-full" v-model="form.frequentadores" required />

                                    <InputError class="mt-2" :message="form.errors.frequentadores" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 sm:grid-cols-2">
                                <div class="me-0 sm:me-2">
                                    <InputLabel for="visitantes" value="Total de Visitantes" />

                                    <TextInput id="visitantes" type="number" min="0" max="99" class="mt-1 block w-full"
                                        v-model="form.visitantes" required />

                                    <InputError class="mt-2" :message="form.errors.visitantes" />
                                </div>
                                <div class="ms-0 sm:ms-2 mt-6 sm:mt-0">
                                    <InputLabel for="vl_oferta" value="Total de Oferta" />

                                    <TextInput id="vl_oferta" type="text"
                                        class="mt-1 block w-full" v-model="form.vl_oferta" required v-money3="config" />

                                    <InputError class="mt-2" :message="form.errors.vl_oferta" />
                                </div>
                            </div>



                            <div class="flex items-center gap-4">
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Salvar
                                </PrimaryButton>
                                <Loading v-if="form.processing" />

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
