<template>
    <div :class="{ button: true, hidden: !selected && !locked }"
         :style="{ backgroundColor: color }"
         @click="onClick">

    </div>
</template>

<script>
    import colors from '../colors.js';

    export default {
        name: 'Button',
        data() {
            return {
                color: colors.green,
                selected: false,
                locked: false
            }
        },
        methods: {
            setColor(hexColor) {
                this.color = hexColor;
            },
            getColor() {
                return this.color;
            },
            setSelected(selected) {
                this.selected = selected;
            },
            setLocked(locked) {
                this.locked = locked;
            },
            onClick() {
                if (!this.locked)
                    this.$emit('select', this);
            }
        }
    }
</script>

<style>
    .button {
        border-radius: 10%;
        cursor: pointer;
        transition: background-color 0.12s ease-in-out;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }

    .button.hidden {
        background-color: #FFF !important;
        /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; */
    }
</style>