import thunk from "redux-thunk";
import bootstrap from "redux-bootstrap";
import routes from "./config/routes";
import appReducer from "./reducers/app_reducer";
import logReducer from "./reducers/log_reducer";

// TEMP
import "reflect-metadata";
import * as inversify from "inversify";
let win: any = window;
win.inversify = inversify;

interface IWeapon {}

@inversify.injectable()
class Katana implements IWeapon {}

@inversify.injectable()
class Shuriken implements IWeapon {}

interface INinja {
    katana: IWeapon;
    shuriken: IWeapon;
}

@inversify.injectable()
class Ninja implements INinja {
    public katana: IWeapon;
    public shuriken: IWeapon;
    public constructor(
        @inversify.inject("IWeapon") @inversify.named("katana") katana: IWeapon,
        @inversify.inject("IWeapon") @inversify.named("shuriken") shuriken: IWeapon
    ) {
        this.katana = katana;
        this.shuriken = shuriken;
    }
}

let kernel = new inversify.Kernel();

kernel.bind<INinja>("INinja").to(Ninja);
kernel.bind<IWeapon>("IWeapon").to(Katana).whenTargetNamed("katana");
kernel.bind<IWeapon>("IWeapon").to(Shuriken).whenTargetNamed("shuriken");

win.kernel = kernel;

/*

if (__inversifyDevtools__) {
    __inversifyDevtools__(kernel);
}

kernel.get("INinja");

*/

// END TEMP

bootstrap({
    container: "root",
    initialState: {},
    middlewares: [thunk],
    reducers: {
        app: appReducer,
        log: logReducer
    },
    routes: routes
});
