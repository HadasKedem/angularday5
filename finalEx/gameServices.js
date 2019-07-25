
    
// module.constant("urlConst", {
//     url : "https://jsonplaceholder.typicode.com/posts"
// })
// module.value("xService", {
//     xArr : new card(0),
//     cardsArr : []
// })

module.value("guessService", {
    objectscore : {
        guessCount : 0,
        correctCount : 0
    }
})

module.value("twoCardsService", {
    twoCards : {
        card1 : "",
        card2 : ""
    }
})

module.factory('randService', function(){
	
    let cards = [];
    let notRand = [1,1,2,2,3,3,4,4];
	
    for (var index = 0; index < 8; index++) {
        let randI = Math.floor(Math.random() * (notRand.length));  
        cards[index] = (parseInt([notRand[randI]]));
        notRand.splice(randI, 1)
    }	
    return cards;
});




