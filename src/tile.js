function Tile(anim) {
	this.anim = anim;
}

Tile.prototype.update = function(elapsedTime) {
	this.anim.update(elapsedTime);
};

Tile.prototype.getImage = function() {
	return this.anim.getImage();
};