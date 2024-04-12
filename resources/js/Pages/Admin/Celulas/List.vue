<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Table from '@/Components/Table.vue';

defineProps({
    celulas: {
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
        key: 'name',
        name: 'Nome'
    },
    {
        key: 'lider',
        name: 'Líder',
        not_sortable: true
    }
];

</script>

<template>
    <Head title="Lista de Células" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Lista de Células</h2>
        </template>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <Table :items="celulas" :columns="columns" :query="query" :routeBase="'admin.celulas'" />
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
