function TileLayer(width, height) {
	this.tiles = [width];
	for (var x = 0; x < width; ++x) {
		this.tiles[x] = [height];
		for (var y = 0; y < height; ++y) {
			this.tiles[x][y] = null;
		}
	}
}

TileLayer.prototype.getWidth = function() {
	return this.tiles.length;
};

TileLayer.prototype.getHeight = function() {
	return this.tiles[0].length;
};

TileLayer.prototype.setTile = function(x, y, tile) {
	this.tiles[x][y] = tile;
};

TileLayer.prototype.getTile = function(x, y) {
	return this.tiles[x][y];
};

TileLayer.prototype.update = function(elapsedTime) {
	for (var x = 0; x < this.getWidth(); ++x) {
		for (var y = 0; y < this.getHeight(); ++y) {
			var tile = this.tiles[x][y];
			if (tile) {
				tile.update(elapsedTime);
			}
		}
	}
};