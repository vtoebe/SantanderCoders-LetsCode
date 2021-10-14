class CalculatorFunctions {
    constructor (){
        this.operations = new Map();
        this.entries = []
    }

    get list() {console.log(this.operations)}
    get reset() {this.operations.clear(); this.entries = []}

    saveOperations (arr, result) {this.operations.set(arr, result)}

    enter(number){
        typeof number == 'number' ?
        (this.entries = [...this.entries, number]) : console.log('Invalid entry! It should be a number!')
    }

    equals() {
        this.entries = []
    }
}

class Add extends CalculatorFunctions{
    constructor(){
        super()
    }

    get equals (){
        const result = this.entries.reduce(
            (acc, curr) => acc + curr, 0
        )

        super.saveOperations(this.entries.join('+'), result)
        super.equals();
        return result;
    }
}

class Subtract extends CalculatorFunctions{
    constructor(){
        super()
    }

    get equals (){
        const result = this.entries.reduce(
            (acc, curr) => acc - curr, 0
        )

        super.saveOperations(this.entries.join('-'), result)
        super.equals();
        return result;
    }
}

class Divide extends CalculatorFunctions{
    constructor(){
        super()
    }

    get equals (){
        let [n1, n2] = this.entries
        const result = n2 !== 0 ? +n1 / +n2 : 'can\'t divide by zero'

        super.saveOperations(this.entries.join('/'), result)
        super.equals();
        return result;
    }
}

class Multiply extends CalculatorFunctions{
    constructor(){
        super()
    }

    get equals (){
        let [n1, n2] = this.entries
        const result = n1 * n2

        super.saveOperations(this.entries.join('*'), result)
        super.equals();
        return result;
    }
}