class Plinko extends CircleBaseClass{

    constructor(x, y){
        
        super(x, y, 10/2);
        Body.setStatic(this.body, true);

    }

    display(){
        super.display();
    }
}