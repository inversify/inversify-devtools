import { Kernel, injectable, named, inject } from "inversify";
import "reflect-metadata";

let TYPES = {
    Warrior: Symbol("Warrior"),
    Weapon: Symbol("Weapon")
};

let TAGS = {
    katana: "katana",
    shuriken: "shuriken",
};

interface Weapon {}

interface Warrior {
    katana: Weapon;
    shuriken: Weapon;
}

@injectable()
class Katana implements Weapon {}

@injectable()
class Shuriken implements Weapon {}

@injectable()
class Ninja implements Warrior {

    public katana: Weapon;
    public shuriken: Weapon;

    public constructor(
        @inject(TYPES.Weapon) @named(TAGS.katana) katana: Weapon,
        @inject(TYPES.Weapon) @named(TAGS.shuriken) shuriken: Weapon
    ) {
        this.katana = katana;
        this.shuriken = shuriken;
    }
}

let kernel = new Kernel();

kernel.bind<Warrior>(TYPES.Warrior).to(Ninja);
kernel.bind<Weapon>(TYPES.Weapon).to(Katana).whenTargetNamed(TAGS.katana);
kernel.bind<Weapon>(TYPES.Weapon).to(Shuriken).whenTargetNamed(TAGS.shuriken);

function useDevtools(addKernel: (kernel: inversify.interfaces.Kernel) => void) {
    let win: any = window;
    win.kernel = addKernel(kernel);
    kernel.get("ninja");
    kernel.get(TYPES.Warrior);
    kernel.get(TYPES.Weapon);
    kernel.getNamed(TYPES.Weapon, TAGS.shuriken);
    kernel.getNamed(TYPES.Weapon, TAGS.katana);
}

export default useDevtools;
