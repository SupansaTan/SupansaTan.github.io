function click_img() {
    alert("You clicked the bongocat!");
}

function addWord() {
    document.getElementById("demo").innerHTML = "&emsp;Paragraph changed.";
}

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