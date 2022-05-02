import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {

  return (
    <Popover className="fixed bottom-4 right-4">
      <Popover.Panel>NLW RETURN</Popover.Panel>

      <Popover.Button
        className="flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
