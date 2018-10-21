const addClasshelper = (internalElement, name) => {
    const split = internalElement.split('class="');
    const newElement = [split[0], `class="${name} ` ,split[1]].join('');
    return newElement;
};

function DomElement(elemString) {
    let fakeDOM = `<div class="hello"> Test </div>`;

    return {
        addClass: function(name){
            fakeDOM = addClasshelper(fakeDOM, name);
            return this;
        },
        val: function(){
            return fakeDOM;
        }
    }
}

function $(elemString){
    return new DomElement(elemString);
}

describe('$', () => {
    test('To ', () => {
        expect(
            $('.hello').addClass('red').addClass('green').val()
        ).toEqual(
            '<div class=\"green red hello\"> Test </div>'
        );
    });
});


console.log($('.hello').addClass('green').val());

// **Exercise: Add another method to the fake JQuery example**