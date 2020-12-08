class Bile
{
    constructor(x,y)
    {
        var options =
        {
            isStatic : true
        };
        this.bile = Bodies.rectangle(x,y,55,55,options);
        this.image = loadImage("armadillo bile.png");
        this.x = x;
        this.y = y;
        World.add(world,this.bile);
    }
    display()
    {
        push();
        imageMode(CENTER);
        image(this.image,this.bile.position.x,this.bile.position.y,55,55);
        pop();
    }
}