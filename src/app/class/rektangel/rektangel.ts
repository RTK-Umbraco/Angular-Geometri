import { Shape } from "../shape";

export class Rektangel extends Shape{

    constructor(a: number) {
        super(a);
        this.sideA = a;
    }
    CalculatePerimeter(): number {
        const perimeter = 4 * this.sideA 
        return perimeter;
    }
    CalculateArea(): number {
        const areal = this.sideA * this.sideA ;
        return areal;
    }
}
