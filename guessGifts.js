function guessGifts(wishlist, presents) {
    let guesses = [];
    for(let i = 0; i < presents.length; i++){
        wishlist.forEach(ele => {
            if(presents[i].size === ele.size && presents[i].clatters === ele.clatters && presents[i].weight === ele.weight){
                guesses.push(ele.name);
                return true;
            } else {
                return false;
            }
        });
    }
    return guesses;
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents));