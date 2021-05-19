let fontArr = ["italic", "normal", "oblique"];
let ele = document.querySelector("#demo");

function fontChange() {   
for (let i = 0; i < fontArr.length; i++) {
    ele.style.fontStyle = fontArr[i];
    console.log(fontArr[i])
}

    
}
fontChange();