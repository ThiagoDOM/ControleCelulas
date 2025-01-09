<script setup>
import { ref } from "vue";
const props = defineProps({
    quantity: {
        type: Number,
        default: 0,
    },
    color: {
        type: String,
        default: "blue",
    },
    title: {
        type: String,
        default: "Title",
    },
    money: {
        type: Boolean,
        default: false,
    },
});

const valor = ref(props.quantity);

if (props.money) {
    valor.value = props.quantity.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
}
</script>
<template>
    <div
        class="h-full bg-white dark:bg-gray-800 p-4 shadow rounded-lg flex flex-col justify-between text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
    >
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {{ title }}
        </h2>
        <p
            class="text-4xl font-bold"
            :class="{ 'text-2xl': money }, 'text-' + color + '-500'"
        >
            {{ valor }}
        </p>
    </div>
</template>
