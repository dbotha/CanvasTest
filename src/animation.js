function Animation() {
	/* AnimationFrame inner class */
	function AnimationFrame(img, frameEndTime) {
		this.img = img;
		this.frameEndTime = frameEndTime;
	}
	
	var frames = new Array();
	var currFrameIndex = 0;
	var totalElapsedTime = 0;
	var totalDuration = 0;
	
	this.addFrame = function(imgFileName, duration) {
		totalDuration += duration || 0;
		var img = new Image();
		img.src = imgFileName;
		frames.push(new AnimationFrame(img, totalDuration));
	};
	
	this.getImage = function() {
		return frames[currFrameIndex].img;
	};
	
	this.update = function(elapsedTime) {
		if (frames.length > 0) {
			totalElapsedTime += elapsedTime;
			if (totalElapsedTime >= totalDuration) {
				totalElapsedTime %= totalDuration;
				currFrameIndex = 0;
			}
			
			while (frames[currFrameIndex].frameEndTime < totalElapsedTime) {
				++currFrameIndex;
			}
		}
	};

}

