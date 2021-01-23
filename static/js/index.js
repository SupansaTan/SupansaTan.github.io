function click_img() {
    alert("You clicked the bongocat!");
}

function addWord() {
    document.getElementById("demo").innerHTML = "&emsp;Paragraph changed.";
}

/* Scroll to top */
$(document).ready(function(){
    // animate arrow
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollTop').fadeIn();
        } 
        else {
            $('.scrollTop').fadeOut();
        }
    });

    // click --> scroll to top
    $('.scrollTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

/* JS Syntax*/
// number
document.getElementById("demo_num1").innerHTML = 10.50;
document.getElementById("demo_num2").innerHTML = 1001;

// string
document.getElementById("demo_str1").innerHTML = "John";
document.getElementById("demo_str2").innerHTML = 'John';

// operator
document.getElementById("js_compute").innerHTML = (7 + 6) * 4; 

// expression 
document.getElementById("js_expression").innerHTML = "John" + " " + "Doe";

/* JS Arithmetic */
var x = 5, y = 2, char, var_values = "";
var a = x + y; 
var b = x - y;
var c = x * y; 
var d = x / y; 
var e = x % y; 
x++ 
var f = x; 
x-- 
var g = x; 
h = x **2; 
i = Math.pow(x,2);
total = [a,b,c,d,e,f,g,h,i]

// gather the values of each variable 
for (char=65, i=0; char<=73, i<9; char++ ,i++) {
    var_values += String.fromCharCode(char).toLowerCase() + " = " + total[i] + "<br>";
}

// show value of all variables
document.getElementById("js_arithmetic_exp").innerHTML = var_values;