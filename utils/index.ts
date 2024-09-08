
export function drawBackgroundAndBorderForPrimary(color:string):string{
  switch (color) {
    case "primary":
      return "btn-primary-primaryColor";
    case "warning":
      return "bg-amber-600 border-amber-600 text-white";
    case "danger":
      return "bg-red-600 border-red-600 text-white";
    default:
      return "bg-primaryColor border-primaryColor text-white";
  }
}

export function getIconColorForPrimary(color:string):string{
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

export function drawBackgroundAndBorderForSecondary(color:string):string{
  switch (color) {
    case "primary":
      return "bg-transparent !border-primaryColor text-primaryColor";
    case "warning":
      return "bg-transparent !border-amber-600 text-amber-600";
    case "danger":
      return "bg-transparent !border-red-600 text-red-600";
    default:
      return "bg-transparent !border-primaryColor text-white";
  }
}