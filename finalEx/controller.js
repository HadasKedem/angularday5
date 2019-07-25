module.controller("gameCtrl",gameCtrl)
module.controller("scoresCtrl",scoresCtrl)

function gameCtrl($scope,randService,twoCardsService,guessService){
    $scope._cardsNums = randService;
    $scope._cards = [8];
    $scope._twoCards = twoCardsService.twoCards;

    $scope._objectscore = guessService.objectscore;
   
    for (var index = 0; index < 8; index++) {
        $scope._cards[index] = new Card($scope._cardsNums[index], index)
    }

    $scope.clickX =  function(index){
        //when no card is picked
        if( $scope._twoCards.card1 === "" &&
            $scope._twoCards.card2 === ""){
                $scope._cards[index].filpCrad();
                $scope._twoCards.card1 = index;
        }
        //when two cards are picked
        else if ($scope._twoCards.card1 !== "" &&
                  $scope._twoCards.card2 !== ""){
                      // if they equel
                    if( $scope._cards[$scope._twoCards.card1]._number ===
                        $scope._cards[$scope._twoCards.card2]._number){
                            // go through the cards and deleting the cards
                            let temp = $scope._cards[$scope._twoCards.card1]._number
                            for(let i = 0; i < $scope._cards.length  ; i++){
                                ;
                                if($scope._cards[i]._number ===  temp) {
                                    $scope._cards.splice(i, 1);
                                    $scope._twoCards.card1 = "";
                                    break;
                                }
                            }
                            for(let i = 0; i < $scope._cards.length  ; i++){
                                if($scope._cards[i]._number ===  temp) {
                                    $scope._cards.splice(i, 1);
                                    $scope._twoCards.card2 = "";
                                    break;
                                }
                            }
                            $scope._objectscore.guessCount++;
                            $scope._objectscore.correctCount++
                    }else{
                        //if not equel
                        $scope._cards[$scope._twoCards.card1].filpCrad();
                        $scope._twoCards.card1 = "";
                        $scope._cards[$scope._twoCards.card2].filpCrad();
                        $scope._twoCards.card2 = "";

                        $scope._objectscore.guessCount++;
                    }
        }else{
            //when only 1 card picked
            $scope._cards[index].filpCrad();
            $scope._twoCards.card2 = index;

        }
    }

}


function scoresCtrl($scope,guessService){
    $scope._objectscore = guessService.objectscore;

}

class  Card {

       constructor(number = 0, id = 0){
        this._number  = number;
        this._flipped = false;
        this._x = "x";
       }
    
       filpCrad() {
        this._flipped = !(this._flipped);
      }
}

