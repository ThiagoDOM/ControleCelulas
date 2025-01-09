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
                        <Table :items="celulas" :columns="columns" :query="query" :routeBase="'lider.celulas'">
                            <template v-slot="actions">
                                <Link :data-tooltip-target="'tooltip-default-'+actions.item.id"
                                    :href="route('lider.relatorios.index', actions.item.id)" class="mr-3">
                                <SecondaryButton><font-awesome-icon :icon="['fas', 'file-invoice']" /></SecondaryButton>
                                </Link>
                                <div :id="'tooltip-default-'+actions.item.id" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Relatórios
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </template>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
