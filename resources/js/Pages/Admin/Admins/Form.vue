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
import Loading from '@/Components/Loading.vue';

defineProps({
    admin: {
        type: Object,
    }
});

const passwordInput = ref(null);
const $toast = useToast();
const options = {
    position: 'top-right',
    duration: 5000
};

const form = useForm({
    name: usePage().props?.admin.name ?? '',
    email: usePage().props?.admin.email ?? '',
    telefone: usePage().props?.admin.telefone ?? '',
    password: '',
    password_confirmation: '',
});

const updateAdmin = () => {
    form.patch(route('admin.admins.update', usePage().props.admin.id), {
        preserveScroll: true,
        onSuccess: () => resetForm(),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const createAdmin = () => {
    form.post(route('admin.admins.store'), {
        preserveScroll: true,
        onSuccess: () => resetForm(true),
        onError: () => {
            $toast.error("Ops! Ocorreu um erro!", options)
        },
    });
};

const resetForm = (created = false) => {
    if (created)
        $toast.success("Admin criado com sucesso!", options);
    else
        $toast.success("Admin atualizado com sucesso!", options);

    form.password = '';
    form.password_confirmation = '';
    router.reload();
}

</script>

<template>
    <Head :title="admin.id ? 'Editar Admin' : 'Cadastrar Admin'" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">{{ admin.id ? 'Editar' :
                'Cadastrar' }} Admin</h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <form @submit.prevent="admin.id ? updateAdmin() : createAdmin()" class="mt-6 space-y-6">
                            <div>
                                <InputLabel for="name" value="Nome" />

                                <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" required
                                    autofocus autocomplete="name" />

                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div>
                                <InputLabel for="email" value="Email" />

                                <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required
                                    autocomplete="username" />

                                <InputError class="mt-2" :message="form.errors.email" />
                            </div>

                            <div>
                                <InputLabel for="telefone" value="Telefone" />

                                <TextInput id="telefone" type="text" class="mt-1 block w-full" v-model="form.telefone" autocomplete="telefone" placeholder="(##) #####-####" mask="(##) #####-####" />

                                <InputError class="mt-2" :message="form.errors.telefone" />
                            </div>

                            <div>
                                <InputLabel for="password" value="Senha" />

                                <TextInput id="password" ref="passwordInput" v-model="form.password" type="password"
                                    class="mt-1 block w-full" autocomplete="new-password" placeholder="********"/>

                                <InputError :message="form.errors.password" class="mt-2" />
                            </div>

                            <div>
                                <InputLabel for="password_confirmation" value="Confirmação da Senha" />

                                <TextInput id="password_confirmation" v-model="form.password_confirmation" type="password"
                                    class="mt-1 block w-full" autocomplete="new-password" placeholder="********"/>

                                <InputError :message="form.errors.password_confirmation" class="mt-2" />
                            </div>

                            <div class="flex items-center gap-4">
                                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Salvar</PrimaryButton> <Loading v-if="form.processing"/>

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
