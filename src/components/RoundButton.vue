<template>
    <div class="round-button" @click="onClick">
        <font-awesome-icon class="icon" :icon="icon"></font-awesome-icon>
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
        transition: background-color 0.12s ease-in-out;
    }

    .round-button:hover {
        filter: brightness(95%);
    }

    .round-button:active {
        filter: brightness(85%);
    }

    .round-button .icon {
        height: 50%;
    }

    .round-button.bg-blue {
        background-color: #3498db;
    }

    .dark-theme .round-button.bg-blue {
        background-color: #1c577e;
    }

    .round-button.bg-green {
        background-color: #3ad47a;
    }

    .dark-theme .round-button.bg-green {
        background-color: #145f33;
    }

    .round-button.bg-red {
        background-color: #d45546;
    }

    .dark-theme .round-button.bg-red {
        background-color: #88291e;
    }

    .round-button.bg-black {
        background-color: #2c3e50;
    }

    .round-button.fg-white .icon {
        filter: invert(100%);
    }

    .dark-theme .round-button.fg-white .icon {
        filter: invert(90%);
    }

    .round-button.fg-yellow .icon {
        filter: invert(72%) sepia(100%) saturate(478%) hue-rotate(354deg) brightness(98%) contrast(93%);
    }
</style>