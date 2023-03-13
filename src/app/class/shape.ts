export abstract class Shape {
    sideA: number

    constructor(a:number) {
        // super();
        this.sideA = a;
    }

    abstract  CalculatePerimeter(a:number): number;
    abstract  CalculateArea(a: number): number;
}
