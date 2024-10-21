const Btn = document.querySelectorAll("input[type=button]");
const imageElement = document.querySelector("image");
const textContentElement = document.getElementById("textContent");

let images = ["tour_eiffel.webp", "notre_dame.webp", "arc_de_triomphe.webp", "mont_saint_michel.webp", "versailles.webp"];


Btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let image = textContentElement
        
