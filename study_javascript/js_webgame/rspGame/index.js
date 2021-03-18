'use strict';

let imgLocation = '0';
let dictionary = {
    rock : '0',
    scissors : '-142px',
    paper : '-284',
};

imgLocation.replace();
function computerSelect(imgLocation){
    // indexOf는 1차원 배열에서 씀
    // find, findIndex 2차원 배열에서 씀
    return Object.entries(dictionary).find((v) => {
        return v[1] === imgLocation;
    })[0]
}

setInterval(() => {
    if(imgLocation === dictionary.rock){
        imgLocation = dictionary.scissors;
    } else if (imgLocation === dictionary.scissors){
        imgLocation = dictionary.papaer;
    } else {
        imgLocation = dictionary.rock;
    }
    document.querySelector('#computer').style.background = 
    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imgLocation + ' 0';
}, 100);

document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      console.log(this.textContent ,computerSelect(imgLocation));  
    });    
});
