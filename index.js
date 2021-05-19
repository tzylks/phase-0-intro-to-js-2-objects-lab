// Write your solution in this file!
const employee = {
    name: 'John',
    streetAddress: '422 North 33rd St',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = employee
    newObj[key] = value;
    return newObj;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj.name;
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObj = employee;
    delete newObj.name;
    return newObj;
}