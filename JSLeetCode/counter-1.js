// Counter solution using class
class Counter {
  constructor(count) {
    this.count = count;
  }

  next() {
    return this.count++;
  }
}

const counter = new Counter(10);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
