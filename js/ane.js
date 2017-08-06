/**
 * Created by Administrator on 2017/8/1 0001.
 */
var aneObj=function(){
    this.rootx=[];
    this.headx=[];
    this.heady=[];
    this.angle=0;
    this.tmp=[];

}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*20;
        this.headx[i]=this.rootx[i];
        this.heady[i]=canheight-270+Math.random()*50;
        this.tmp[i]=Math.random()*50+20;
    }
}
aneObj.prototype.draw=function(){
    this.angle+=deltaTime*0.0007;
    var l=Math.sin(this.angle);
    ctx2.save();
    ctx2.globalAlpha=0.6;
    ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.strokeStyle="#3b154e";
    for(var i=0;i<this.num;i++){
        //beginPath,moveto,lineto,stroke,strolestyle,linewidth,line
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canheight);
        this.headx[i]=this.rootx[i]+l*this.tmp[i];
        ctx2.quadraticCurveTo(this.headx[i],canheight-100,this.headx[i],this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}