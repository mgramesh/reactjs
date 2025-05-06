// const heading =React.createElement("h1", {id:"head"}, "Hello, World!");
// const app = ReactDOM.createRoot(document.getElementById("app"));
// app.render(heading);


const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child1"}, 
[ React.createElement("h1", {}, "Welcome new heading"),
React.createElement("h2", {}, "Welcome new Sub heading")]),

React.createElement("div", {id:"child2"}, 
    [ React.createElement("h1", {}, "Second section new heading"),
    React.createElement("h2", {}, "Sub Second new Sub heading")]),


);

console.log(parent);
const app = ReactDOM.createRoot(document.getElementById("app"));
app.render(parent);
