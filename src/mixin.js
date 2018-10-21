
// A mixin is an object that is spread onto another

// It can be spread onto the prototype of the object if necessary

var myMixins = {
    moveUp: () => "move up",
    moveDown: () => "move down",
    stop: () => "stop! in the name of love!",
};

// A skeleton carAnimator constructor
function CarAnimator() {
    this.moveLeft = () => "move left"
}

// Extend both constructors with our Mixin
CarAnimator.prototype = { ...CarAnimator.prototype, ...myMixins }

// Create a new instance of carAnimator
var myAnimator = new CarAnimator();
console.log(myAnimator.moveLeft());
console.log(myAnimator.moveDown());
console.log(myAnimator.stop());
