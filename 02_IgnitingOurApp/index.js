const reactParent1 = React.createElement("div", { id: "parent1" }, "Parent 1", [
  React.createElement("div", { id: "child1" }, "Child 1", [
    React.createElement("div", { id: "grandchild1.1" }, "Grandchild 1.1"),
    React.createElement("div", { id: "grandchild1.2" }, "Grandchild 1.2"),
  ]),
  React.createElement("div", { id: "child2" }, "Child 2", [
    React.createElement("div", { id: "grandchild2.1" }, "Grandchild 2.1"),
    React.createElement("div", { id: "grandchild2.2" }, "Grandchild 2.2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(reactParent1);
