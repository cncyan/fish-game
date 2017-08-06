/**
 * Created by Administrator on 2017/8/1 0001.
 */
var momObj=function(){
    this.x;
    this.y;
    this.angle=0;

    this.momtailtimer=0;
    this.momtailcount=0;

    this.momeyetimer=0;
    this.momeyecount=0;
    this.momeyeinterval=1000;

    this.mombodycount=0;

}
momObj.prototype.init=function(){
    this.x=canwidth*0.5;
    this.y=canheight*0.5;
}
momObj.prototype.draw=function(){
    this.x=lerpDistance(mx,this.x,0.99);
    this.y=lerpDistance(my,this.y,0.99);

    var deltay=my-this.y;
    var deltax=mx-this.x;
    var beta=Math.atan2(deltay,deltax)+Math.PI;

    this.angle=lerpAngle(beta,this.angle,0.6);

    this.momtailtimer+=deltaTime;
    if(this.momtailtimer>50){
        this.momtailcount=(this.momtailcount+1)%8;
        this.momtailtimer%=50;
    }
    this.momeyetimer+=deltaTime;
    if(this.momeyetimer>this.momeyeinterval){
        this.momeyecount=(this.momeyecount+1)%2;
        this.momeyetimer%=this.momeyeinterval;
        if(this.momeyecount==0){
            this.momeyeinterval=Math.random()*1500+2000;
        }else{
            this.momeyeinterval=200;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var momtailcount=this.momtailcount;
    var momeyecount=this.momeyecount;
    var mombodycount=this.mombodycount;
    if(data.double==1){
        ctx1.drawImage(mombodyorg[mombodycount],-mombodyorg[mombodycount].width*0.5,-mombodyorg[mombodycount].height*0.5);
    }else{
        ctx1.drawImage(mombodyblue[mombodycount],-mombodyblue[mombodycount].width*0.5,-mombodyblue[mombodycount].height*0.5);
    }
    ctx1.drawImage(momtail[momtailcount],-momtail[momtailcount].width*0.5+30,-momtail[momtailcount].height*0.5);
    ctx1.drawImage(momeye[momeyecount],-momeye[momeyecount].width*0.5,-momeye[momeyecount].height*0.5);

    ctx1.restore();

}