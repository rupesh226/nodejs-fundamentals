const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("Order-Pizza", (message) => {
  console.log(message + " - Order prepared");
});

emitter.on("Order-Pizza", (message) => {
  console.log(message + " - Order received");
});

emitter.emit("Order-Pizza", "I want a pizza with extra cheese");
