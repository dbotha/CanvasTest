var MOVE_SPEED 	= 0.1;
var DIR_RIGHT 	= 0;
var DIR_LEFT 	= 1;
var JUMP_IMPULSE = 0.5;
var GRAVITY = 0.002;

function Sprite(idleLeftAnim, walkLeftAnim, idleRightAnim, walkRightAnim) {
	
	var currAnim = idleRightAnim;
	var x = 400, y = 300, jumpStartY = 0, dx = 0, dy = 0;
	var lastMoveDir = DIR_RIGHT;
	var jumping = false;
	
	this.update = function(elapsedTime) {
		currAnim.update(elapsedTime);
		x += elapsedTime * dx;
		
		if (jumping) {
			dy -= elapsedTime * GRAVITY;
			y -= elapsedTime * dy;
			if (y > jumpStartY) {
				y = jumpStartY;
				jumping = false;
				dy = 0;
			}
		}
	};
	
	this.moveLeft = function() {
		currAnim = walkLeftAnim;
		dx = -MOVE_SPEED;
		lastMoveDir = DIR_LEFT;
	};
	
	this.moveRight = function() {
		currAnim = walkRightAnim;
		dx = MOVE_SPEED;
		lastMoveDir = DIR_RIGHT;
	};
	
	this.jump = function() {
		if (!jumping) {
			jumping = true;
			dy = JUMP_IMPULSE;
			jumpStartY = y;
		}
	};
	
	this.idle = function() {
		currAnim = lastMoveDir == DIR_LEFT ? idleLeftAnim : idleRightAnim;
		dx = 0;
	};
	
	this.getX = function() {
		return Math.round(x);
	};
	
	this.getY = function() {
		return Math.round(y);
	};
	
	this.getImage = function() {
		return currAnim.getImage();
	};
}