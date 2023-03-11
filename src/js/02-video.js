import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const storageTimeSet = function(e) {
   localStorage.setItem("videoplayer-current-time", e.seconds)
};

player.on('timeupdate', throttle(storageTimeSet, 1000));

if(localStorage.getItem("videoplayer-current-time")){
   player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}