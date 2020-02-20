const btnGreen = document.querySelector('.btn-green')
const product = document.querySelector('.product')

btnGreen.addEventListener("click", () => {
    const hue = 90;
    product.style.setProperty("--hue", `${hue}deg`)
})

const btnBlue = document.querySelector('.btn-blue')

btnBlue.addEventListener("click", () => {
    const hue = 260;
    product.style.setProperty("--hue", `${hue}deg`)
})

const btnRed = document.querySelector('.btn-red')

btnRed.addEventListener("click", () => {
    const hue = 360;
    product.style.setProperty("--hue", `${hue}deg`)
})

const btnBlack = document.querySelector('.btn-black')

btnBlack.addEventListener("click", () => {
    const hue = 200;
    product.style.setProperty("--hue", `${hue}deg`)
})

const btnYellow = document.querySelector('.btn-yellow')

btnYellow.addEventListener("click", () => {
    const hue = 46;
    product.style.setProperty("--hue", `${hue}deg`)
})



/* 
btn-green"
btn-red" a
btn-black"
btn-yellow
btn-blue" */