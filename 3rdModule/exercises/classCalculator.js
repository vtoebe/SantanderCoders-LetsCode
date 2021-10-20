class Calculator {
    constructor (operator){
        this.operator = operator;
        this.solved = new Map();
        this.entries = []
    }

    get list() {console.log(this.solved)}
    get reset() {this.solved = new Map(); this.entries = []}

    saveOperations(operation, result) {this.solved.set(operation, result)}

    enter(number){
        typeof number == 'number' ?
        (this.entries = [...this.entries, number]) : console.log('Invalid entry! It should be a number!')
    }

    equals(callbackFn) {
        const result = callbackFn(this.entries)
        this.saveOperations((`${this.entries.join(` ${this.operator} `)}`), result)
        return result
    }
}

class Add extends Calculator{
    constructor(){
        super('+')
    }

    get equals (){
        return super.equals(
            entries => entries.reduce(
                (acc, curr) => acc + curr
            )
        )
    }
}

class Subtract extends Calculator{
    constructor(){
        super('-')
    }

    get equals (){
        return super.equals(
            entries => entries.reduce(
                (acc, curr) => acc - curr
            )
        )
    }
}

class Divide extends Calculator{
    constructor(){
        super('/')
    }
    
    enter(number){
        number !== 0 ? super.enter(number) : console.log('can\'t divide by zero')
    }
    
    get equals (){
        return super.equals(
            entries => entries.reduce(
                (acc, curr) =>  +acc / +curr
            )
        )
    }
}

class Multiply extends Calculator{
    constructor(){
        super('*')
    }

    get equals (){
        return super.equals(
            entries => entries.reduce(
                (acc, curr) => acc * curr
            )
        )
    }
}