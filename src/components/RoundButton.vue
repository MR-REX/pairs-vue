<template>
    <div class="round-button" @click="onClick">
        <img class="icon" :src="require(`@/assets/icons/${icon}.svg`)">
    </div>
</template>

<script>
    import sounds from '../sounds.js';

    sounds.register('button_click', require('../assets/sounds/click.mp3'));

    export default {
        name: 'RoundButton',
        props: {
            icon: String
        },
        methods: {
            onClick() {
                sounds.play('button_click');
            }
        }
    }
</script>

<style>
    .round-button {
        position: relative;
        display: flex;
        aspect-ratio: 1 / 1;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #fff;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }

    .round-button:hover {
        filter: brightness(95%);
    }

    .round-button:active {
        filter: brightness(85%);
    }

    .round-button .icon {
        height: 75%;
    }

    .round-button.bg-blue {
        background-color: #3498db;
    }

    .round-button.bg-green {
        background-color: #3ad47a;
    }

    .round-button.bg-red {
        background-color: #d45546;
    }

    .round-button.bg-black {
        background-color: #2c3e50;
    }

    .round-button.fg-white .icon {
        filter: invert(100%);
    }

    .round-button.fg-yellow .icon {
        filter: invert(72%) sepia(100%) saturate(478%) hue-rotate(354deg) brightness(98%) contrast(93%);
    }
</style>