var round = 0;
var score = 0;

var choice1 = ["84", "72", "86", "76"];
var choice2 = ["1.5", "1.7", "1.6", "2.0"];
var choice3 = ["2800", "3000", "3100", "2600"];
var choice4 = ["52", "66", "71", "62"];
var choice5 = ["4.2", "3.7", "3.4", "2.9"];
var choice6 = ["3400", "4000", "3600", "4100"];
var choice7 = ["5.2", "6.9", "5.3", "6.5"];
var choice8 = ["5.4", "3.4", "5.5", "4.5"];
var choice9 = ["6400", "6700", "6200", "6600"];
var choice10 = ["26", "24", "29", "19"];

var Ans1 = ["84","1.6","2600","66","3.4","3400","6.9","3.4","6600","26"]
var Ans2 = [1,3,4,2,3,1,2,2,4,1]


var but1;
var but2;
var but3;
var but4;

var imgScala = ["img/wh1.png","img/wh2.png","img/wh3.png","img/wh4.png","img/wh5.png",
                "img/wh6.png","img/wh7.png","img/wh8.png","img/wh9.png","img/wh10.png"];

var imgOb1 = ["img/th3.png","img/th7.png","img/th6.png","img/th3.png","img/th10.png",
                "img/th6.png","img/th3.png","img/th10.png","img/th3.png","img/th7.png"];

var imgOb2 = ["img/th2.png","img/th4.png","img/th10.png","img/th7.png","img/th5.png",
                "img/th2.png","img/th1.png","img/th7.png","img/th6.png","img/th8.png"];

var imgOb3 = ["img/th1.png","img/th9.png","img/th8.png","img/th9.png","img/th8.png",
                "img/th5.png","img/th7.png","img/th8.png","img/th4.png","img/th1.png"];


function imgPro(round) {
    for (i = 0; i < imgScala.length; i++) {
        if (i == round) {
            document.getElementById("imgSacH").src = imgScala[i];
            document.getElementById("imgTh1").src = imgOb1[i];
            document.getElementById("imgTh2").src = imgOb2[i];
            document.getElementById("imgTh3").src = imgOb3[i];
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

