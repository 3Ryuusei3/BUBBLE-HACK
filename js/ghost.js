class Ghost {
	constructor(ctx, canvasSize) {
		this.ctx = ctx;
		this.canvasSize = canvasSize;
		this.ghostPos = { x: 1820, y: -885 };
		this.ghostSize = { h: 60, w: 60 };
		this.ghostVel = { x: 1, y: 1 };

		this.image = new Image();
		this.image.src = "./images/ghost-left.png";
		this.image.frames = 2;
		this.image.frameIndex = 0;
	}

	drawGhost(playerPos, framesCounter) {
		this.ctx.drawImage(
			this.image,
			this.image.frameIndex * (this.image.width / this.image.frames),
			0,
			this.image.width / this.image.frames - 50,
			this.image.height - 50,
			this.ghostPos.x,
			this.ghostPos.y,
			this.ghostSize.w,
			this.ghostSize.h
		);

		this.animateGhost(framesCounter);
		this.moveGhost(playerPos);
	}

	moveGhost(playerPos) {
		if (
			playerPos.x < this.ghostPos.x &&
			playerPos.x + 70 < this.ghostPos.x + this.ghostSize.w &&
			this.ghostPos.x < playerPos.x + 70
		) {
			this.image.src = "./images/ghost-right.png";
		} else if (
			playerPos.x > this.ghostPos.x &&
			playerPos.x - 70 > this.ghostPos.x + this.ghostSize.w &&
			this.ghostPos.x > playerPos.x - 70
		) {
			this.image.src = "./images/ghost-right.png";
		} else if (playerPos.x < this.ghostPos.x) {
			this.ghostPos.x -= this.ghostVel.x;
			this.image.src = "./images/ghost-left.png";
		} else if (playerPos.x > this.ghostPos.x) {
			this.ghostPos.x += this.ghostVel.x;
			this.image.src = "./images/ghost-right.png";
		}
		if (playerPos.y > this.ghostPos.y) {
			this.ghostPos.y += this.ghostVel.y;
		} else if (playerPos.y < this.ghostPos.y) {
			this.ghostPos.y -= this.ghostVel.y;
		}
	}
	animateGhost(framesCounter) {
		if (framesCounter % 30 == 0) {
			this.image.frameIndex++;
		}
		if (this.image.frameIndex >= this.image.frames) {
			this.image.frameIndex = 0;
		}
	}
}
