"use client";
import { drawBackgroundAndBorderForPrimary, drawBackgroundAndBorderForSecondary, getIconColorForPrimary } from "@/utils";

interface Props {
  content:string
  startIcon?:string
  endIcon?:string
  type: "primary" | "secondary"
  color: "primary" | "warning" | "danger"
  onPress?: () => void
}

export function Button({content, startIcon, endIcon, type, color, onPress}:Props){

  if (type == "primary") return(
    <button className={`${drawBackgroundAndBorderForPrimary(color)} px-4 py-2 border-[1px] rounded-md flex items-center gap-2 hover:scale-105 transition-all`} onClick={onPress}>
      {startIcon && <span className={`material-symbols-rounded !text-white inline-block !text-[18px]`}>{startIcon}</span>}
      <span className="inline-block text-sm">{content}</span>
      {endIcon && <span className={`material-symbols-rounded !text-white inline-block !text-[18px]`}>{endIcon}</span>}
    </button>
  );

  if (type == "secondary") return(
    <button className={`${drawBackgroundAndBorderForSecondary(color)} px-4 py-2 border-[1px] rounded-md flex items-center gap-2 hover:scale-105 transition-all`} onClick={onPress}>
      {startIcon && <span className={`material-symbols-rounded inline-block !text-[18px]`}>{startIcon}</span>}
      <span className="inline-block text-sm">{content}</span>
      {endIcon && <span className={`material-symbols-rounded inline-block !text-[18px]`}>{endIcon}</span>}
    </button>
  );
}