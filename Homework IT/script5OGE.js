const active = document.querySelector(".active__class");//1
const unactive1 = document.querySelector(".unactive__class-1");//2
const unactive2 = document.querySelector(".unactive__class-2");//3
const unactive3 = document.querySelector(".unactive__class-3");//4
const unactive4 = document.querySelector(".unactive__class-4");//5
const unactive5 = document.querySelector(".unactive__class-5");//6
const unactive6 = document.querySelector(".unactive__class-6");//7

const responsive1 = document.querySelector(".main__responsive-1");//1
const responsive2 = document.querySelector(".main__responsive-2");//2
const responsive3 = document.querySelector(".main__responsive-3");//3
const responsive4 = document.querySelector(".main__responsive-4");//4
const responsive5 = document.querySelector(".main__responsive-5");//5
const responsive6 = document.querySelector(".main__responsive-6");//6
const responsive7 = document.querySelector(".main__responsive-7");//7

//1
function switchMain() {
    responsive2.style.display = "none";
    responsive3.style.display = "none";
    responsive4.style.display = "none";
    responsive5.style.display = "none";
    responsive6.style.display = "none";
    responsive7.style.display = "none";
    responsive1.style.display = "grid";

    active.className = "active__class";
    unactive1.className = "unactive__class-1";
    unactive2.className = "unactive__class-1";
    unactive3.className = "unactive__class-1";
    unactive4.className = "unactive__class-1";
    unactive5.className = "unactive__class-1";
    unactive6.className = "unactive__class-1";

}

active.addEventListener("click", switchMain);
//1

//2
function switchMain1() {
    responsive1.style.display = "none";
    responsive3.style.display = "none";
    responsive4.style.display = "none";
    responsive5.style.display = "none";
    responsive6.style.display = "none";
    responsive7.style.display = "none";
    responsive2.style.display = "grid";

    unactive1.className = "active__class";
    active.className = "unactive__class-1";
    unactive2.className = "unactive__class-1";
    unactive3.className = "unactive__class-1";
    unactive4.className = "unactive__class-1";
    unactive5.className = "unactive__class-1";
    unactive6.className = "unactive__class-1";
}

unactive1.addEventListener("click", switchMain1);
//2

//3
function switchMain2() {
    responsive1.style.display = "none";
    responsive2.style.display = "none";
    responsive4.style.display = "none";
    responsive5.style.display = "none";
    responsive6.style.display = "none";
    responsive7.style.display = "none";
    responsive3.style.display = "grid";

    unactive2.className = "active__class";
    active.className = "unactive__class-1";
    unactive1.className = "unactive__class-1";
    unactive3.className = "unactive__class-1";
    unactive4.className = "unactive__class-1";
    unactive5.className = "unactive__class-1";
    unactive6.className = "unactive__class-1";

}

unactive2.addEventListener("click", switchMain2);
//3

//4
function switchMain3() {
    responsive1.style.display = "none";
    responsive2.style.display = "none";
    responsive4.style.display = "none";
    responsive5.style.display = "none";
    responsive6.style.display = "none";
    responsive7.style.display = "none";
    responsive3.style.display = "grid";

    unactive2.className = "active__class";
    active.className = "unactive__class-1";
    unactive1.className = "unactive__class-1";
    unactive3.className = "unactive__class-1";
    unactive4.className = "unactive__class-1";
    unactive5.className = "unactive__class-1";
    unactive6.className = "unactive__class-1";

}

unactive3.addEventListener("click", switchMain3);
//4

//5
function switchMain4() {
    responsive1.style.display = "none";
    responsive2.style.display = "none";
    responsive3.style.display = "none";
    responsive5.style.display = "none";
    responsive6.style.display = "none";
    responsive7.style.display = "none";
    responsive4.style.display = "grid";

    unactive3.className = "active__class";
    active.className = "unactive__class-1";
    unactive1.className = "unactive__class-1";
    unactive2.className = "unactive__class-1";
    unactive4.className = "unactive__class-1";
    unactive5.className = "unactive__class-1";
    unactive6.className = "unactive__class-1";

}

unactive3.addEventListener("click", switchMain4);
//5

// //6
// function switchMain5() {
//     responsive1.style.display = "none";
//     responsive2.style.display = "none";
//     responsive3.style.display = "none";
//     responsive4.style.display = "none";
//     responsive6.style.display = "none";
//     responsive7.style.display = "none";
//     responsive5.style.display = "grid";

//     unactive4.className = "active__class";
//     active.className = "unactive__class-1";
//     unactive1.className = "unactive__class-1";
//     unactive2.className = "unactive__class-1";
//     unactive3.className = "unactive__class-1";
//     // unactive5.className = "unactive__class-1";
//     // unactive6.className = "unactive__class-1";

// }

// unactive4.addEventListener("click", switchMain5);
// //6

// //7
// function switchMain6() {
//     responsive1.style.display = "none";
//     responsive2.style.display = "none";
//     responsive3.style.display = "none";
//     responsive4.style.display = "none";
//     responsive5.style.display = "none";
//     responsive7.style.display = "none";
//     responsive6.style.display = "grid";

//     unactive5.className = "active__class";
//     active.className = "unactive__class-1";
//     unactive1.className = "unactive__class-1";
//     unactive2.className = "unactive__class-1";
//     unactive3.className = "unactive__class-1";
//     unactive4.className = "unactive__class-1";
//     unactive6.className = "unactive__class-1";

// }

// // unactive5.addEventListener("click", switchMain6);
// //7

// //8
// function switchMain7() {
//     responsive1.style.display = "none";
//     responsive2.style.display = "none";
//     responsive3.style.display = "none";
//     responsive4.style.display = "none";
//     responsive5.style.display = "none";
//     responsive6.style.display = "none";
//     responsive7.style.display = "grid";

//     unactive6.className = "active__class";
//     active.className = "unactive__class-1";
//     unactive1.className = "unactive__class-1";
//     unactive2.className = "unactive__class-1";
//     unactive3.className = "unactive__class-1";
//     unactive4.className = "unactive__class-1";
//     unactive5.className = "unactive__class-1";

// }

// unactive6.addEventListener("click", switchMain7);
//8

let responseOpenButtons = document.querySelectorAll(".open__responses");

responseOpenButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let parent = this.parentNode;
    let responseClick = parent.querySelector('.click__responses');

    if (responseClick.style.opacity === "1") {
      responseClick.style.opacity = "0";
    } else {
      responseClick.style.opacity = "1";
    }
  });
});