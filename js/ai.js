var c = 0;

function tick(){
    c++;
    document.getElementById('PassosFeitos').value = c;
    // Movo o WALL para a esquerda
    moveWall(); 
}

var tickInterval;

function runSim(state){
    if(state == 1){
        // Inicio o simulador
        if(c > 100){
            runSim('0'); // Parar
        }else{
            tickInterval = setInterval("tick();", 100);
        }
    }else{
        // Paro a simulação
        clearInterval(tickInterval);
        c = 0;
        document.getElementById('PassosFeitos').value = c;
        document.getElementById('wall').style.left = null;
        document.getElementById('wall').style.right = '0px';
        
    }
}

function moveWall(){
    var getWallX = document.getElementById('wall').offsetLeft;
    
    document.getElementById('debugTextarea').innerHTML += "["+c+"] Posição do WALL: "+getWallX+"\n";
    document.getElementById('debugTextarea').scrollTop = document.getElementById('debugTextarea').scrollHeight;
    
    if(getWallX <= 0){
        document.getElementById('wall').style.left = null;
        document.getElementById('wall').style.right = '0px';
    }else{
        getWallX = getWallX-40;
        document.getElementById('wall').style.left = getWallX+'px';
    }
    
}



