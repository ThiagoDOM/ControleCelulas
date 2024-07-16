<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, router } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import "@/Components/css/multiSelectDarkMode.css";
import Loading from '@/Components/Loading.vue';
import ModalSearchCep from '@/Components/ModalSearchCep.vue'

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

    cep: data.celula.cep ?? '',
    uf: data.celula.uf ?? '',
    cidade: data.celula.cidade ?? '',
    bairro: data.celula.bairro ?? '',
    logradouro: data.celula.logradouro ?? '',
    numero: data.celula.numero ?? '',
    complemento: data.celula.complemento ?? '',

    rede: data.celula.rede ?? '',
    dia: data.celula.dia ?? '',
    hora: data.celula.hora ?? '',
});

const redes = [{ name: 'Kids', id: 'kids' }, { name: 'Águia', id: 'aguia' }, { name: 'Família', id: 'familia' }];
const dias = [{ name: 'Segunda-feira', id: 1 }, { name: 'Terça-feira', id: 2 }, { name: 'Quarta-feira', id: 3 }, { name: 'Quinta-feira', id: 4 }, { name: 'Sexta-feira', id: 5 }, { name: 'Sábado', id: 6 }];

const multiselect = ref(data.lideres.find((objeto) => objeto.id === form.lider_id));
const rede = ref(redes.find((objeto) => objeto.id === form.rede));
const dia = ref(dias.find((objeto) => objeto.id === form.dia));

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

const searchCep = () => {
    const cep = form.cep.replace('-', '');
    console.log(cep)

    if (cep.length == 8) {
        axios.get('https://viacep.com.br/ws/' + cep + '/json/')
            .then((res) => {
                console.log(res)
                const data = res.data;
                form.uf = data.uf;
                form.cidade = data.localidade;
                form.bairro = data.bairro;
                form.logradouro = data.logradouro;
                form.complemento = data.complemento;
            })
    }
}

const setCep = (objeto) => {
    const resultCep = objeto._value;
    console.log('aqui está: ', resultCep)

    form.cep = resultCep.cep;
    form.uf = resultCep.uf;
    form.cidade = resultCep.localidade;
    form.bairro = resultCep.bairro;
    form.logradouro = resultCep.logradouro;
    form.complemento = resultCep.complemento;
}

const endereco = computed(() => {
    var endereco = "";
    const cep = form.cep.replace('-', '');
    if (cep.length == 8) {
        if (form.logradouro) {
            endereco += form.logradouro + ', ';
            endereco += (form.numero || 'sn') + ', ';
            endereco += form.complemento ? form.complemento + ', ' : '';
            endereco += form.bairro + ', ';
            endereco += form.cidade + ' - ';
            endereco += form.uf;
        } else {
            endereco = '...';
        }
    }

    return endereco;
});

const isOpen = ref(false);

const OpenModal = () => {
    isOpen.value = true;
    console.log('abrindo', isOpen.value)
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
                            <div class="grid grid-cols-1 gap-4">
                                <div>
                                    <InputLabel for="name" value="Nome" />

                                    <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name"
                                        autofocus autocomplete="name" required />

                                    <InputError class="mt-2" :message="form.errors.name" />
                                </div>


                            </div>
                            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <InputLabel for="lider" value="Líder" />
                                    <Multiselect name="lider" id="lider" track-by="name" label="name" select-label=""
                                        deselect-label="" tagPlaceholder="" placeholder="Selecionar Líder"
                                        selected-label="Selecionado" :taggable="true" :multiple="false"
                                        :show-labels="false" :options="lideres" v-model="multiselect"
                                        @select="form.lider_id = multiselect.id">
                                        <template #noOptions>Nenhum líder cadastrado no sistema</template>
                                    </Multiselect>

                                    <InputError :message="form.errors.lider_id" class="mt-2" />
                                </div>

                                <div>
                                    <InputLabel for="rede" value="Rede" />
                                    <Multiselect name="rede" id="rede" track-by="name" label="name" select-label=""
                                        deselect-label="" tagPlaceholder="" placeholder="Selecionar Rede"
                                        selected-label="Selecionado" :taggable="false" :multiple="false"
                                        :show-labels="false" :options="redes" v-model="rede"
                                        @select="form.rede = rede.id">
                                    </Multiselect>

                                    <InputError :message="form.errors.rede" class="mt-2" />
                                </div>
                            </div>

                            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <InputLabel for="dia" value="Dia da Célula" />

                                    <Multiselect name="dia" id="dia" track-by="name" label="name" select-label=""
                                        deselect-label="" tagPlaceholder="" placeholder="Selecionar Dia"
                                        selected-label="Selecionado" :taggable="false" :multiple="false"
                                        :show-labels="false" :options="dias" v-model="dia" @select="form.dia = dia.id">
                                    </Multiselect>

                                    <InputError :message="form.errors.dia" class="mt-2" />

                                </div>

                                <div>
                                    <InputLabel for="hora" value="Horário da Célula" />

                                    <TextInput id="hora" type="time" class="mt-1 block w-full" v-model="form.hora"
                                        placeholder="00:00" required />

                                    <InputError class="mt-2" :message="form.errors.hora" />
                                </div>
                            </div>

                            <div>
                                <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700">
                                <h3 class="mt-2">Endereço</h3>
                            </div>

                            <div class="grid grid-cols-1 gap-4" style="margin-top: 0;">
                                <div>
                                    <div class="flex items-center justify-between sm:justify-start mt-4 gap-3">
                                        <InputLabel for="cep" value="CEP" />
                                        <a class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 cursor-pointer"
                                            @click="OpenModal()">Não sei o CEP</a>
                                    </div>
                                    <TextInput id="cep" type="text" class="mt-1 block w-full" v-model="form.cep"
                                        autocomplete="cep" placeholder="00000-000" @keyup="searchCep()"
                                        mask="#####-###" required />

                                    <InputError class="mt-2" :message="form.errors.cep" />
                                </div>
                            </div>

                            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <InputLabel for="numero" value="Número" />

                                    <TextInput id="numero" type="text" class="mt-1 block w-full" v-model="form.numero"
                                        autocomplete="numero" placeholder="000" mask="#############" />

                                    <InputError class="mt-2" :message="form.errors.numero" />
                                </div>

                                <div>
                                    <InputLabel for="complemento" value="Complemento" />

                                    <TextInput id="complemento" type="text" class="mt-1 block w-full"
                                        v-model="form.complemento" autocomplete="complemento" />

                                    <InputError class="mt-2" :message="form.errors.complemento" />
                                </div>
                            </div>

                            <div>
                                <InputLabel for="endereco" value="Endereço" />

                                <TextInput id="endereco" type="text" class="mt-1 block w-full" v-model="endereco"
                                    readonly />

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

        <ModalSearchCep v-if="isOpen" @close="isOpen = false" @success="setCep" />
    </AuthenticatedLayout>
</template>
