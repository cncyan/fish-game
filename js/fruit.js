/**
 * Created by Administrator on 2017/8/1 0001.
 */
var fruitObj=function(){
    this.alive=[];
    this.x=[];
    this.y=[];
    this.l=[];
    this.spd=[];
    this.fruitType=[];
    this.orange=new Image();
    this.blue=new Image();
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.l[i]=0;
        this.aneid=[];
        this.spd[i]=Math.random()*0.015+0.003;
        this.fruitType[i]='';
       // this.born(i);
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
}
fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        var pic;
        if(this.fruitType[i]=="blue"){
            pic=this.blue;
        }else{
            pic=this.orange;
        }
        if(this.alive[i]){
            if(this.l[i]<=14){
                this.x[i]=ane.headx[this.aneid[i]];
                this.y[i]=ane.heady[this.aneid[i]];
                this.l[i]+=this.spd[i]*deltaTime;
            }else{
                this.y[i]-=this.spd[i]*7*deltaTime;
            }
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            if(this.y[i]<10){
                this.alive[i]=false;
            }
        }
    }
}
fruitObj.prototype.born=function(i){
    this.aneid[i]=Math.floor(Math.random()*ane.num);
    this.l[i]=0;
    this.alive[i]=true;
    var ran =Math.random();
    if(ran<0.2){
        this.fruitType[i]="blue";
    }else{
        this.fruitType[i]="orange";
    }
}
fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
}
function fruitmoniter(){
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]) num++;
    }
    if(num<15){
        sendfruit();
        return;
    }
}
function sendfruit(){
    for(var i=0;i<fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}