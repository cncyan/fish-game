/**
 * Created by Administrator on 2017-08-06.
 */
var dustObj=function(){
    this.x=[];
    this.y=[];
    this.tmp=[];
    this.angle;
    this.dustno=[];
}
dustObj.prototype.num=30;
dustObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.dustno[i]=Math.floor(Math.random()*7);
        this.x[i]=canwidth*Math.random();
        this.y[i]=canheight*Math.random();
        this.tmp[i]=Math.random()*15+25;
    }
    this.angle=0;
}
dustObj.prototype.draw=function(){
    this.angle+=deltaTime*0.0007;
    var l=Math.sin(this.angle);
    for(var i=0;i<this.num;i++){
        ctx1.drawImage(dustpig[this.dustno[i]],this.x[i]+l*this.tmp[i],this.y[i]);
    }
}
