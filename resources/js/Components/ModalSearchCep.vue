<script setup>
import { defineEmits, ref } from 'vue';
import Modal from '@/Components/Modal.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import "@/Components/css/multiSelectDarkMode.css";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Loading from '@/Components/Loading.vue';

const emit = defineEmits(['close', 'error', 'success']);

const closeModal = () => {
    emit('close');
}

const cidades = [ // BaixadaSantista
    "Santos",
    "São Vicente",
    "Praia Grande",
    "Guarujá",
    "Bertioga",
    "Cubatão",
    "Mongaguá",
    "Itanhaém",
    "Peruíbe"
];

const results = ref([]);
const errors = ref({});

const cidade = ref(null);
const logradouro = ref('');

const selectedCep = ref(null);
const loading = ref(false);

const $toast = useToast();

const search = () => {
    loading.value = true;

    // Form validation
    errors.value = {};
    results.value = [];
    selectedCep.value = null;
    if (!cidade.value || !logradouro.value) {
        loading.value = false;
        // Errors no form
        if (!cidade.value)
            errors.value.cidade ="Selecione uma cidade.";
        if (!logradouro.value)
            errors.value.logradouro ="Digite o logradouro.";
    }
    // Form Request
    else {
        const url = "https://viacep.com.br/ws/SP/" + cidade.value.replace(' ', '%20') + "/" + logradouro.value + "/json/";
        axios.get(url)
            .then((res) => {
                const data = res.data;
                if (data.length == 0) {
                    $toast.error("Ops! Nenhum endereço encontrado!", {
                        position: 'top-right',
                        duration: 5000
                    });
                } else {
                    results.value = data;

                }
            })
            .catch(() => {
                $toast.error("Ops! Ocorreu um erro!", {
                    position: 'top-right',
                    duration: 5000
                });
            })
            .finally(() => {
                loading.value = false;
            });
    }
}

const salvar = () => {
    emit('success', JSON.parse(JSON.stringify(selectedCep)));
    closeModal();
}

</script>

<template>
    <Modal :show="true" @close="closeModal">
        <div class="p-6 min-h-[500px]">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                Procurar CEP
            </h2>

            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Seleciona a cidade e digite o nome da rua para procurar o CEP.
            </p>

            <!-- Form -->
            <form @submit.prevent="search()" class="text-gray-900 dark:text-gray-100">
                <div class="mt-3">
                    <InputLabel for="cidade" value="Cidade" />

                    <Multiselect name="cidade" id="cidade" select-label="" deselect-label="" tagPlaceholder=""
                        placeholder="Selecionar cidade" selected-label="Selecionado" :taggable="false" :multiple="false"
                        :show-labels="false" :options="cidades" v-model="cidade">
                    </Multiselect>
                    <InputError class="mt-2" :message="errors.cidade" />
                </div>

                <div class="mt-3">
                    <InputLabel for="logradouro" value="Logradouro" />

                    <div class="flex justify-end gap-2">
                        <TextInput id="logradouro" type="text" class="mt-1 block w-full" v-model="logradouro"
                            placeholder="Avenida ..." />
                        <PrimaryButton class="mt-1" :disabled="loading" :class="{ 'opacity-25': loading }"
                            @click="search()">procurar
                        </PrimaryButton>
                    </div>
                    <InputError class="mt-2" :message="errors.logradouro" />
                </div>

                <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700 mt-3">
                <h3 class="my-2">Lista de CEPs</h3>

                <div v-if="results.length == 0" class="mb-[58px]">
                    <div v-if="loading" class="flex justify-start gap-2">
                        <div>Procurando</div> <Loading/>
                    </div>
                    <div v-else>
                        Os resultados aparecerão aqui.
                    </div>
                </div>
                <!-- Resultados -->
                <div class="max-h-[400px] overflow-auto mb-[58px]" v-else>

                    <div class="py-2 mb-1 ps-8 pe-4 block min-h-[1.5rem] rounded" v-for="(result, index) in results"
                        v-bind:key="index" :class="{ 'bg-gray-100 dark:bg-gray-700': index % 2 == 0 }">
                        <input
                            class="relative float-left -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                            type="radio" name="flexRadioDefault" :id="index" @click="selectedCep = result" />
                        <label class="mt-px inline-block ps-[0.15rem] hover:cursor-pointer w-full" :for="index">
                            <strong>{{ result.cep }}</strong><br />
                            <small>{{ result.logradouro }}{{ result.complemento ? "(" + result.complemento + ")" : ''
                                }}, {{ result.bairro }}, {{ result.localidade }}</small>
                        </label>
                    </div>

                </div>
            </form>

            <div class="mt-6 flex justify-end absolute bottom-6 right-6">
                <SecondaryButton @click="closeModal"> Cancelar </SecondaryButton>
                <PrimaryButton class="ms-3" :disabled="!selectedCep" :class="{ 'opacity-25': !selectedCep }"
                    @click="salvar()">Selecionar</PrimaryButton>
            </div>
        </div>
    </Modal>
</template>
