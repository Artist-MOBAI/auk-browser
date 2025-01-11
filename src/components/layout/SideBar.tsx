"use client";

import React from "react";
import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";

const SideBar = () => {
  const addWebview = async () => {
    await invoke("add_webview");
  };

  const size = async () => {
    const a = await getCurrentWindow().innerSize();
    console.log(a);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="space-y-2 px-4 text-mobai-orange">
        <h2 className="font-rosarivo text-4xl">Auk</h2>
        <p className="font-tinos text-lg">
          The{" "}
          <span className="bg-mobai-orange font-bold italic text-[var(--background)]">
            World’s Only
          </span>
          <br />
          Tauri-Driven Browser
        </p>
      </div>
      <form className="flex h-8 px-4">
        <input
          type="text"
          className="w-full border-b-2 border-mobai-orange bg-transparent text-mobai-orange caret-mobai-orange outline-none"
        />
      </form>
      <div className="">
        <li>hhh</li>
      </div>
      <button onClick={addWebview}>测试1</button>
      <button onClick={size}>测试2</button>
    </div>
  );
};

export default SideBar;
