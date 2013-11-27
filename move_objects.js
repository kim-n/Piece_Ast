(function (root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {} );
	
	var MoveObject = Asteroids.MoveObject = function (startPos, velocity, radius, color) {
		this.pos = startPos;
		this.vel = velocity;
		this.radius = radius;
		this.color = color;
	};

	MoveObject.prototype.move = function () {
		// use vel rto update pos
		this.pos[0] = this.pos[0] + this.vel[0];
		this.pos[1] = this.pos[1] + this.vel[1];
	};
	
	MoveObject.prototype.draw = function(ctx) {
		// takes a canvus contex
		// draws a circle of appr. radius around pos

		// arc(float x, float y, float radius, float startAngle, float endAngle)
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false	// dont know what false is here
		);
		
		ctx.fill();
	};
	
	MoveObject.prototype.isCollideWith = function(otherObject) {
		// compute difference betwee centers
		// if sum of raddi is greater than this, circles collide
		var myPos = this.pos
		var otherPos = otherObject.pos
		var distance = Math.sqrt( Math.pow(myPos[0] - otherPos[0], 2 ) +  Math.pow(myPos[1] - otherPos[1], 2 ));
		var radiiSum = this.radius + otherObject.radius;
		return radiiSum > distance;
	};
	
	
/*	Asteroids.run = function (canvus) {
		
		var ctx = canvus.getContext("2d");
		
		var cr = new MoveObject( [25, 25], [25,25], 20, "black");

		var cr2 = new MoveObject( [20, 20], [25,25], 20, "blue");
		
		
		cr.move();
		
		cr.draw(ctx);
		
		cr2.draw(ctx);
		
		alert(cr.isCollideWith(cr2))
		
	} */
	
	/* ==================================================*/
	
	var Asteroid = Asteroids.Asteroid = function () {
		MoveObject.call(this, startPos, velocity, Asteroid.RADIUS, Asteroid.COLOR)
	}
	
	function Surrogate() {};
	
	Surrogate.prototype = MoveObject.prototype;
	
	Asteroid.prototype = new Surrogate();
	
	Asteroid.COLOR = "red";
	Asteroid.RASIUS = 20;
	
	function randomVec(){
		
	}
	
	Asteroid.randomAsteroid(dimX, dimY){
		var pos = [dimX * Math.random, dimY * Math,random()]
		
		return new Asteroid(pos, randomVec())
	}
})(this);