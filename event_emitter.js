const EventEmitter = require("events");
//events mdoule returns a class
//so if u want to create something custom, need to extend the class
//but if u want to emit and listen an event just create an instance

const customEmitter = new EventEmitter();
//so, now we've instance of this class

//this object has 2 popular methods, --- on--listen for an event, emit-- emit that event

//so, 1st listen to particular event-

customEmitter.on("response", () => {
  console.log(`response received`);
});

//here we can have as many functions we want that listening for that same event & do some other logic, ex-
// customEmitter.on("response", () => {
//   console.log(`something else`);
// });

//now emit this event
// customEmitter.emit("response");

//but here the order matters, 1st listen for an event then emit that event

//we can pass arguments while emiting the event
//and in the callback we can access those as parameters
//ex-

customEmitter.on("response", (name, num) => {
  console.log(`something else ${name}   ${num}`);
});

customEmitter.emit("response", "Ani", 320);
