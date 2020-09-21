class Particle extends CircleBaseClass{

    constructor(x, y, r){
        super(x, y, 10/2);

        this.color = color(random(0, 255), random(0, 255), random(0,255));
    }

    display(){
        super.display();
        fill(this.color);

        var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        noStroke();

        ellipse(0, 0, this.r, this.r);

        pop();
    }
}