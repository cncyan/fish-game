/**
 * Created by Administrator on 2017/8/2 0002.
 */
function momFruitsCollsion(){
    if(!data.gameover){
        for(var i=0;i<fruit.num;i++){
            if(fruit.alive[i]){
                var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
                if(l<900){
                    fruit.dead(i);
                    data.fruitnum++;
                    mom.mombodycount++;
                    if(mom.mombodycount>7){
                        mom.mombodycount=7;
                    }
                    if(fruit.fruitType[i]=="blue"){
                        data.double=2;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }
}

function momBabyCollision(){
    if(data.fruitnum>0 && !data.gameover){
        var l=calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900){
            //baby recover
            baby.babybodycount=0;
            mom.mombodycount=0;
            data.addscore();

            halo.bron(baby.x,baby.y);

        }
    }
}