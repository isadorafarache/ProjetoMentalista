 //Depois que vencer ou perder o jogo, você terá que atualizar a página para jogar novamente.->
        
 var numeroSecreto = parseInt(Math.random() * 11);
 var tentativas = 3;

 function Chutar() {
     var chute = parseInt(document.getElementById("valor").value);
     var resultado = document.getElementById("resultado");
     var quantidadeTentativas = document.getElementById("tentativas");

     while (tentativas > 0) {
         if (chute == numeroSecreto) {
             resultado.innerHTML = "Você conseguiu UHULLL aeeeeee";
             quantidadeTentativas.innerHTML = "";
             document.getElementById("corpo").style.backgroundImage =
                 "url('https://cdn.pixabay.com/photo/2019/08/22/19/03/stars-4424167_960_720.jpg')";
             tentativas = 0;
             break;
         } else if (chute > 10 || chute < 0) {
             resultado.innerHTML = "Você deve digitar um número de 0 a 10";
         } else if (chute < numeroSecreto) {
             resultado.innerHTML = "Opsss, o número secreto é maior que seu chute!";
             tentativas--;
         } else if (chute > numeroSecreto) {
             resultado.innerHTML = "Opsss, o número secreto é menor que seu chute!";
             tentativas--;
         }

         if (tentativas > 0) {
             quantidadeTentativas.innerHTML = "TENTATIVAS RESTANTES:" + tentativas;
         } else if (tentativas == 0 && chute != numeroSecreto) {
             quantidadeTentativas.innerHTML = "";
             resultado.innerHTML = "GAME OVER!";
             document.getElementById("corpo").style.backgroundImage =
                 "url('https://cdn.pixabay.com/photo/2018/12/18/22/30/background-3883188_1280.jpg')";
         }
         break;
     }
 }