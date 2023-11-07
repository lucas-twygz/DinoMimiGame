export default class Score {
  score = 0;
  HIGH_SCORE_KEY = "highScore";

  constructor(ctx, scaleRatio) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.scaleRatio = scaleRatio;
  }

  update(frameTimeDelta) {
    this.score += frameTimeDelta * 0.01;
  }

  reset() {
    this.score = 0;
  }

  setHighScore() {
    const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
    if (this.score > highScore) {
      localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score));
    }
  }

  draw() {
    const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
    const y = 20 * this.scaleRatio;
    
    const fontSize = 20 * this.scaleRatio;
    this.ctx.font = `${fontSize}px open`;
    this.ctx.fillStyle = "#A020F0";
    const scoreX = this.canvas.width - 120 * this.scaleRatio;
    const highScoreX = scoreX - 175 * this.scaleRatio;

    const scorePadded = Math.floor(this.score).toString().padStart(6, 0);
    const highScorePadded = highScore.toString().padStart(6, 0);

    this.ctx.fillText(`Atual: ${scorePadded}`, scoreX, y);
    this.ctx.fillText(`Recorde: ${highScorePadded}`, highScoreX, y);
  }
}
