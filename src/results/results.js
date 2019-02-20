import userDisplay from '../js-assets/user-display.js';
const json = window.localStorage.getItem('player');
const player = JSON.parse(json);
const resultSection = document.getElementById('results');

userDisplay(player);

function tally(score) {
    if(score > 21) {
        return 'good';
    } else if(score > 15) {
        return 'okay';
    } else {
        return 'bad';
    }
}

resultSection.textContent = tally(player.score);
