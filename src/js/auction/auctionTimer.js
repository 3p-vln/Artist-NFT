export function auctionTimer(time) {
    function random(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    setTimeout(function () {
        document.querySelector('progress').value = random(10, 100);
    }, 0);

    function timer() {
        let time = 3600;
        const countDownEl = document.getElementById('countdown');

        setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countDownEl.innerHTML = `${minutes}:${seconds}`;
            time--;
        }
    }

    timer();
}
