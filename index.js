const heading = React.createElement("div", {}, "Hello World I am from React");

/**
 *
 * <div id="parent">
 *      <div id="child1">
 *          <h2></h2>
 *      </div>
 * </div>
 *
 */
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", { id: "innerchild" }, "Hello world"),
    React.createElement("h3", { id: "sibling" }, "Hello world2"),
  ])
);

root.render(parent);
