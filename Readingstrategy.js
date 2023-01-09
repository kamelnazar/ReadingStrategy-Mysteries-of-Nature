(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Readingstrategy_atlas_1", frames: [[0,0,1666,474],[0,476,1126,675],[0,1153,1024,691],[1026,1153,600,626]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Readingstrategy_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["Readingstrategy_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.VisualizeSlide2 = function() {
	this.initialize(ss["Readingstrategy_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.visualizingslide3 = function() {
	this.initialize(ss["Readingstrategy_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Squareindicator = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {notselected:0,selected:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// caseselection_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADajtIAAHbImzAAIAAnbg");
	this.shape.setTransform(1.175,-0.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2E2D").s().p("AjZDuIAAnbIGzAAIAAHbg");
	this.shape_1.setTransform(1.175,-0.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("ADcjbIAAG3Im3AAIAAm3g");
	this.shape_2.setTransform(1.05,-1.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E68D00").s().p("AjlDmIAAnLIAVAAIAAG3IG2AAIAAAUgADmDSgAjQDSIAAm3IG2AAIAAG3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// caseselection
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,102,0,0.498)").s().p("AjlDmIAAnLIHLAAIAAHLg");
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-27.1,48.9,52.6);


(lib.page3s = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.visualizingslide3();
	this.instance.setTransform(0,0,2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1500,1565);


(lib.page2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.VisualizeSlide2();
	this.instance.setTransform(0,0,0.36,0.36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,368.6,248.8);


(lib.Page1s = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1126,675);


(lib.WriteText1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Text1player:0,Text2player:65,Text3player:132};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}
	this.frame_131 = function() {
		this.stop();
	}
	this.frame_203 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(67).call(this.frame_131).wait(72).call(this.frame_203).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-35.45,43.35,0.5,0.5);

	this.text = new cjs.Text("Imagination\n\nWhen we visualize, we are using our imagination to fill in the missing information or pictures.", "italic 38px 'Calibri Light'", "#0066FF");
	this.text.lineHeight = 48;
	this.text.lineWidth = 834;
	this.text.parent = this;
	this.text.setTransform(-23.2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.text,p:{text:"Imagination\n\nWhen we visualize, we are using our imagination to fill in the missing information or pictures."}}]},65).to({state:[{t:this.text,p:{text:"The details in the text help you visualize what could be happening.\nUse your senses to form a picture in your mind of what something might look like, sound like, or feel like."}}]},67).wait(72));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhB8AUpIAAx4IAGAAIAApRMCDVAAAIAAJRIAeAAIAAR4gEhB2gN5IAAmvIZjAAIAAGvg");
	this.shape.setTransform(381.425,170.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhBXAPzIAAwyMCDNAAAIAAQygEhB1gGtIAApFIf2AAIAAJFg");
	this.shape_1.setTransform(391.525,102.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EhBfAWoIAA09MCDjAAAIAAU9gEhCDgB2IAA0xMCD3AAAIAAUxg");
	this.shape_2.setTransform(385.525,135.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},65).to({state:[{t:this.shape_2}]},67).wait(72));

	// Background
	this.instance_1 = new lib.Page1s("synched",0);
	this.instance_1.setTransform(397,147.5,1,1,0,0,0,563,337.5);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.page2("synched",0);
	this.instance_2.setTransform(395.15,227.4,3,3,0,0,0,184.3,124.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.page3s("synched",0);
	this.instance_3.setTransform(387,223.5,1,1,0,0,0,750,782.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},64).wait(1).to({startPosition:0},0).to({alpha:0},13).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({scaleX:2.7,scaleY:2.7,x:388.5,y:176.85,alpha:1},24).to({_off:true},29).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(132).to({_off:false},0).to({regY:782.8,scaleX:0.125,scaleY:0.125,x:56.5,y:367.65},19).wait(53));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-363,-559,1500,1565);


// stage content:
(lib.Readingstrategy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var x=1;
		var root=this;
		root.stop();
		root.textwriter.gotoAndPlay("Text1player");
		
		function setcurentframe(name){
		const last = name.charAt(name.length - 1);
		
			for (i=0; i<=2;i++){
					var str='navigation_btn'+i;
				if (name!=str){
					root.getChildByName(str).gotoAndStop("notselected"); }
				else{root.getChildByName(str).gotoAndStop("selected");}
				}
		if  (last==0)	{
			createjs.Sound.stop();
				createjs.Sound.play('readingpart1s');
				root.textwriter.gotoAndPlay("Text1player");
			}
		else if (last==1){
			createjs.Sound.stop();
			createjs.Sound.play('readingpart2s');
			root.textwriter.gotoAndPlay("Text2player");
			}
		else{
			createjs.Sound.stop();
			createjs.Sound.play('readingpart3s');
			root.textwriter.gotoAndPlay("Text3player");
			}
			}
		
		
		root.navigation_btn0.addEventListener("click",e=>{if (e.target.parent.name != null) {
		    setcurentframe(e.target.parent.name);
		}})
		root.navigation_btn1.addEventListener("click",e=>{if (e.target.parent.name != null) {
		    setcurentframe(e.target.parent.name);
		}})
		root.navigation_btn2.addEventListener("click",e=>{if (e.target.parent.name != null) {
		    setcurentframe(e.target.parent.name);
		}})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Object
	this.navigation_btn2 = new lib.Squareindicator();
	this.navigation_btn2.name = "navigation_btn2";
	this.navigation_btn2.setTransform(570,584.6,1.045,1.045,0,0,0,0.1,0.1);

	this.navigation_btn1 = new lib.Squareindicator();
	this.navigation_btn1.name = "navigation_btn1";
	this.navigation_btn1.setTransform(475.9,584.6,1.045,1.045,0,0,0,0.1,0.1);

	this.navigation_btn0 = new lib.Squareindicator();
	this.navigation_btn0.name = "navigation_btn0";
	this.navigation_btn0.setTransform(381.8,584.6,1.045,1.045,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.navigation_btn0},{t:this.navigation_btn1},{t:this.navigation_btn2}]}).wait(1));

	// handwriting
	this.textwriter = new lib.WriteText1();
	this.textwriter.name = "textwriter";
	this.textwriter.setTransform(276.6,407.15,1,1,0,0,0,178.8,253.7);

	this.timeline.addTween(cjs.Tween.get(this.textwriter).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(411.8,283.5,646,355);
// library properties:
lib.properties = {
	id: '5F10833E54A89A4BA9F768A022ED406D',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Readingstrategy_atlas_1.png?1673265695747", id:"Readingstrategy_atlas_1"},
		{src:"sounds/readingpart1s.mp3?1673265695778", id:"readingpart1s"},
		{src:"sounds/readingpart2s.mp3?1673265695778", id:"readingpart2s"},
		{src:"sounds/readingpart3s.mp3?1673265695778", id:"readingpart3s"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5F10833E54A89A4BA9F768A022ED406D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;