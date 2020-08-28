class Box3{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.5,
            'friction':1,
            'density':1.2,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.image  = loadImage("yellow.png");
        this.height = height;
        this.Visibility = 255;
        World.add(world,this.body);
    }
    display(){
        if (this.body.speed<5) {
         push();
         translate(this.body.position.x,this.body.position.y);
         rotate(this.body.angle)
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);          
            pop();
        }
    }
    }
