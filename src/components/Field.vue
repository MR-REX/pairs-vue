<template>
    <div class="field" :style="{gridTemplateColumns: '1fr '.repeat(size)}">
        <Card ref="cards" v-for="index in size * size" :key="index" @select="onSelect"></Card>
    </div>
</template>

<script>
    import Card from './Card.vue';
    
    import colors from '../colors.js';
    import sounds from '../sounds.js';

    import { shuffleArray, repeatArray } from '../utils.js';

    const SELECT_COOLDOWN = 0.5 * 1000;

    sounds.register('card_pick1', require('../assets/sounds/pick1.mp3'));
    sounds.register('card_pick2', require('../assets/sounds/pick2.mp3'));
    sounds.register('card_guess', require('../assets/sounds/guessed.mp3'));

    export default {
        name: 'Field',
        components: {
            Card
        },
        data() {
            return {
                size: 6,
                selectedCard: null,
                canSelect: true
            }
        },
        methods: {
            onSelect(card) {
                if (!this.canSelect)
                    return;

                card.setSelected(true);

                if (this.selectedCard !== null) {
                    if (card == this.selectedCard)
                        return;

                    if (this.selectedCard.getColor() == card.getColor()) {
                        card.setLocked(true);

                        this.selectedCard.setLocked(true);
                        this.selectedCard = null;

                        sounds.play('card_guess');

                        return;
                    }

                    this.canSelect = false;
                    sounds.play('card_pick2');

                    setTimeout(() => {
                        this.selectedCard.setSelected(false);
                        this.selectedCard = null;

                        card.setSelected(false);

                        this.canSelect = true;
                    }, SELECT_COOLDOWN);

                    return;
                }

                this.selectedCard = card;
                sounds.play('card_pick1');
            },
            setSize(size) {
                this.size = size;
            },
            restart() {
                let colorNames = Object.keys(colors);
                let array = repeatArray(colorNames, this.size ** 2);

                shuffleArray(array, 3);

                for (let i = 0; i < array.length; i++) {
                    let card = this.$refs.cards[i];

                    card.setSelected(false);
                    card.setLocked(false);

                    card.setColor(colors[array[i]]);
                }
                
                this.selectedCard = null;
            }
        },
        mounted() {
            this.restart();
        }
    }
</script>

<style>
    .field {
        display: grid;
        width: max(27vw, 48vh);
        height: max(27vw, 48vh);
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 5px 5px;
    }
</style>