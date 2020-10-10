class ground
{
   constructor(x,y,width,height)
   {
       var static={
           isStatic:true
       }
       this.body=bod.rectangle(x,y,width,height,static);
       this.width=width;
       this.height=height;
       wor.add(world,this.body);
    }

    display()
    {
    rectMode(CENTER);
    fill("brown");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}