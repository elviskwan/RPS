var myScore = 0;
var opScore = 0;
var counter = 0;

function rockpaperscissors(rps) {

    var opWpn;
    var weapons = ["rock", "paper", "scissors"];
    opWpn = weapons[Math.floor(Math.random() * weapons.length)];

    const myWpn = rps;
    const result = document.querySelector('#result');
    const human_res = document.querySelector('#human');
    const comp_res = document.querySelector('#computer');
    var p = document.createElement("p");

    if(myWpn == opWpn) {
        counter++;
        p.innerHTML = "Round " + counter + " - " + "Draw - You choose " + myWpn + " and Computers choose " + opWpn;
        result.appendChild(p);
        human_res.innerHTML = myScore;
        comp_res.innerHTML = opScore;
    } else if (myWpn == "rock" && opWpn == "scissors") {
        counter++;
        myScore++;
        p.innerHTML = "Round " + counter + " - " + "Win - You choose " + myWpn + " and Computers choose " + opWpn;
        p.setAttribute("id", "win");
        result.appendChild(p);
        human_res.innerHTML = myScore;
        comp_res.innerHTML = opScore;
    } else if (myWpn == "paper" && opWpn == "rock") {
        counter++;
        myScore++;
        p.innerHTML = "Round " + counter + " - " + "Win - You choose " + myWpn + " and Computers choose " + opWpn;
        result.appendChild(p);
        p.setAttribute("id", "win");
        human_res.innerHTML = myScore;
        comp_res.innerHTML = opScore;
    } else if (myWpn == "scissors" && opWpn == "paper") { 
        counter++;
        myScore++;
        p.innerHTML = "Round " + counter + " - " + "Win - You choose " + myWpn + " and Computers choose " + opWpn;
        result.appendChild(p);
        p.setAttribute("id", "win");
        human_res.innerHTML = myScore;
        comp_res.innerHTML = opScore;
    } else {
        counter++;
        opScore++;
        p.innerHTML = "Round " + counter + " - " + "Lose - you choose " + myWpn + " and Computers choose " + opWpn;
        result.appendChild(p);
        p.setAttribute("id", "lose");
        human_res.innerHTML = myScore;
        comp_res.innerHTML = opScore;
    }
}
