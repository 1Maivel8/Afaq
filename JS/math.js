function open1() {

    page1.style.display = "none";
    page2.style.display = "block";
}
function one() {

    page2.style.display = "none";
    page3.style.display = "block";
}
function check1(x) {
    if (x == 3) {
        text1.innerHTML = "أحسنت! 👏";
        next1.style.display = "inline-block";
     } 
        else {
  text1.innerHTML = "حاول مرة أخرى 😊";

    }

}


function two() {
    page3.style.display = "none";
    page4.style.display = "block";
}


function check2(x) {
    if (x == 8) {
        text2.innerHTML = "أحسنت! 👏";
        next2.style.display = "inline-block";
    } 
    else {

        text2.innerHTML = "حاول مرة أخرى 😊";

    }

}
function three() {
    page4.style.display = "none";
    page5.style.display = "block";
}

function check3(x) {

    if (x == 4) {
        text3.innerHTML = "أحسنت! 👏";
        next3.style.display = "inline-block";

    }
     else {
        text3.innerHTML = "حاول مرة أخرى 😊";
    }

}


function home2() {

    page5.style.display = "none";
    page1.style.display = "flex";

    b1.disabled = false;
    b1.innerHTML = "ابدأ";

}


function open2() {

    page1.style.display = "none";
    page6.style.display = "block";

}


function four() {

    page6.style.display = "none";
    page7.style.display = "block";

}


function check4(x) {

    if (x == 2) {

        text4.innerHTML = "أحسنت! 👏";
        next4.style.display = "inline-block";

    } 
    else {

        text4.innerHTML = "حاول مرة أخرى 😊";

    }

}


function five() {

    page7.style.display = "none";
    page8.style.display = "block";

}


function check5(x) {

    if (x == 3) {

        text5.innerHTML = "أحسنت! 👏";
        next5.style.display = "inline-block";

    } 
    else {
        text5.innerHTML = "حاول مرة أخرى 😊";

    }

}


function six() {

    page8.style.display = "none";
    page9.style.display = "block";

}


function check6(x) {

    if (x == 4) {

        text6.innerHTML = "أحسنت! 👏";
        next6.style.display = "inline-block";

    } 
    else {

        text6.innerHTML = "حاول مرة أخرى 😊";

    }

}


function home3() {

    page9.style.display = "none";
    page1.style.display = "flex";
    b2.disabled = false;
    b2.innerHTML = "ابدأ";

}


function open3() {
    page1.style.display = "none";
    page10.style.display = "block";
}


function seven() {

    page10.style.display = "none";
    page11.style.display = "block";

}


function check7(x) {

    if (x == 1) {

        text7.innerHTML = "أحسنت! 👏";
        next7.style.display = "inline-block";

    } 
    else
         {

        text7.innerHTML = "حاول مرة أخرى 😊";

    }

}


function eight() {

    page11.style.display = "none";
    page12.style.display = "block";

}


function check8(x) {

    if (x == 2) {

        text8.innerHTML = "أحسنت! 👏";
        next8.style.display = "inline-block";

    }
     else 
        {

        text8.innerHTML = "حاول مرة أخرى 😊";

    }

}


function nine() {

    page12.style.display = "none";
    page13.style.display = "block";

}


function check9(x) {

    if (x == 3) {

        text9.innerHTML = "🎉 أحسنت! أنهيت كل المستويات!";

        localStorage.setItem("level3", "yes");

        setTimeout(function() {
            window.location.href = "heroes.html";
        }, 1500);

    } else {

        text9.innerHTML = "حاول مرة أخرى 😊";

    }

}



function back() {

    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";

    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "none";

    page10.style.display = "none";
    page11.style.display = "none";
    page12.style.display = "none";
    page13.style.display = "none";

    page1.style.display = "flex";

}