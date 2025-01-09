<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { Link, useForm, usePage } from "@inertiajs/vue3";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import Loading from "@/Components/Loading.vue";
import DashboardCards from "@/Components/DashboardCards.vue";

const props = defineProps({
    filters: {
        type: Object,
    },
    summary: {
        type: Object,
        default: {
            totalMembros: 0,
            membrosPresentes: 0,
            batizados: 0,
            frequentadores: 0,
            visitantes: 0,
            oferta: 0,
        },
    },
});

const form = useForm({
    date: props.filters.date ?? "",
    rede: props.filters.rede ?? "",
    cidade: props.filters.cidade ?? "",
});

const submitFiltros = () => {
    form.get(route("admin.dashboard"), {
        preserveScroll: true,
        onSuccess: () => console.log("ok"),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options);
        },
    });
};
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
            >
                Dashboard Admin
            </h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div
                    class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
                >
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <div class="dashboard">
                            <form
                                class="filters grid sm:grid-cols-4 grid-cols-2 gap-4"
                                @submit.prevent="submitFiltros"
                            >
                                <div>
                                    <InputLabel
                                        for="date"
                                        value="Data/Semana"
                                    />
                                    <TextInput
                                        id="date"
                                        type="week"
                                        class="mt-1 block w-full"
                                        v-model="form.date"
                                    />
                                </div>
                                <div>
                                    <InputLabel for="rede" value="Rede" />
                                    <select
                                        v-model="form.rede"
                                        id="rede"
                                        class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full"
                                    >
                                        <option value="">Todas</option>
                                        <option value="crianças">
                                            Crianças
                                        </option>
                                        <option value="jovens">Jovens</option>
                                        <option value="adultos">Adultos</option>
                                    </select>
                                </div>
                                <div>
                                    <InputLabel for="cidade" value="Cidade" />
                                    <TextInput
                                        id="cidade"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="form.cidade"
                                    />
                                </div>

                                <div class="flex items-center gap-4 mt-5">
                                    <PrimaryButton
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        :disabled="form.processing"
                                    >
                                        Aplicar Filtros
                                    </PrimaryButton>
                                    <Loading v-if="form.processing" />
                                </div>
                            </form>

                            <!-- Resumo de Dados -->
                            <!-- <div class="summary">
                                <h2>Resumo de Dados</h2>
                                <p>
                                    Total de Membros: {{ summary.totalMembros }}
                                </p>
                                <p>
                                    Membros Presentes:
                                    {{ summary.membrosPresentes }}
                                </p>
                                <p>Batizados: {{ summary.batizados }}</p>
                                <p>
                                    Frequentadores: {{ summary.frequentadores }}
                                </p>
                                <p>Visitantes: {{ summary.visitantes }}</p>
                                <p>Oferta: {{ summary.oferta }}</p>
                            </div> -->
                            <!-- Tabelas e Gráficos -->
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 sm:px-0 mt-3"
                >
                    <DashboardCards
                        color="blue"
                        title="Total de Membros"
                        :quantity="summary.totalMembros"
                    />

                    <DashboardCards
                        color="blue"
                        title="Membros Presentes"
                        :quantity="summary.membrosPresentes"
                    />
                    <DashboardCards
                        color="blue"
                        title="Batizados"
                        :quantity="summary.batizados"
                    />
                    <DashboardCards
                        color="blue"
                        title="Frequentadores"
                        :quantity="summary.frequentadores"
                    />
                    <DashboardCards
                        color="blue"
                        title="Visitantes"
                        :quantity="summary.visitantes"
                    />
                    <DashboardCards
                        color="blue"
                        title="Oferta"
                        :quantity="summary.oferta"
                        :money="true"
                    />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
