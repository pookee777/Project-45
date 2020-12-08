class Poison
{
    constructor(x,y)
    {
        var option =
        {
            isStatic : true
        }
        this.poison = Bodies.rectangle(x,y,55,75,option);
        this.img = loadImage("poison.png");
        this.x = x;
        this.y = y;
        World.add(world,this.poison);
    }
    display()
    {
        push();
        imageMode(CENTER);
        image(this.img,this.poison.position.x,this.poison.position.y,55,75);
        pop();
    }
}