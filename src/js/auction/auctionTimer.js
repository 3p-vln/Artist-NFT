export function auctionTimer(time) {
    // function random(min, max) {
    //     var rand = min + Math.random() * (max + 1 - min);
    //     rand = Math.floor(rand);
    //     return rand;
    // }

    // setTimeout(function () {
    //     document.querySelector('progress').value = random(10, 100);
    // }, 0);

    // function progress(time) {
    //     let start = 0;
    //     let progressElement = document.getElementById('progress');
    //     let intervalId = setInterval(function () {
    //         if (start > 100) {
    //             clearInterval(intervalId);
    //         } else {
    //             progressElement.value = start;
    //         }
    //         start++;
    //     }, time);
    // }

    // progress(1000);

    function progress() {
        const progressElement = document.getElementById('progress');
        const start = new Date('2024-02-05 00:08:00');
        const end = new Date('2024-03-05 00:08:00');
        const now = new Date();

        const finish = Math.floor((end.getTime() - start.getTime()) / 1000);
        const pass = (now.getTime() - start.getTime()) / 1000;
        const onePercent = finish / 100;
        let value = pass / onePercent;

        if (value < 0) {
            value = 0;
        } else if (value > 100) {
            value = 100;
        }

        progressElement.value = value;
    }

    progress();
    setInterval(progress, 10000);

    function timer() {
        const dateEnd = new Date('2024-03-05 00:08:00');
        const dateNow = new Date();
        let date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

        function countdown() {
            let dateLeft = date;
            let dateTemp = 0;

            if (dateLeft >= 0) {
                dateTemp = Math.floor(dateLeft / (24 * 60 * 60));
                dateLeft -= dateTemp * 24 * 60 * 60;
                if (dateTemp < 10) {
                    dateTemp = '0' + dateTemp;
                }
                document.querySelector('#days span').innerHTML = dateTemp;

                dateTemp = Math.floor(dateLeft / (60 * 60));
                dateLeft -= dateTemp * 60 * 60;
                if (dateTemp < 10) {
                    dateTemp = '0' + dateTemp;
                }
                document.querySelector('#hours span').innerHTML = dateTemp;

                dateTemp = Math.floor(dateLeft / 60);
                dateLeft -= dateTemp * 60;
                if (dateTemp < 10) {
                    dateTemp = '0' + dateTemp;
                }
                document.querySelector('#minutes span').innerHTML = dateTemp;

                if (dateLeft < 10) {
                    dateLeft = '0' + dateLeft;
                }
                document.querySelector('#seconds span').innerHTML = dateLeft;

                date--;
            }
        }

        setInterval(countdown, 1000);
    }

    timer();
}
