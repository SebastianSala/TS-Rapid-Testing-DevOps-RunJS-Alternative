function* fibonacci(): Generator<number> {
  let firstRecent = 0;
  let secondRecent = 1;

  yield firstRecent;
  yield secondRecent;

  while (true) {
    let value = firstRecent + secondRecent;
    // firstRecent = secondRecent;
    // secondRecent = value;
    yield value;

    // this executes with the next call to next().value
    firstRecent = secondRecent;
    secondRecent = value;
  }
}

let fibo = fibonacci();

let limit = 0;
while (limit < 10) {
  console.log("the fibonnaci's: " + fibo.next().value);
  // console.log("the fibonnaci's: " + fibo.next().value);
  limit++;
}
