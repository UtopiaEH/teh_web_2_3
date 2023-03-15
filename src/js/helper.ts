//ts-ignore
function NameFunction(param1: any, param2: any) {
    return param1 + param2
    
}

NameFunction(1, 2)



const nameFunction = (param1: any, param2: any) => {
    
    //code
    return param1 + param2
}

nameFunction(1, 2)


const testObj = {
    name: 'test',
    age: 20,
    address: 'test address'
}

const {age, name, } = testObj

const arr = [1, 2,3,4,5,6,7,8,9,10]

const [first, second, third, ...rest] = arr

export {

}