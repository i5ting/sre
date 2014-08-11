Pixi 
=====================


## Sprite


### 背景透明

		var stage = new PIXI.Stage(0xFFFFFF, true);
		
### 有交互

		stage.setInteractive(true);


### tap

		// create a new Sprite using the texture
		var bunny = new PIXI.Sprite(texture);
		// enable the bunny to be interactive.. this will allow it to respond to mouse and touch events
		bunny.interactive = true;
		
		bunny.click = bunny.tap = function(interactionData)
		{
			alert(1);
			window.open("https://github.com/GoodBoyDigital/pixi.js", "_blank")
		}
		
重点在于`bunny.interactive = true;`

### 

## Graphics

### 自定义形状


		var graphics = new PIXI.Graphics();
	
		// set a fill and line style
		graphics.beginFill(0xB5AA75);
		graphics.lineStyle(5, 0x8BB575, 1);
	
		// // draw a shape
		graphics.moveTo(50,50);
		graphics.lineTo(250, 50);
		graphics.lineTo(100, 100);
		graphics.lineTo(250, 220);
		graphics.lineTo(50, 220);
		graphics.lineTo(50, 50);
		graphics.endFill();	

		stage.addChild(graphics);
		
		
### 画矩形

	drawRect ( x  y  width  height )

代码



## 性能优化

stats.js
JavaScript Performance Monitor

This class provides a simple info box that will help you monitor your code performance.

https://github.com/mrdoob/stats.js


## URL

[tween JavaScript tweening engine for easy animations](https://github.com/sole/tween.js/)
[JavaScript Tween算法及缓动效果](http://www.cnblogs.com/cloudgamer/archive/2009/01/06/Tween.html)



## history

- v0.0.2
	- 增加用户角色信息
- v0.0.1
	- 增加pixi游戏引擎和TWEEN库
