var round = 0;
var score = 0;

var choice1 = ["2.0", "2.8", "2.1", "1.9"];
var choice2 = ["1.2", "0.5", "0.9", "1.0"];
var choice3 = ["4", "3", "2", "1"];
var choice4 = ["5.1", "5.2", "5.3", "5.4"];
var choice5 = ["1.7", "1.8", "1.9", "2.0"];
var choice6 = ["11.2", "11.5", "11.4", "11.8"];
var choice7 = ["5.3", "1.3", "3.9", "2.6"];
var choice8 = ["2.6", "2.7", "2.8", "2.5"];
var choice9 = ["2.1", "2.2", "2.3", "2.4"];
var choice10 = ["3.3", "3.4", "3.5", "3.6"];

var Ans1 = ["2.0","0.9","3","5.4","1.8","11.2","3.9","2.7","2.1","3.6"]
var Ans2 = [1,3,2,4,2,1,3,2,1,4]

var but1;
var but2;
var but3;
var but4;

var imgScala = ["img/we1.png","img/we2.png","img/we3.png","img/we4.png","img/we5.png",
                "img/we6.png","img/we7.png","img/we8.png","img/we9.png","img/we10.png"];

var imgOb1 = ["img/th6.png","img/th7.png","img/th1.png","img/th2.png","img/th4.png",
                "img/th3.png","img/th8.png","img/th10.png","img/th9.png","img/th5.png"];


function imgPro(round) {
    for (i = 0; i < imgScala.length; i++) {
        if (i == round) {
            document.getElementById("imgSacH").src = imgScala[i];
            document.getElementById("imgTh1").src = imgOb1[i];
        }
       init(round + 1);
    }
}

function input(valueIn) {
    round += 1;
    imgPro(round);
    checkAns(round, valueIn);
}

                
function init(round){
    if (round == 1) {

        btn1 = document.getElementById("ch1");
        btn1.value  = choice1[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice1[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice1[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice1[3];
    }

    else if (round == 2) {
        btn1 = document.getElementById("ch1");
        btn1.value  = choice2[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice2[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice2[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice2[3];
    }

    else if (round == 3) {
        btn1 = document.getElementById("ch1");
        btn1.value  = choice3[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice3[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice3[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice3[3];
    
    }
    
    else if (round == 4) {
        btn1 = document.getElementById("ch1");
        btn1.value  = choice4[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice4[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice4[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice4[3];
    
    }

    else if (round == 5) {
        btn1 = document.getElementById("ch1");
        btn1.value  = choice5[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice5[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice5[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice5[3];
    
    }

    else if (round == 6) {
        btn1 = document.getElementById("ch1");
        btn1.value  = choice6[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice6[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice6[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice6[3];
    
    }

    else if (round == 7) {
        btn1 = document.getElementById("ch1");
        btn1.value  = choice7[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice7[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice7[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice7[3];
    
    }

    else if (round == 8) {    
        btn1 = document.getElementById("ch1");
        btn1.value  = choice8[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice8[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice8[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice8[3];
    }

    else if (round == 9) {

        btn1 = document.getElementById("ch1");
        btn1.value  = choice9[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice9[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice9[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice9[3];
    
    }

    else if (round == 10) {

        btn1 = document.getElementById("ch1");
        btn1.value  = choice10[0];
    
        btn2 = document.getElementById("ch2");
        btn2.value  = choice10[1];
    
        btn3 = document.getElementById("ch3");
        btn3.value  = choice10[2];
    
        btn4 = document.getElementById("ch4");
        btn4.value  = choice10[3];
    
    }


}


function checkAns(round, valueBtn) {
    console.log(valueBtn);
    for (i = 0; i < Ans1.length; i++) {
        if (i+1 == round) {
            if (valueBtn === Ans1[i]) {
                score += 1;
                document.getElementById("scoreBoard").innerHTML = "Score: " + score + "/10";
            }
            document.getElementById("roundBoard").innerHTML = "EasyRound : " + round + "/10";
        }
    }

    if (round == 10) {
        var scoreToShow = "?" + score;
        window.location.href = "scoreTotal.html" + scoreToShow;
        //document.getElementById("bodyLoad").innerHTML = "SCORE: " + score + "/10";
    }
}
