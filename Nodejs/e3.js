//Importing events
const EventEmitter = require('events');
// Initializing event emitter instances
var eventEmitter = new EventEmitter();
var fun1 = (msg) => {
    console.log("Message from fun1: " + msg);
   };
   
   var fun2 = (msg) => {
    console.log("Message from fun2: " + msg);
   };
   // Registering fun1, fun2
   eventEmitter.on('myEvent1', fun1); //executes fun1 function on event myEvent "Line A"
   eventEmitter.on('myEvent2', fun2); //executes fun2 function on event myEvent "Line B"
   eventEmitter.on('myEvent1', fun1); //executes fun1 function on event myEvent "Line C"
   eventEmitter.on('myEvent2', fun2); //executes fun2 function on event myEvent2 " Line D"
   
   // Removing a listener of myEvent2
   eventEmitter.removeListener('myEvent2', fun2); //remove fun2 "line B"
   // Removing all the listeners of myEvent1
   eventEmitter.removeAllListeners('myEvent1'); // This will remove all events named "myEvent1" Means (Line A) and (Line C)
   // Triggering myEvent2
eventEmitter.emit('myEvent2', "LJ University"); //Executes a function fun2 (Line D)
eventEmitter.emit('myEvent1', "LJU"); // Nothing will be displayed as all events have been removed
