describe('About Arrays', function() {
  //We shall contemplate truth by testing reality, via spec expectations.
  it('should create arrays', function() {
    const emptyArray = [];
    expect(typeof emptyArray).toBe(/* 🤔 */); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(/* 🤔 */);

    const multiTypeArray = [
      0,
      1,
      'two',
      function() {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7]
    ];
    expect(multiTypeArray[0]).toBe(/* 🤔 */);
    expect(multiTypeArray[2]).toBe(/* 🤔 */);
    expect(multiTypeArray[3]()).toBe(/* 🤔 */);
    expect(multiTypeArray[4].value1).toBe(/* 🤔 */);
    expect(multiTypeArray[4]['value2']).toBe(/* 🤔 */);
    expect(multiTypeArray[5][0]).toBe(/* 🤔 */);
  });

  it('should understand array literals', function() {
    const array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1 /* 🤔 */]);

    array.push(3);
    expect(array).toEqual(/* 🤔 */);
  });

  it('should understand array length', function() {
    const fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(/* 🤔 */);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(/* 🤔 */);

    const tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(/* 🤔 */);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(/* 🤔 */);
  });

  it('should slice arrays', function() {
    const array = ['peanut', 'butter', 'and', 'jelly'];

    expect(array.slice(0, 1)).toEqual(/* 🤔 */);
    expect(array.slice(0, 2)).toEqual(/* 🤔 */);
    expect(array.slice(2, 2)).toEqual(/* 🤔 */);
    expect(array.slice(2, 20)).toEqual(/* 🤔 */);
    expect(array.slice(3, 0)).toEqual(/* 🤔 */);
    expect(array.slice(3, 100)).toEqual(/* 🤔 */);
    expect(array.slice(5, 1)).toEqual(/* 🤔 */);
  });

  it('should know array references', function() {
    const array = ['zero', 'one', 'two', 'three', 'four', 'five'];

    function passedByReference(refArray) {
      refArray[1] = 'changed in function';
    }
    passedByReference(array);
    expect(array[1]).toBe(/* 🤔 */);

    const assignedArray = array;
    assignedArray[5] = 'changed in assignedArray';
    expect(array[5]).toBe(/* 🤔 */);

    const copyOfArray = array.slice();
    copyOfArray[3] = 'changed in copyOfArray';
    expect(array[3]).toBe(/* 🤔 */);
  });

  it('should push and pop', function() {
    const array = [1, 2];
    array.push(3);

    expect(array).toEqual(/* 🤔 */);

    const poppedValue = array.pop();
    expect(poppedValue).toBe(/* 🤔 */);
    expect(array).toEqual(/* 🤔 */);
  });

  it('should know about shifting arrays', function() {
    const array = [1, 2];

    array.unshift(3);
    expect(array).toEqual(/* 🤔 */);

    const shiftedValue = array.shift();
    expect(shiftedValue).toEqual(/* 🤔 */);
    expect(array).toEqual(/* 🤔 */);
  });
});
