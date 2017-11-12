//Bad variables for transition
var colors = ["#252525", "#fff"];
var activeFore = 1;
var activeBack = 0;

setInterval(function(){
    document.querySelector('#fadingBackground').style.background = colors[activeBack];
    document.querySelector('#fadingBackground').style.color      = colors[activeFore];    
    activeFore++;
    activeBack++;
    if (activeFore == colors.length) activeFore = 0;
    if (activeBack == colors.length) activeBack = 0;
}, 5000);