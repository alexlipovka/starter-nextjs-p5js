'use client';
//sketches/mysketch.ts
export const mySketch: P5jsSketch = (p5, parentRef) => {
  let parentStyle: CSSStyleDeclaration;
  let canvasHeight: number;
  let canvasWidth: number;
  let cnv: any;
  let sine: any;

  p5.setup = () => {
		parentStyle = window.getComputedStyle(parentRef);
    canvasWidth = parseInt(parentStyle.width);
    canvasHeight = parseInt(parentStyle.height);
    cnv = p5.createCanvas(canvasWidth, canvasHeight).parent(parentRef);
		p5.background(65);
  };

  p5.draw = () => {
		p5.background(65);
		p5.stroke(185);
    p5.circle(p5.mouseX, p5.mouseY, 20);
		p5.line(0, 0, p5.width, p5.height);
		p5.line(p5.width, 0, 0, p5.height);
		p5.stroke(255, 0, 0);
		p5.line(p5.mouseX, p5.mouseY, p5.width/2, p5.height/2)
  }

	p5.windowResized = () => {
		parentStyle = window.getComputedStyle(parentRef);
    canvasWidth = parseInt(parentStyle.width);
    canvasHeight = parseInt(parentStyle.height);
		p5.resizeCanvas(canvasWidth, canvasHeight);
	}

}