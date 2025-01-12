import React from "react";
import {
  RiSettingsLine,
  RiDownloadLine,
  RiArrowLeftRightLine,
} from "react-icons/ri";

const SidebarFooter = () => {
  return (
    <div className="fixed bottom-8 left-4 right-4 flex flex-col items-start justify-start space-y-2 font-tinos text-lg text-mobai-orange">
      <div className="flex flex-row space-x-2">
        <button className="border-b-2 border-mobai-orange p-2 text-xl">
          <RiSettingsLine />
        </button>

        <button className="border-b-2 border-mobai-orange p-2 text-xl">
          <RiArrowLeftRightLine />
        </button>
        <button className="border-b-2 border-mobai-orange p-2 text-xl">
          <RiDownloadLine />
        </button>
      </div>
      <p className="font-bold italic">@Artist-MOBAI</p>
    </div>
  );
};

export default SidebarFooter;