import React from "react";
import { Close } from "./icons";

const Toasty: React.FC<ToastyProps> = React.memo(
  ({
    isOpen,
    message,
    onClose,
    position = "top-left",
    type,
    backgroundColor,
    className,
    color,
    autoClose,
  }) => {
    const backgroundColors: { [x: string]: string } = {
      error: "#D9534E",
      warning: "#EFAD4E",
      info: "#5AC1DD",
      success: "#5BB85C",
    };

    if (isOpen) {
      setTimeout(() => {
        onClose();
      }, autoClose ?? 6000);
    }
    return (
      <div
        className={`${className ?? "toasty"} ${position}`}
        style={{
          display: isOpen ? "flex" : "none",
          backgroundColor: backgroundColor ?? backgroundColors[type],
        }}
      >
        <p style={{ color }}>{message}</p>
        <button onClick={onClose}>
          <Close color={color} />
        </button>
      </div>
    );
  }
);

export default Toasty;
