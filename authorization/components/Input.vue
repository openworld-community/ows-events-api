<template>
    <input type="text" class="input-login" placeholder='{{ placeholder }}'>
</template>

<style>
    .input-login{
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
    .input-login:focus{
        border: 1px solid #6ea8fe ;
        box-shadow: 0 0 0 0.25rem rgba(13,110,253,.25);
    }
</style>

<script setup>
    const props = defineProps({
        placeholder: String,
    })
</script>