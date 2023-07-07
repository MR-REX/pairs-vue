<template>
    <RoundButton :class="{enabled: enabled}" @click="onClick"></RoundButton>
</template>

<script>
    import RoundButton from './RoundButton.vue';

    export default {
        name: 'ToggleButton',
        components: {
            RoundButton
        },
        data() {
            return {
                enabled: false
            }
        },
        methods: {
            isEnabled() {
                return this.enabled;
            },
            setEnabled(enabled, withoutCallback = false) {
                this.enabled = enabled === true;

                if (!withoutCallback) {
                    this.$emit(this.enabled ? 'enable' : 'disable', this);
                    this.$emit('toggle', this, this.enabled);
                }
            },
            onClick() {
                this.setEnabled(!this.enabled);
            }
        }
    }
</script>