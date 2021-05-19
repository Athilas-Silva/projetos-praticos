window.onload = function () {
  
    var segundos = 00; 
    var decimais = 00; 
    var acresDec = document.getElementById("decimais")
    var acresSeg = document.getElementById("segundos")
    var iniciar = document.getElementById("iniciar");
    var parar = document.getElementById("parar");
    var resetar = document.getElementById("resetar");
    var Intervalo ;
  
    iniciar.onclick = function() {
       clearInterval(Intervalo);
       Intervalo = setInterval(iniContador, 10);
    }
    
    parar.onclick = function() {
        clearInterval(Intervalo);
    }
    
    resetar.onclick = function() {
        clearInterval(Intervalo);
        decimais = "00";
        segundos = "00";
        acresDec.innerHTML = decimais;
        acresSeg.innerHTML = segundos;
    }
    
    function iniContador () {
      decimais++; 
      
      if(decimais <= 9){
        acresDec.innerHTML = "0" + decimais;
      }
      
      if (decimais > 9){
        acresDec.innerHTML = decimais;
      } 
      
      if (decimais > 99) {
        console.log("segundos");
        segundos++;
        acresSeg.innerHTML = "0" + segundos;
        decimais = 0;
        acresDec.innerHTML = "0" + 0;
      }
      
      if (segundos > 9){
        acresSeg.innerHTML = segundos;
      }
    }
}