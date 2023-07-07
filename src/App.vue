<template>
    <Field></Field>
    <div class="controls">
        <ToggleButton :class="{'bg-blue fg-yellow': !darkTheme, 'bg-black fg-white': darkTheme}"
                      :icon="darkTheme ? 'moon' : 'sun'"
                      @toggle="onThemeChanged">
        </ToggleButton>
        <ToggleButton :class="{'bg-green': !soundsMuted, 'bg-red fg-white': soundsMuted}"
                      :icon="soundsMuted ? 'volume_off' : 'volume_on'"
                      @toggle="onVolumeChanged">
        </ToggleButton>
    </div>
</template>

<script>
    import Field from './components/Field.vue';
    import RoundButton from './components/RoundButton.vue';
    import ToggleButton from './components/ToggleButton.vue';

    import sounds from './sounds.js';

    export default {
        name: 'App',
        components: {
            Field,
            RoundButton,
            ToggleButton
        },
        data() {
            return {
                darkTheme: false,
                soundsMuted: false
            }
        },
        methods: {
            onThemeChanged(toggleButton, isEnabled) {
                this.darkTheme = isEnabled;
                document.body.classList.toggle('dark-theme');
            },
            onVolumeChanged(toggleButton, isEnabled) {
                this.soundsMuted = isEnabled;
                sounds.setMuted(isEnabled);
            }
        }
    }
</script>

<style>
    body {
        padding: 0;
        margin: 0;
    }

    #app {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .dark-theme {
        background-color: #18212b;
    }

    .controls {
        position: absolute;
        display: flex;
        height: 15vh;
        min-height: 75px;
        bottom: 0;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 16px 16px 0 0;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }

    .dark-theme .controls {
        background-color: #18212b;
        box-shadow: rgba(101, 127, 175, 0.16) 0px 10px 36px 0px, rgba(255, 255, 255, 0.06) 0px 0px 0px 1px;
    }

    .controls .round-button {
        height: 50%;
        margin-left: 2vw;
    }

    .controls .round-button:last-child {
        margin-right: 2vw;
    }
</style>