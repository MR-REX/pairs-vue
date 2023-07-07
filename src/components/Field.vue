<template>
    <div class="field">
        <Card ref="cards" v-for="index in size * size" :key="index" @select="onSelect"></Card>
    </div>
</template>

<script>
    import Card from './Card.vue';
    
    import colors from '../colors.js';
    import Sounds from '../sounds.js';

    const SELECT_COOLDOWN = 0.5 * 1000;
    const sounds = new Sounds();

    sounds.register('card_pick1', require('../assets/sounds/pick1.mp3'));
    sounds.register('card_pick2', require('../assets/sounds/pick2.mp3'));
    sounds.register('pair_guessed', require('../assets/sounds/guessed.mp3'));

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

                        sounds.play('pair_guessed');

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

                let cards = this.$refs.cards;

                for (let i = 0; i < cards.length; i++)
                    cards[i].setColor(colors[array[i]]);

                let app = document.querySelector('.field');

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
    .field {
        display: grid;
        width: 512px;
        height: 512px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 5px 5px;
    }
</style>