<template>
    <div class="button">
        <span class="text">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'Button'
    }
</script>

<style>
    .button {
        position: relative;
        display: flex;
        width: auto;
        height: auto;
        align-items: center;
        justify-content: center;
        border-radius: max(0.625vw, 0.11vh);
        cursor: pointer;
        transition: filter 0.12s ease-in-out;
        background-color: #1abc9c;
        color: #fff;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }

    .button .text {
        font-size: max(1.25vw, 2.22vh);
        font-weight: 600;
        padding: 2vh 3vw;
        text-align: center;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    }

    .button:hover {
        filter: brightness(90%);
    }

    .button:active {
        filter: brightness(80%);
    }

    .dark-theme .button {
        background-color: #145f33;
    }
</style>