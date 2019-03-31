var round = 0;
var score = 0;

var choice1 = ["4.6", "5.2", "4.3", "5.1"];
var choice2 = ["7.1", "6.2", "5.3", "4.4"];
var choice3 = ["45", "47", "38", "44"];
var choice4 = ["15", "21", "19", "25"];
var choice5 = ["1.5", "1.7", "2.1", "1.8"];
var choice6 = ["6.3", "9.2", "4.5", "10.1"];
var choice7 = ["74", "85", "92", "68"];
var choice8 = ["55", "67", "42", "48"];
var choice9 = ["2.1", "3.5", "3.3", "2.8"];
var choice10 = ["48", "52", "36", "42"];

var Ans1 = ["4.6","6.2","44","19","1.8","9.2","74","48","3.3","48"]
var Ans2 = [1,2,4,3,4,2,1,4,3,1]

var imgScala = ["img/wm1.png","img/wm2.png","img/wm3.png","img/wm4.png","img/wm5.png",
                "img/wm6.png","img/wm7.png","img/wm8.png","img/wm9.png","img/wm10.png"];

var imgOb1 = ["img/th2.png","img/th3.png","img/th5.png","img/th4.png","img/th7.png",
                "img/th2.png","img/th10.png","img/th5.png","img/th9.png","img/th2.png"];

var imgOb2 = ["img/th1.png","img/th7.png","img/th1.png","img/th9.png","img/th6.png",
                "img/th3.png","img/th3.png","img/th6.png","img/th8.png","img/th4.png"];


var but1;
var but2;
var but3;
var but4;


function imgPro(round) {
    for (i = 0; i < imgScala.length; i++) {
        if (i == round) {
            document.getElementById("imgSacH").src = imgScala[i];
            document.getElementById("imgTh1").src = imgOb1[i];
            document.getElementById("imgTh2").src = imgOb2[i];
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
            if (valueBtn == Ans1[i]) {
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

