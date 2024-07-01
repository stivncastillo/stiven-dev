import React, { useState } from "react";
import { tv } from "tailwind-variants";

type Props = {};

const GridSkillItem = (props: Props) => {
  const [open, setOpen] = useState(false);

  const item = tv({
    base: "group border border-gray-400/30 h-[120px] rounded-md hover:border-violet-400/50 hover:bg-gray-400/5",
    variants: {
      state: {
        open: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[860px] max-h-[400px] bg-black hover:bg-black rounded-md border border-violet-400/50 z-10 h-auto pb-4",
        closed: "",
      },
    },
    defaultVariants: {
      state: "closed",
    },
  });

  return (
    <>
      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black-400/50 z-10 backdrop-blur-md"
          onClick={() => setOpen(false)}
        ></div>
      )}
      {open && <div className="h-[120px] w-full"></div>}
      <div className={item({ state: open ? "open" : "closed" })}>
        <button
          className={`flex w-full ${open ? "flex-row space-y-0 space-x-2 justify-center items-center py-2" : "h-full flex-col justify-center items-center space-y-2"}`}
          onClick={() => setOpen(!open)}
        >
          <img
            src="../../../public/icons/basil_lightning-alt-outline.svg"
            alt="UI Design"
            width={!open ? "32" : "24"}
            height={!open ? "32" : "24"}
          />
          <span className="text-gray-400">UI Design</span>
        </button>
        {open && (
          <div className="flex flex-row justify-center space-x-2 space-y-2 flex-wrap">
            {Array.from({ length: 20 }).map((item) => (
              <div className="w-auto leading-none border-0-5 border-violet-800 bg-violet-800/40 text-violet-400 px-4 py-1 rounded-full">
                <span className="text-sm">Design</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GridSkillItem;
