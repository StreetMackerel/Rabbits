class Rabbit {
    constructor(_size){
        this.position = createVector(random(0+(_size*2),width-(_size*2)),random(0+(_size*2),height-(_size*2)));
        this.velocity = createVector(random(-2,2),random(-2,2));
        this.size = _size;
        this.r = this.size/2;
        this.myColor = color(0,0,0);
    }
    
    render() {
        stroke(0);
        strokeWeight(0)
        fill(this.myColor); //enables changing colour dynamically
        push()
            translate(this.position.x,this.position.y)
            ellipse(0,0,this.size,this.size);
        pop();
    }
    
    step() {
        this.position.add(this.velocity);
    }
    
    
    checkEdges(){ // inculdes radius for accurate bouncing at edges
        
        if(this.position.x - this.r < 0 || this.position.x + this.r > width){
            this.velocity.x = this.velocity.x * -1;
        }
        
        if(this.position.y -this.r < 0 || this.position.y +this.r > height){
            this.velocity.y = this.velocity.y * -1;
        }
    }
    
}

class Male extends Rabbit {
    constructor(_size){
        super();
        this.myColor = color(0,0,255);
    }
}

class Female extends Rabbit {

    constructor(_size){
        super();
        this.position = createVector(random(0+(_size*2),width-(_size*2)),random(0+(_size*2),height-(_size*2)));
        this.velocity = createVector(random(-2,2),random(-2,2));
        this.size = _size;
        this.r = this.size/2;
        this.myColor = color(255,44,180);

   }
}

class YoungFemale extends Female{
    
       constructor(_size, _speed){
       super();
       this.position = createVector(random(0+(_size*2),width-(_size*2)),random(0+(_size*2),height-(_size*2)));
       this.size = _size;
       this.r = this.size/2;
       this.speed = _speed;
   }
    

     render(){
         
         this.myColor = lerpColor(color(255,0,150),color(255,200,200),map(sin(frameCount*this.speed),0,1,0,1));
         
super.render();
        }
        
}

class YoungMale extends Male{
    
        constructor(_size, _speed){
        super();
        this.position = createVector(random(0+(_size*2),width-(_size*2)),random(0+(_size*2),height-(_size*2)));
        this.size = _size;
        this.r = this.size/2;
        this.zoneSizeMax = this.size*2;
        this.zoneSize;
        this.speed = _speed;
    }
    
    render(){ 
        super.render();
        strokeWeight(5)
        noFill();
        this.zoneSize = map((sin(frameCount*this.speed)), -1, 1, this.size, this.zoneSizeMax);
        ellipse(this.position.x,this.position.y,this.zoneSize,this.zoneSize);
    }
    
}

class OldFemale extends Female{
    constructor(_size){
        super();
        this.size = _size/2;
        this.position = createVector(random(0+(_size*2),width-(_size*2)),random(0+(_size*2),height-(_size*2)));
        this.r = this.size/2;
    }
}

class OldMale extends Male{
    constructor(_size){
        super();
        this.size = _size/2;
        this.position = createVector(random(0+(_size*2),width-(_size*2)),random(0+(_size*2),height-(_size*2)));
        this.r = this.size/2;
    }
}
    
    