const elementButton = document.getElementById("myButton");
let ducnguyen = document.getElementById("ducnguyen");
const form = document.getElementById("fanForm");
const numberWidth = document.body.clientWidth;
console.log(numberWidth)

var countClick = 0;

ducnguyen.addEventListener("click", function() {
    
    if(countClick < 5) {
        countClick++
        let numbertop = Math.random() * 500;
        let numberleft = Math.random() * numberWidth;
        ducnguyen.style.backgroundColor = "pink";
        ducnguyen.style.top = numbertop+"px";
        ducnguyen.style.left = numberleft+"px";
    }
    else{
        form.style.display = "contents";
        form.style.position = "fixed";
        ducnguyen.style.display = "none";
        elementButton.style.display = "none";
    }
})



