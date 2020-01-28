let rabbits = [];
const numOfRabbits = 10; // adjust rabbit count here

function setup() { 
    createCanvas(windowWidth, windowHeight);
    background(127);
    

    for (let i = 0; i < numOfRabbits; i++) {
        let coinToss = getRandomInt(2);
        if (coinToss>0){
            let coinToss = getRandomInt(2);
            if(coinToss>0){
                rabbits.push(new YoungMale(100, random(0.1,0.5)));
            } else {
                rabbits.push(new OldMale(100));
            }
             
        } else {
            let coinToss = getRandomInt(2);
            if(coinToss>0){
                rabbits.push(new YoungFemale(100, random(0.1,0.3)));
            } else {
                rabbits.push(new OldFemale(100));
            }
        }
    }
    
/*    humans.forEach(h => { // for each human run functions
        
    });*/
}



function draw() {
    
    background(127);
    
    rabbits.forEach(rabbits => { 
        rabbits.render();
        rabbits.step();
        rabbits.checkEdges();
    });

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function unloadScrollBars() { // adjusts content size to available screen space
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
}
