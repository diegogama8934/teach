"use client";

import { useEffect } from "react";

interface Props {
  content:string
  startIcon?:string
  endIcon?:string
  type: "primary" | "secondary"
  color: "primary" | "warning" | "danger"
  onPress?: () => void
}

export function Button({content, startIcon, endIcon, type, color, onPress}:Props){

  function drawBackgroundAndBorder():string{
    switch (color) {
      case "primary":
        return "bg-primaryColor border-primaryColor text-white";
      case "warning":
        return "bg-amber-600 border-amber-600 text-white";
      case "danger":
        return "bg-red-600 border-red-600 text-white";
      default:
        return "bg-primaryColor border-primaryColor text-white";
    }
  }

  function getIconColor(){
    switch (color) {
      case "primary":
        return "!text-primaryColor";
      case "warning":
        return "!text-amber-600";
      case "danger":
        return "!text-red-600";
      default:
        return "!text-primaryColor";
    }
  }

  return(
    <button className={`${drawBackgroundAndBorder()} px-4 py-2 border-[1px] rounded-md flex items-center gap-2`} onClick={onPress}>
      {startIcon && <span className={`material-symbols-rounded ${type == "primary" ? "!text-white" : getIconColor()} inline-block !text-[18px]`}>{startIcon}</span>}
      <span className="inline-block text-sm">{content}</span>
      {endIcon && <span className={`material-symbols-rounded ${type == "primary" ? "!text-white" : getIconColor()} inline-block !text-[18px]`}>{endIcon}</span>}
    </button>
  );
}