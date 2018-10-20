const addClasshelper = (internalElement, name) => {
    const split = internalElement.split('class="');
    const newElement = [split[0], `class="${name} ` ,split[1]].join('');
    return newElement;
};

function DomElement(elemString) {
    let internalElement = `<div class="hello"> Test </div>`;

    return {
        addClass: function(name){
            internalElement = addClasshelper(internalElement, name);
            return this;
        },
        val: function(){
            return internalElement;
        }
    }
}

function $(elemString){
    return new DomElement(elemString);
}

console.log($('.hello').addClass('red').addClass('green').val());
console.log($('.hello').addClass('green').val());

// **Exercise: Add another method to the fake JQuery example**