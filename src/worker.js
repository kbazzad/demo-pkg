import * as Comlink from "comlink";
class WorkerClass {
  sayHello() {
    return console.info("SayHello");
  }
}

Comlink.expose(WorkerClass);
