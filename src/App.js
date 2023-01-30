const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Baby",
      animal: "Cat",
      breed: "Tabby",
    }),
    React.createElement(Pet, {
      name: "Multi",
      animal: "Cat",
      breed: "Calico",
    }),
    React.createElement(Pet, {
      name: "Scooby Doo",
      animal: "Dog",
      breed: "Brown",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
