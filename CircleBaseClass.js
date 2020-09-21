class CircleBaseClass{
    
    constructor(x, y, r){

        this.body = Bodies.circle(x, y, r/2);
        World.add(world, this.body);

        this.r = r;
    }

    display(){

        var pos = this.body.position;
        
        ellipseMode(RADIUS);
        fill("white");

        ellipse(pos.x, pos.y, this.r, this.r);
    }
}