<template>
    <img class="logo" src="@/assets/images/logo.svg">
    <Field ref="field"></Field>
    <div class="controls">
        <ToggleButton :class="{'bg-blue fg-yellow': !darkTheme, 'bg-black fg-white': darkTheme}"
                      :icon="darkTheme ? 'moon' : 'sun'"
                      @toggle="onThemeChanged">
        </ToggleButton>
        <ToggleButton :class="{'bg-green fg-white': !soundsMuted, 'bg-red fg-white': soundsMuted}"
                      :icon="soundsMuted ? 'fa-solid fa-volume-mute' : 'fa-solid fa-volume-high'"
                      @toggle="onVolumeChanged">
        </ToggleButton>
        <RoundButton class="bg-blue fg-white"
                     icon="fa-solid fa-arrow-rotate-right"
                     @click="state = 'new_game'">
        </RoundButton>
    </div>
    <Dialog class="settings" v-if="state !== 'playing'">
        <template v-if="state === 'win'">
            <span class="title">Congratulations!</span>
            <span class="text">You guessed all pairs.<br>Do you want to play again?</span>
            <Button @click="state = 'new_game'">Play again</Button>
        </template>
        <template v-else>
            <span class="title">New game</span>
            <span class="text">Choose the size of the playing field.</span>
            <NumberSelector ref="fieldSizeSelector"
                            :default-value="6"
                            :step="2"
                            :min="4"
                            :max="10"
                            :display="(value) => value + 'x' + value">
            </NumberSelector>
            <Button @click="onStartGame">Play</Button>
        </template>
    </Dialog>
</template>

<script>
    import Field from './components/Field.vue';
    import RoundButton from './components/RoundButton.vue';
    import ToggleButton from './components/ToggleButton.vue';
    import Dialog from './components/Dialog.vue';
    import Button from './components/Button.vue';
    import NumberSelector from './components/NumberSelector.vue';

    import sounds from './sounds.js';

    const STATE = {
        NEW_GAME: 'new_game',
        PLAYING: 'playing',
        WIN: 'win'
    };

    export default {
        name: 'App',
        components: {
            Field,
            RoundButton,
            ToggleButton,
            Dialog,
            Button,
            NumberSelector
        },
        data() {
            return {
                state: STATE.NEW_GAME,
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
            },
            onStartGame(event) {
                let fieldSizeSelector = this.$refs.fieldSizeSelector;
                let field = this.$refs.field;

                field.setSize(fieldSizeSelector.getValue());
                field.restart();

                this.state = STATE.PLAYING;
            },
            onWin() {
                this.state = STATE.WIN;
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

        font-family: 'Montserrat', sans-serif;
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

    .logo {
        position: absolute;
        width: max(16vw, 28vh);
        height: max(11vw, 18.5vh);
        top: 0;
    }

    .dark-theme .logo {
        filter: brightness(85%);
    }

    .settings .content {
        text-align: center;
    }

    .settings .title {
        font-size: max(1.67vw, 2.97vh);
        font-weight: 600;
    }

    .settings > .content > .text {
        font-size: max(1.25vw, 2.22vh);
        font-weight: 400;
        margin: 2vw 0;
    }

    .settings > .content > .number-selector {
        margin-top: 2vw;
        margin-bottom: 4vw;
    }
</style>