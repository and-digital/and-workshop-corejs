
const { Observable, Subject, ReplaySubject, from, of, range } = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');

const sumObserver = {
    sum: 0,
    next(value) {
      console.log('Adding: ' + value);
      this.sum = this.sum + value;
    },
    error() { // We actually could just remove this method,
    },        // since we do not really care about errors right now.
    complete() {
      console.log('Sum equals: ' + this.sum);
    }
  };
   
of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
  .subscribe(sumObserver);
