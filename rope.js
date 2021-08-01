class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA,y:this.pointB}
		}
	//create rope constraint here
	var con = Matter.Constraint.create({
		pointA:body1,
		bodyB:body2,
		pointB:pointB,
		length:100,
		stiffness:0.1
	  });
	}


    //create display() here 
	display(){
		
		var pointA=this.rope.bodyA.position
		var pointB=this.rope.bodyB.position
		strokeWeight(2);
		line(pointA,pointB)
	}
}
