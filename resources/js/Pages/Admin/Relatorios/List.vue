<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Table from '@/Components/Table.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
    initFlowbite();
});

defineProps({
    celula: {
        type: Object,
    },
    relatorios: {
        type: Object,
    },
    query: {
        type: Object
    }
});

const columns = [
    {
        key: 'id',
        name: 'ID'
    },
    {
        key: 'celula',
        name: 'Célula',
        not_sortable: true
    },
    {
        key: 'date',
        name: 'Data'
    }
];

</script>

<template>

    <Head title="Lista de Relatórios" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Lista de Relatórios</h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <Table :items="relatorios" :columns="columns" :query="query" :routeBase="'lider.relatorios'" :additionalRoute="celula.id" :additionalParameter="'celula_id'" :hideSearch="true" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
