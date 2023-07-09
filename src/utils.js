export function shuffleArray(array, count = 1) {
    for (let n = 0; n < count; n++) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

export function randomInt(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(random);
}

export function generatePairsArray(source, count = 1) {
    let array = [];

    for (let i = 0; i < count; i++) {
        let value = source[randomInt(0, source.length - 1)];
        array.push(value, value);
    }

    return array;
}