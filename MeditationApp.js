    let min = 00;
    let sec = 00;
    let x;
    const time = document.querySelector('.time-display');
    time.innerHTML = min + ':' + sec;
    const song = document.querySelector('.song');
    const video = document.querySelector('.video-container');
    const symbol = document.querySelector('.material-icons');

    const play = () => {
        if(song.paused) {
            song.play();
            video.play();
            symbol.innerHTML = 'play_circle';
            start();
        }else{
            song.pause();
            video.pause();
            symbol.innerHTML = 'pause_circle';
            stop();
        }
    }
    function five() {
        min = 05;
        sec = 00;
        time.innerHTML = min + ':' + sec;
    }

    function ten() {
        min = 10;
        sec = 00;
        time.innerHTML = min + ':' + sec;
    }

    function fifteen() {
        min = 15;
        sec = 00;
        time.innerHTML = min + ':' + sec;
    }

    function start() {
       x =  setInterval(countdown , 1000)
    }

    function countdown() {
        if(sec == 0) {
                sec = 59;
                min--;
            }else {
                sec--;
            }
            time.innerHTML = min + ':' + sec;
    }

    function stop() {
        clearInterval(x);
    }