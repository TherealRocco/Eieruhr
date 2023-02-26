let alarm = new Audio("alarm.mp3");
let intervalId;
let count = 0; //der counter steht auf 0
let counter = 0; //wieviele Eier wurden gegessen
function startOrResetTimer() {
  if (count == 0) {
    // starten wenn counter auf 0
    counter++;
    let startTime = new Date().getTime(); //wann wurde der startbutton gedrückt
    let fiveMinutes = 1000 * 60 * 5; // millisekunden in 5 minuten umrechnen 300000
    let endTime = startTime + fiveMinutes; //5 minuten (300000Mmil) werden auf die startzeit addiert und erhalten, wann der Timer Stoppen soll
    intervalId = setInterval(function () {
      //intervall starten
      let timeLeft = endTime - new Date().getTime(); //wir brauchen die Restzeit also unsere 5 min
      if (timeLeft > 0) {
        //das alles soll passieren, nur so lange restzeit größer wie null ist
        let minutes = timeLeft / (1000 * 60); //wir bekommen Minuten
        minutes = Math.floor(minutes); //Minuten werden auf eine ganze Zahl gerundet
        let seconds = (timeLeft / 1000) % 60; //wir bekommen Sekunden, Der Modulo-Operator % gibt den Rest einer Division zurück. In diesem Fall wird (timeLeft / 1000) % 60 verwendet, um den Rest der Division von timeLeft durch 60 zu berechnen.
        seconds = Math.round(seconds); //die Sekunden werden gerundet ohne komma
        seconds = ("0" + seconds).slice(-2); //kommen wir unter 10 sekunden, wollen wir eine 0 vorsetzen, das wir 04 z.B. erhalten
        let text = "0" + minutes + " : " + seconds; //was angezeigt wird in der HTML
        timer.innerHTML = text; //verbindung zur HTML
      } else {
        //endet der Timer dann mache was
        alarm.play();
        timer.innerHTML = "00 : 00";
      }
    }, 1000);
    count = 1; //setze counter auf 1, drückt man nochmal rauf, springt counter wieder auf 0 und resetet. somit kann man während des counters auch stoppen und zurücksetzen
  } else if (count == 1) {
    // stoppen und reseten
    clearInterval(intervalId);
    timer.innerHTML = "05 : 00";
    count = 0;
  }
  document.getElementById("counter").innerHTML = counter;
}
