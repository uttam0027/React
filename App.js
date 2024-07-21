// React.createElement('tag', 'attributes', 'children')
const h1 = React.createElement("h1", { id: "heading" }, "Hello World"); // core react library
console.log(h1); // it is an object with type, props and key which is used to render the react element and it is immutable object which means it cannot be changed
const root = ReactDOM.createRoot(document.getElementById("root")); // react-dom library to render the react element in the dom and it is mutable object
root.render(h1); // render the react element

{
  /* <div id="parent">
  <div id="child">
    <h1 id="heading">Hello World</h1>
  </div>
</div>; */
}

//React.createElement is an object becomes an HTML element that browser can understand
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello World123")
  ),
]);

const root123 = ReactDOM.createRoot(document.getElementById("root"));
root123.render(parent);

{
  /* <div id="parent">
    <div id="child">
      <h1 id="heading">Hello World</h1>
      <h2 id="sub-heading">Children</h2>
    </div>
  </div>; */
}

const parent1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    // Giving array of children
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "sub-heading" }, "Children"),
  ]),
]);
const subHeading = ReactDOM.createRoot(document.getElementById("root"));
subHeading.render(parent1);

{
  /* <div id="parent">
      <div id="child">
        <h1 id="heading">Hello World</h1>
        <h2 id="sub-heading">Children</h2>
      </div>
      <div id="child2">
        <h1 id="heading">Hello World</h1>
        <h2 id="sub-heading">Children</h2>
      </div>
    </div>; */
}

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "sub-heading" }, "Children 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello World"),
    React.createElement("h2", { id: "sub-heading" }, "Children 2"),
  ]),
]);

const subHeading2 = ReactDOM.createRoot(document.getElementById("root"));
subHeading2.render(parent2);
