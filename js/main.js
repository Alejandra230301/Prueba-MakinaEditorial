
    let nube3 = document.getElementById("nube3");
    let nube2 = document.getElementById("nube2");
    let nube1 = document.getElementById("nube1");

    var posNube = 1080;
    var rotNube = 0;
    var rNube = 0.01;
    var tiempoNube = setInterval(moveN, 4);


    function moveN(){
        if(posNube <= -2000) {
            posNube = 1080;
        }
        else {
            posNube -= 1;
            rotNube -= rNube;
            if(rotNube <= -5){
                rNube = -0.01;
            }
            if(rotNube >= 0){
                rNube = 0.01;
            }
            nube3.style.transform= "translate3d(" + posNube +"px, 0px, 0px) rotate(" + rotNube +"deg)"
            nube2.style.transform= "translate3d(" + posNube +"px, 0px, 0px) rotate(" + rotNube +"deg)"
            nube1.style.transform= "translate3d(" + posNube +"px, 0px, 0px) rotate(" + rotNube +"deg)"
        }
    }

