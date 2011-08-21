var SCREEN_WIDTH 	= 800;
var SCREEN_HEIGHT 	= 600;
var KEY_RIGHT 		= 39;
var KEY_LEFT 		= 37;
var KEY_UP			= 38;
var KEY_SPACE 		= 32;

/* some ugly globals. */
var gc;
var idleRightAnim 	= new Animation();
var idleLeftAnim  	= new Animation();
var walkRightAnim 	= new Animation();
var walkLeftAnim  	= new Animation();
var sprite 		  	= new Sprite(idleLeftAnim, walkLeftAnim, idleRightAnim, walkRightAnim);
var keyRightPressed = false;
var keyLeftPressed 	= false;

function init() {
	window.addEventListener('keydown', keyDown, true);
	window.addEventListener('keyup', keyUp, true);
	initAnimations();
	gc = document.getElementById('mycanvas').getContext('2d');

	img = new Image();
	img.src = "images/right1.png";
	var currTime = new Date().getTime(), elapsedTime;
	setInterval(function gameloop() {
		elapsedTime = new Date().getTime() - currTime;
		currTime += elapsedTime;
		update(elapsedTime);
		render();
	}, Math.round(1000 / 60));
}

function initAnimations() {
	idleLeftAnim.addFrame("images/left4.png");
	walkLeftAnim.addFrame("images/left1.png", 60);
	walkLeftAnim.addFrame("images/left2.png", 60);
	walkLeftAnim.addFrame("images/left3.png", 60);
	walkLeftAnim.addFrame("images/left4.png", 60);
	walkLeftAnim.addFrame("images/left5.png", 60);
	walkLeftAnim.addFrame("images/left6.png", 60);
	walkLeftAnim.addFrame("images/left7.png", 60);
	walkLeftAnim.addFrame("images/left8.png", 60);
	
	idleRightAnim.addFrame("images/right4.png");
	walkRightAnim.addFrame("images/right1.png", 60);
	walkRightAnim.addFrame("images/right2.png", 60);
	walkRightAnim.addFrame("images/right3.png", 60);
	walkRightAnim.addFrame("images/right4.png", 60);
	walkRightAnim.addFrame("images/right5.png", 60);
	walkRightAnim.addFrame("images/right6.png", 60);
	walkRightAnim.addFrame("images/right7.png", 60);
	walkRightAnim.addFrame("images/right8.png", 60);
}

function setPressed(keyCode, pressed) {
	switch (keyCode) {
	case KEY_RIGHT:
		keyRightPressed = pressed;
		break;
	case KEY_LEFT:
		keyLeftPressed = pressed;
		break;
	case KEY_SPACE:
	case KEY_UP:
		sprite.jump();
		break;
	}
}

function keyDown(event) {
	setPressed(event.keyCode, true);
}

function keyUp(event) {
	setPressed(event.keyCode, false);
}

function update(elapsedTime) {
	if (keyLeftPressed) {
		sprite.moveLeft();
	} else if (keyRightPressed) {
		sprite.moveRight();
	} else {
		sprite.idle();
	}
	
	sprite.update(elapsedTime);
}

function render() {
	gc.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
	gc.drawImage(sprite.getImage(), sprite.getX(), sprite.getY());
}