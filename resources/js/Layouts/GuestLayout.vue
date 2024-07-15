<script setup>
import ApplicationLogo2 from '@/Components/ApplicationLogo2.vue';
import { Link } from '@inertiajs/vue3';
import { onMounted } from 'vue'

var beforeInstallPrompt = null;

window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

function eventHandler(event) {
  beforeInstallPrompt = event;
  document.getElementById("installBtn").removeAttribute("disabled");
}

function errorHandler(event) {
  console.log("error: " + event);
}

const instalar = () => {
    console.log('click')
  if (beforeInstallPrompt) beforeInstallPrompt.prompt();
}

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
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
        <div>
            <Link href="/">
            <!-- <ApplicationLogo class="w-20 h-20 fill-current text-gray-500" /> -->
            <!-- <img src="/android-chrome-512x512.png" class="w-20 h-20 fill-current text-gray-500" /> -->
            <ApplicationLogo2 class="h-20 w-20"/>
            </Link>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
            <slot @instalar="instalar()" />
        </div>
    </div>
</template>
