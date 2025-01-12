import React from "react";
import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";

const SidebarTabs = () => {
  const addWebview = async () => {
    await invoke("add_webview");
  };

  const size = async () => {
    const a = await getCurrentWindow().innerSize();
    console.log(a);
  };
  return (
    <>
      <div className="">
        <li>hhh</li>
      </div>
      <button onClick={addWebview}>测试1</button>
      <button onClick={size}>测试2</button>
    </>
  );
};

export default SidebarTabs;
