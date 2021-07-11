class Ball {

    constructor(x,y,radius,angle){
        var options={ 
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
        }

        this.body=Bodies.circle(x, y, radius, options, );
        this.radius=radius;

        Matter.Body.setAngle(this.body, angle);

        World.add(world, this.body)
    }

    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(RADIUS);
     fill("red");
     ellipse(0,0,this.radius);
     pop();

     if (keyDown("UP_ARROW")) {
        Matter.Body.applyForce(this.body.object, this.body.object, pos, {x:85, y:-85})
     }
    }
}