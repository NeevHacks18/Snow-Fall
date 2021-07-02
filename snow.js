class Snow{
    constructor(x,y,r){
        var options = {
            'restitution':0.03,
            'friction':0.8,
            'density':1.0
        }
        this.r = r/2
        this.body = Bodies.circle(x,y,this.r,options);
        this.image = loadImage("snow4.webp")
        World.add(world,this.body);
    }
    display(){
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}