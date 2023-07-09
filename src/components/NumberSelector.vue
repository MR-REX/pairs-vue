<template>
    <div class="number-selector">
        <RoundButton class="bg-blue fg-white"
                     icon="fa-solid fa-caret-left"
                     @click="addValue(-getStep())">
        </RoundButton>
        <span class="number">{{ getDisplay() }}</span>
        <RoundButton class="bg-blue fg-white"
                     icon="fa-slid fa-caret-right"
                     @click="addValue(getStep())">
        </RoundButton>
    </div>
</template>

<script>
    import RoundButton from './RoundButton.vue';

    export default {
        name: 'NumberSelector',
        components: {
            RoundButton
        },
        props: {
            defaultValue: Number,
            step: Number,
            min: Number,
            max: Number,
            display: Function
        },
        data() {
            return {
                value: this.defaultValue || 0
            }
        },
        methods: {
            getStep() {
                return this.step || 1;
            },
            getMin() {
                return this.min || 0;
            },
            getMax() {
                return this.max || 100;
            },
            getDisplay() {
                if (typeof this.display === 'function')
                    return this.display(this.value);

                return this.value;
            },
            getValue() {
                return this.value;
            },
            setValue(value) {
                this.value = Math.min(Math.max(value, this.getMin()), this.getMax());
            },
            addValue(value) {
                this.setValue(this.getValue() + value);
            }
        }
    }
</script>

<style>
    .number-selector {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
        justify-content: center;
        align-items: center;
    }

    .number-selector .number {
        margin: 0 max(3.34vw, 6vh);
        padding: 8px 16px;
        font-size: max(1.25vw, 2.22vh);
        font-weight: 600;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 8px;
    }

    .number-selector .round-button {
        height: max(3.34vw, 6vh);
    }

    .dark-theme .number-selector .number {
        border: 1px solid rgba(255, 255, 255, 0.25);
    }
</style>