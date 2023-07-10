<script setup lang="ts">
defineProps<{
    type?: string;
    placeholder?: string;
    className?: string;
    value?: string;
}>();
</script>

<template>
    <input
        :type="type"
        :class="className"
        :placeholder="placeholder"
        :value="value"
    />
</template>

<style>
.input-login {
    height: 58px;
    width: 298px;
    background-color: rgb(33, 37, 41);
    color: #adb5bd;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 3px;
    padding: 0 15px;
    transition: all ease-in-out 0.5s;
}
.input-login:focus {
    border: 1px solid #6ea8fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.input-button {
    height: 58px;
    width: 298px;
    background-color: #0b5ed7;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: all ease-in-out 0.3s;
    font-family: roboto;
    font-size: 18px;
    font-weight: 300;
}
.input-button:hover {
    background-color: #0950b9;
}
</style>
