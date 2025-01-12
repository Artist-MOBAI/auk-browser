import { invoke } from "@tauri-apps/api/core";
import React, { useState } from "react";

const search = async (url: string) => {
  await invoke("search", { url: url });
};

const SidebarHeader = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleKeyDown = () => {
    search(inputValue);
  };

  return (
    <>
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
      <div className="flex h-8 px-4">
        <input
          type="text"
          className="w-full border-b-2 border-mobai-orange bg-transparent text-mobai-orange caret-transparent outline-none hover:border-4 hover:bg-mobai-orange hover:text-[var(--background)] hover:caret-[var(--background)]"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default SidebarHeader;
