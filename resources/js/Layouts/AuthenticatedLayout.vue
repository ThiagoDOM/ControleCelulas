<script setup>
import UserLayout from './UserLayout.vue';
import AdminLayout from './AdminLayout.vue';
import { onMounted } from 'vue'

onMounted(() => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").then(reg => {
            console.log("Registration succesful, scope: " + reg.scope);
        })
            .catch(err => {
                console.log(err);
            })
    }
})
</script>
<template>
    <AdminLayout v-if="$page.props.auth.user.role == 'admin'">
        <!-- Page Heading -->
        <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name="header" />
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <slot />
        </main>
    </AdminLayout>
    <UserLayout v-else>

        <!-- Page Heading -->
        <header class="bg-white dark:bg-gray-800 shadow" v-if="$slots.header">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <slot name="header" />
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <slot />
        </main>
    </UserLayout>
</template>
