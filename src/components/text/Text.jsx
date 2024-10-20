import React from "react";

export default function Text({ fontSize, textColor, text }) {
  return (
    <h1 className="text" style={{ fontSize: fontSize, color: textColor }}>
      {text}
    </h1>
  );
}
