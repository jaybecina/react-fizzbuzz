import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

const number = [];
for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    number.push("FizzBuzz");
  } else if (i % 5 === 0) {
    number.push("Buzz");
  } else if (i % 3 === 0) {
    number.push("Fizz");
  } else {
    number.push(i);
  }
}
console.log(number);

function App() {
  return (
    <div className="App">
      <h1>FizzBuzz</h1>
      <Container>
        <p>
          Write a program that prints the numbers from 1 to 100. However, for
          multiples of 3 print “Fizz” instead of the number, for multiples of 5
          print “Buzz” instead of the number and numbers that are multiples of
          both 3 and 5 print “FizzBuzz” instead of the number
        </p>
        <p>Answer:</p>
        {number?.map((num) => (
          <p>{num}</p>
        ))}
      </Container>
    </div>
  );
}

export default App;
