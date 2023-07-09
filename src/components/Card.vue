<template>
    <div :class="{ card: true, hidden: !selected && !locked }"
         :style="{ backgroundColor: color }"
         @click="onClick">

    </div>
</template>

<script>
    import colors from '../colors.js';

    export default {
        name: 'Card',
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
            isLocked() {
                return this.locked;
            },
            onClick() {
                if (!this.locked)
                    this.$emit('select', this);
            }
        }
    }
</script>

<style>
    .card {
        border-radius: 10%;
        cursor: pointer;
        transition: background-color 0.12s ease-in-out;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    }

    .card.hidden {
        background-color: #FFF !important;
    }

    .card:hover {
        filter: brightness(97%);
    }

    .dark-theme .card {
        box-shadow: none;
        border: 1px solid rgba(0, 0, 0, 0.4);
    }

    .dark-theme .card.hidden {
        background-color: #34495e !important;
    }

    .dark-theme .card {
        filter: brightness(75%);
    }

    .dark-theme .card:hover {
        filter: brightness(70%);
    }
</style>