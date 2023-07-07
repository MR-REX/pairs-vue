<template>
    <Button ref="buttons" v-for="index in size * size" :key="index" @select="onSelect"></Button>
</template>

<script>
    import Button from './components/Button.vue';
    import colors from './colors.js';

    export default {
        name: 'App',
        components: {
            Button
        },
        data() {
            return {
                selected: null,
                canSelect: true,
                selectCooldown: 0.5 * 1000,
                size: 6
            }
        },
        methods: {
            onSelect(button) {
                if (!this.canSelect)
                    return;

                button.setSelected(true);

                if (this.selected !== null) {
                    if (button == this.selected)
                        return;

                    if (this.selected.getColor() == button.getColor()) {
                        button.setLocked(true);

                        this.selected.setLocked(true);
                        this.selected = null;

                        return;
                    }

                    this.canSelect = false;

                    setTimeout(() => {
                        this.selected.setSelected(false);
                        this.selected = null;

                        button.setSelected(false);

                        this.canSelect = true;
                    }, this.selectCooldown);

                    return;
                }

                this.selected = button;
            },
            generate() {
                let colorNames = Object.keys(colors);
                let array = [];

                for (let i = 0; i < this.size * this.size / colorNames.length; i++)
                    array.push(...colorNames);

                array.length = this.size * this.size;

                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }

                let buttons = this.$refs.buttons;

                for (let i = 0; i < buttons.length; i++)
                    buttons[i].setColor(colors[array[i]]);

                let app = document.querySelector('#app');

                let gridSize = Array(this.size).fill('1fr');
                app.style = `grid-template-columns: ${gridSize.join(' ')}`;
            }
        },
        mounted() {
            this.generate();
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

    #app {
        display: grid;
        width: 512px;
        height: 512px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 5px 5px;
    }
</style>