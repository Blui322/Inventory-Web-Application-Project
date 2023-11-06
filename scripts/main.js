const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Name", event.target.name.value);
    console.log("Price", event.target.price.value);
    console.log("Genres", event.target.genres.value);
    console.log("Consoles", event.target.consoles.value);
    console.log("Image", event.target.imageUrl.value);
    console.log("inStock", event.target.inStock.value);
const { name, price, genres, consoles, imageUrl, inStock } = event.target;

generateGame(name.value, price.value, genres.value, consoles.value, imageUrl.value, inStock.value );

count++;

addCount(count);

form.reset();
});

const listItems = document.querySelectorAll("li");
for(let item of listItems){
    item.addEventListener("click", (event) => {
        event.target.closest(".single-game").remove();
    })
}