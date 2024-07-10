import React from "react";
import * as Comlink from "comlink";
export const Button = () => {
  async function onClickSayHello() {
    const WorkerClass: any = Comlink.wrap(
      new Worker(new URL("../../worker.js", import.meta.url), {
        type: "module",
      })
    );
    const instance = await new WorkerClass();
    await instance.sayHello();
  }
  return <button onClick={onClickSayHello}> Click me</button>;
};
