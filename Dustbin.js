class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
        this.w=200;
        this.h=200;
        this.thickness=20
		this.y=y;
this.image=loadImage("dustbingreen.png")
this.lb=Bodies.rectangle(this.x-this.w/2,this.y-this.h/2,this.thickness,this.h,{ isStatic: true})
this.rb=Bodies.rectangle(this.x+this.w/2,this.y-this.h/2,this.thickness,this.h,{ isStatic: true})
this.bb=Bodies.rectangle(this.x,this.y,this.w,this.thickness,{ isStatic: true})
 		World.add(world, this.lb);
         World.add(world, this.rb);
         World.add(world, this.bb);
	}
	display()
	{
		var bPos=this.bb.position;	
        var rPos=this.rb.position;	
        var lPos=this.lb.position;

		push()
		translate(bPos.x, bPos.y+10);
		// rectMode(CENTER);
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,-this.h/2,this.w,this.h)
		pop()

        push()
		translate(lPos.x, lPos.y+10);
		// rectMode(CENTER);
		rotate(this.angle)
		pop()

        push()
		translate(rPos.x, rPos.y+10);
		// rectMode(CENTER);
		rotate(this.angle)
		pop()
 }

}