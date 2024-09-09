


export function ModalHeader({children}:{children:React.ReactNode}){



  return(
    <div className="flex justify-between">
      {children}
      <button><span className="material-symbols-rounded">close</span></button>
    </div>
  );
}