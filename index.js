const bodyE1 = document.querySelector("body")
// to move cursor inside browser we use eventlistener
bodyE1.addEventListener("mousemove",(event) => {
    //it shows were the cursor is in numbers
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanE1=document.createElement("span");
    spanE1.style.left = xPos+"px";
    spanE1.style.top = yPos+"px";
    // to create different size
    const size = Math.random() * 100;
    spanE1.style.width= size + "px";
    spanE1.style.height= size + "px";
    bodyE1.appendChild(spanE1)
    setTimeout(() => {
        spanE1.remove();
    },3000);
})
