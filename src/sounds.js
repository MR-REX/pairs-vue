export default new class {
    #stored = [];
    #muted = false;

    register(uniqueid, file) {
        this.#stored[uniqueid] = new Audio(file);
    }

    isMuted() {
        return this.#muted;
    }

    setMuted(muted) {
        this.#muted = muted;
    }

    play(uniqueid) {
        let audio = this.#stored[uniqueid];

        if (audio === undefined)
            return false;

        if (this.#muted)
            return false;

        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
        
        audio.play();
        return true;
    }
}