import { add, divide } from "../src/calculator.js";

describe('add', ()=>{
    it('adds two positive numbers', ()=>{
        expect(add(2,3)).toBe(5);
    })

    it('adds negative numbers', ()=>{
        expect(add(-2,-3)).toBe(-5);
    })
    

    it('throws when inputs are not numbers', ()=>{
        expect(()=> add('2',3)).toThrow('Add expects two numbers.');
    })
})

describe('divide', ()=>{
    it('divides two positive numbers', ()=>{
        expect(divide(6,3)).toBe(2);
    })

    it('throws when inputs are not numbers', ()=>{
        expect(()=> divide('6',3)).toThrow('Both arguments must be numbers');
    })


    it('throws when an argument is NaN', ()=>{
        expect(()=> divide(NaN,3)).toThrow('Arguments cannot be NaN');
        expect(()=> divide(6,NaN)).toThrow('Arguments cannot be NaN');
    })

    it('throws when an argument is undefined', ()=>{
        expect(()=> divide(6,undefined)).toThrow('Both arguments must be numbers');
    })



    it('throws when dividing by zero', ()=>{
        expect(()=> divide(6,0)).toThrow('Division by zero is not allowed');
    })
})
