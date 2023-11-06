function generateGame(name, price, genre, console, imageUrl , inStock){
  const li = gameTemplate( name, price, genre, console, imageUrl , inStock)
    
  const ul = document.querySelector("ul");
     ul.append(li);

  
}

   function gameTemplate( name, price, genre, console, imageUrl, inStock ) {
    const li = document.createElement("li");
     li.classList.add("single-game"); 
     const removeButton = document.createElement("button");
     removeButton.textContent = "Remove Game";
     removeButton.addEventListener("click", (event) => {
        event.target.closest(".single-game").remove()
     });
     
     if (name && price && genre && console && imageUrl && inStock) {
        
    li.innerHTML = `<h3>🎮🇩🇴</h3>
    <p><strong>Name</strong>: ${name}</p>
    <p><strong>Price</strong>: ${price}</p>
    <p><strong>Genre</strong>: ${genre}</p>
    <p><strong>Console</strong>: ${console}</p>
    
    <img src="${imageUrl}" alt="Game Image" style="width: 200px; height: 100px;"/>`;
    
     li.append(removeButton);
   }
   return li;
} 
 function updateStockStatus(game, inStock) {
    game.inStock = inStock;
}

// Handle the checkbox change event in your JavaScript
const inStockCheckbox = document.getElementById("inStock");
const outStockCheckbox = document.getElementById("outStock");

inStockCheckbox.addEventListener("change", function () {
    updateStockStatus(game, inStockCheckbox.checked);
});

outStockCheckbox.addEventListener("change", function () {
    updateStockStatus(game, !outStockCheckbox.checked);
});