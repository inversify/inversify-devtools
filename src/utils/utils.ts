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

function parseLogEntry(entry: string): any {

  let serviceIdentifier = entry.split("└── ").filter((val) => {
    return (val.indexOf("serviceIdentifier") !== -1);
  })[0].split(" : ")[1].trim();

  let implementationType = entry.split("└── ").filter((val) => {
    return (val.indexOf("implementationType") !== -1);
  })[0].split(" : ")[1].trim();

  let time = entry.split("└── ").filter((val) => {
    return (val.indexOf("Time") !== -1);
  })[0].split(" Time: ")[1];

  let plan = {
    serviceIdentifier,
    implementationType,
    time
  };

  return plan;
}

export { makeActionCreator, parseLogEntry };
