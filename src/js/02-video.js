import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe,{autoplay: true});
let timeVideoLocalStorage=(JSON.parse(localStorage.getItem("videoplayer-current-time")))||0;
player.setCurrentTime(timeVideoLocalStorage)
player.on("timeupdate", throttle(onTimePlay,1000)) 
function onTimePlay(e){
let timePlayVideo=JSON.stringify(e.seconds)
localStorage.setItem("videoplayer-current-time",timePlayVideo)
}