function Card(number) {
    this.number = number;
    this.flipped = false;

    
    Card.prototype.flip = function() {
    this.flipped = !this.flipped;
    }
  }