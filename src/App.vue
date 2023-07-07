<template>
    <Field></Field>
</template>

<script>
    import Field from './components/Field.vue';

    export default {
        name: 'App',
        components: {
            Field
        }
    }
</script>

<style>
    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
    }
</style>