<script setup lang="ts">
import { ROUTE } from '@/types/router';
definePageMeta({ name: ROUTE.LOGIN });
</script>
<template>
    <div class="container">
        <form
            action=""
            method="get"
            class="form"
        >
            <h1 class="form__title">Please sign in</h1>
            <Input
                :type="'text'"
                :placeholder="'login'"
                :class="'input-login'"
            />
            <Input
                :type="'password'"
                :placeholder="'password'"
                :class="'input-login'"
            />
            <Input
                :type="'submit'"
                :value="'Sign in'"
                :class="'input-button'"
            />
        </form>
    </div>
</template>
<style>
.container {
    width: 100%;
    min-height: 100vh;
    background-color: var(--background-color-main);
    display: flex;
    justify-content: center;
    align-items: center;
}
.form {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #adb5bd;
}
.form__title {
    margin-bottom: 10px;
    font-weight: 300;
}
</style>
