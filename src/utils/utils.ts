
import { scopeFormatter, bindingTypeFormatter } from "inversify-logger-middleware";

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

function formatBindings(bindings: inversify.interfaces.Binding<any>[]) {
      return bindings.map((binding: any) => {
          if (typeof binding.scope === "number") {
                binding.scope = scopeFormatter(binding.scope);
          }
          if (typeof binding.type === "number") {
              binding.type = bindingTypeFormatter(binding.type);
          }
          return binding;
      });
  }

export { makeActionCreator, combineActionsGroups, formatBindings };
