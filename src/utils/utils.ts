function makeActionCreator(type: string, ...argNames: string[]) {
  return function(...args: any[]) {
    let action: any = { type : type };
    argNames.forEach((arg, index) => {
        let argName: string = argNames[index];
        let argValue: any = args[index];
        action[argName] = argValue;
    });
    return action;
  };
}

function setElementFullHeight(className: string) {
  let height = window.innerHeight;
  let elm: any = document.getElementsByClassName(className)[0];
  elm.style.height = `${height}px`;
}

export { makeActionCreator, setElementFullHeight };
