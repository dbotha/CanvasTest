function TileMap(playerLayer) {
	this.playerLayer = playerLayer;
}

TileMap.prototype.update = function(elapsedTime) {
	this.playerLayer.update(elapsedTime);
};

TileMap.prototype.getPlayerLayer = function() {
	return this.playerLayer;
};

