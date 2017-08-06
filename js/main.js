/**
 * Created by Administrator on 2017/8/1 0001.
 */
var can1;
var can2;

var canwidth;
var canheight;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgpic=new Image();
var ane;
var fruit;
var mom;
var baby;

var mx;
var my;

var babytail=[];
var babyeye=[];
var babybody=[];

var momtail=[];
var momeye=[];

var mombodyorg=[];
var mombodyblue=[];

var data;

var wave;

var halo;

var dust;
var dustpig=[];

document.body.onload=game;
function game(){
    init();
    lastTime=Date.now();
    deltaTime=0;
    gameloop();
}
function init(){
    //get canvas context
    can1=document.getElementById("canvas1");
    ctx1=can1.getContext("2d");
    can2=document.getElementById("canvas2");
    ctx2=can2.getContext("2d");

    can1.addEventListener('mousemove',onMouseMove,false);
    bgpic.src="./src/background.jpg";

    canwidth=can1.width;
    canheight=can1.height;

    ane=new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();

    mom=new momObj();
    mom.init();

    baby=new babyObj();
    baby.init();

    mx=canwidth*0.5;
    my=canheight*0.5;

    for(var i=0;i< 8 ;i++){
        babytail[i]=new Image();
        babytail[i].src="./src/babyTail"+i+".png";
    }
    for(var i=0;i<2;i++){
        babyeye[i]=new Image();
        babyeye[i].src="./src/babyEye"+i+".png";
    }
    for(var i=0;i<20;i++){
        babybody[i]=new Image();
        babybody[i].src="./src/babyFade"+i+".png";
    }
    for(var i=0;i< 8 ;i++){
        momtail[i]=new Image();
        momtail[i].src="./src/bigTail"+i+".png";
    }
    for(var i=0;i<2;i++){
        momeye[i]=new Image();
        momeye[i].src="./src/bigEye"+i+".png";
    }

    data=new dataObj();

    for(var i=0;i<8;i++){
        mombodyorg[i]=new Image();
        mombodyblue[i]=new Image();
        mombodyorg[i].src="./src/bigSwim"+i+".png";
        mombodyblue[i].src="./src/bigSwimBlue"+i+".png";
    }

    ctx1.font="30px Verdana";
    ctx1.textAlign="center";

    wave=new waveObj();
    wave.init();

    halo=new haloObj();
    halo.init();

    for(var i=0;i<7;i++){
        dustpig[i]=new Image();
        dustpig[i].src="./src/dust"+i+".png";
    }
    dust=new dustObj();
    dust.init();


}
function gameloop(){
   window.requestAnimationFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
	if(deltaTime>40) deltaTime=40;
    drawbackground();
    ane.draw();
    fruitmoniter();
    fruit.draw();
    ctx1.clearRect(0,0,canwidth,canheight);
    mom.draw();
    baby.draw();
    momFruitsCollsion();
    momBabyCollision();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}
function onMouseMove(e){
    if(!data.gameover){
        if(e.offsetX|| e.layerX){
            mx= e.offsetX==undefined? e.layerX: e.offsetX;
            my= e.offsetY==undefined? e.layerY: e.offsetY;
        }
    }

}