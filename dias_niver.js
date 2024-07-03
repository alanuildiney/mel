// Definindo a data para contagem
let countDownDate = new Date("July 12, 2024 00:00:00").getTime();

// Atualiza a contagem a cada 1 segundo
let x = setInterval(function() {

  // Pega a data de hoje
  let now = new Date().getTime();

  // Calcula a distância entre hoje e a data especificada
  let distance = countDownDate - now;

  // Calculos para dias, horas, minutos e segundos
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostra na página os valores
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Mostra a seguinte mensagem quando o cronometro acabar
  if (distance <= 0) {
    clearInterval(x)
    document.getElementById("texto_1").innerHTML = '<p><span>Parabéns, Mel</span></p>';
    document.getElementById("countdown").innerHTML = '<h1>Feliz aniversário, Mel! Que seu dia seja repleto de muita dança, momentos incríveis na academia, deliciosos pratos de sushi e flores maravilhosas para alegrar ainda mais o seu dia. Que você continue espalhando essa energia contagiante por onde passa! 🎉🌸💃🍣💪</h1>';
    document.getElementById("texto_2").innerHTML = ' ';
  }
}, 1000);
