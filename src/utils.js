export function shuffleArray(array, count = 1) {
    for (let n = 0; n < count; n++) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

export function repeatArray(source, count = 1) {
    let array = [];

    for (let i = 0; i < count; i++)
        array.push(...source);

    array.length = count;
    return array;
}