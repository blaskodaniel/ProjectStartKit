export class FirstClass {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Class message:, " + this.greeting;
    }
}