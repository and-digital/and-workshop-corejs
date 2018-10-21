
// ## Implement pub/sub
var events = {
    events: {},
    on: function (eventName, fn) {
      // This function takes an event name and a callback

      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    },
    emit: function (eventName) {
      // This function takes an event name and emits an event

      if (this.events[eventName]) {
        this.events[eventName].forEach(function(fn) {
          fn();
        });
      }
    }
  };

describe('pub/sub', () => {
    test('can be registered and emitted to', () => {
        const clickHandler = jest.fn();
        events.on('click', clickHandler);

        expect(clickHandler).not.toHaveBeenCalled();
        events.emit('click');
        expect(clickHandler).toHaveBeenCalled();
    });
});