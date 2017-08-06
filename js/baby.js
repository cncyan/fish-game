var babyObj=function(){
    this.x;
    this.y;
    this.angle;

    this.babytailtimer=0;
    this.babytailcount=0;

    this.babyeyetimer=0;
    this.babyeyecount=0;
    this.babyeyeinterval=1000;

    this.babybodytimer=0;
    this.babybodycount=0;
}
babyObj.prototype.init=function(){
    this.x=canwidth*0.5-50;
    this.y=canheight*0.5+50;
    this.angle=0;
}
babyObj.prototype.draw=function(){
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);

    var deltay=mom.y-this.y;
    var deltax=mom.x-this.x;
    var beta=Math.atan2(deltay,deltax)+Math.PI;

    this.angle=lerpAngle(beta,this.angle,0.6);

    this.babytailtimer+=deltaTime;
    if(this.babytailtimer>50){
        this.babytailcount=(this.babytailtimer+1)%8;
        this.babytailtimer%=50;
    }
    this.babyeyetimer+=deltaTime;
    if(this.babyeyetimer>this.babyeyeinterval){
        this.babyeyecount=(this.babyeyecount+1)%2;
        this.babyeyetimer%=this.babyeyeinterval;
        if(this.babyeyecount==0){
            this.babyeyeinterval=Math.random()*1500+2000;
        }else{
            this.babyeyeinterval=200;
        }
    }
    this.babybodytimer+=deltaTime;
    if(this.babybodytimer>300){
        this.babybodycount=this.babybodycount+1;
        this.babybodytimer%=300;
        if(this.babybodycount>19){
            this.babybodycount=19;
            //game over
            data.gameover=true;
        }
    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var babytailcount=this.babytailcount;
    var babyeyecount=this.babyeyecount;
    var babybodycount=this.babybodycount;
    ctx1.drawImage(babytail[babytailcount],-babytail[babytailcount].width*0.5+23,-babytail[babytailcount].height*0.5);
    ctx1.drawImage(babybody[babybodycount],-babybody[babybodycount].width*0.5,-babybody[babybodycount].height*0.5);
    ctx1.drawImage(babyeye[babyeyecount],-babyeye[babyeyecount].width*0.5,-babyeye[babyeyecount].height*0.5);
    ctx1.restore();
}