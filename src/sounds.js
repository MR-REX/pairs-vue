export default class {
    constructor() {
        this.stored = {}
    }

    register(uniqueid, file) {
        this.stored[uniqueid] = new Audio(file);
    }

    play(uniqueid) {
        let audio = this.stored[uniqueid];

        if (audio === undefined)
            return false;

        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
        
        audio.play();
        return true;
    }
}