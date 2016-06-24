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

function combineActionsGroups(...actionGroups: any[]) {
  let mixing: any = {};
  actionGroups.forEach((actionGroup: any) => {
    Object.keys(actionGroup).forEach((key: string) => {
      if (mixing[key] !== undefined) {
        throw new Error("Mixing cannot be applied due to duplicated key!");
      } else {
        mixing[key] = actionGroup[key];
      }
    });
  });
  return mixing;
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
    s4() + "-" + s4() + s4() + s4();
}

export { makeActionCreator, combineActionsGroups, guid };
