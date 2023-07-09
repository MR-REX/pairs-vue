<template>
    <div class="dialog">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dialog'
    }
</script>

<style>
    .dialog {
        position: absolute;
        display: flex;
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        z-index: 100;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.25);
    }

    .dialog .content {
        position: relative;
        display: flex;
        min-width: 25vw;
        min-height: 25vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        border-radius: max(1vw, 1vh);
        padding: 2vw;
    }

    .dark-theme .dialog .content {
        background-color: #18212b;
        color: #fff;
    }
</style>