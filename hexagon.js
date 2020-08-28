class Hexagon{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.4,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("hexagon.png");
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}