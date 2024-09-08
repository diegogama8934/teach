
export function drawBackgroundAndBorderForPrimary(color:string):string{
  switch (color) {
    case "primary":
      return "btn-primary-primaryColor";
    case "warning":
      return "btn-primary-warning";
    case "danger":
      return "btn-primary-danger";
    default:
      return "btn-primary-primaryColor";
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
      return "btn-secondary-primaryColor";
    case "warning":
      return "btn-secondary-warning";
    case "danger":
      return "btn-secondary-danger";
    default:
      return "btn-secondary-primaryColor";
  }
}