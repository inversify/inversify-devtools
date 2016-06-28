import thunk from "redux-thunk";
import { bootstrap } from "redux-bootstrap";
import routes from "./config/routes";
import appReducer from "./reducers/app_reducer";
import logReducer from "./reducers/log_reducer";
import settingReducer from "./reducers/setting_reducer";

function render(container: string) {
    bootstrap({
        container: container,
        initialState: {},
        middlewares: [thunk],
        reducers: {
            app: appReducer,
            log: logReducer,
            settings: settingReducer
        },
        routes: routes
    });
}

// TEMP
import "reflect-metadata";
import * as inversify from "inversify";
let win: any = window;
win.inversify = inversify;

interface Weapon {}

@inversify.injectable()
class Katana implements Weapon {}

@inversify.injectable()
class Shuriken implements Weapon {}

interface Warrior {
    katana: Weapon;
    shuriken: Weapon;
}

@inversify.injectable()
class Ninja implements Warrior {

    public katana: Weapon;
    public shuriken: Weapon;

    public constructor(
        @inversify.inject("Weapon") @inversify.named("katana") katana: Weapon,
        @inversify.inject("Weapon") @inversify.named("shuriken") shuriken: Weapon
    ) {
        this.katana = katana;
        this.shuriken = shuriken;
    }
}

let kernel = new inversify.Kernel();

kernel.bind<Warrior>("Warrior").to(Ninja);
kernel.bind<Weapon>("Weapon").to(Katana).whenTargetNamed("katana");
kernel.bind<Weapon>("Weapon").to(Shuriken).whenTargetNamed("shuriken");

win.kernel = kernel;

function demo() {
    if (win.__inversifyDevtools__) {
        win.__inversifyDevtools__(kernel);
    }
    kernel.get("ninja");
    kernel.get("Warrior");
    kernel.get("Weapon");
    kernel.getNamed("Weapon", "shuriken");
    kernel.getNamed("Weapon", "katana");
}

// setTimeout(function() { demo(); }, 1000);

render("root");
// END TEMP

export default render;
