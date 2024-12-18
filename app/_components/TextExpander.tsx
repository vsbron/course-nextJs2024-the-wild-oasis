"use client";
import { useState } from "react";

import { TextExpanderProps } from "@/app/_lib/types";

function TextExpander({ children }: TextExpanderProps) {
  // Setting the state for expanded text
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Typecasting of children
  const text = children as string;

  // Modified text to be displayed fully or as a preview
  const displayText = isExpanded
    ? text
    : text.split(" ").slice(0, 40).join(" ") + "...";

  // Returned JSX
  return (
    <span>
      {displayText}{" "}
      <button
        className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
