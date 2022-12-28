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

//now emit this event
customEmitter.emit("response");
