// This component returns h2 text - it is a reusable part of a react app
function HelloReact() {
  const text = 'some text';

  // XML (HTML) and Javascript combination - JSX
  // anything with curly braces is a JSX expression
  return <h2>Hello World! Here is {text}</h2>;
}

export default HelloReact;
