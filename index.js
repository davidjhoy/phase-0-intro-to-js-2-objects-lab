// Write your solution in this file!
const employee = {
    name: "Johnny Smith",
    streetAddress: '6201 Seashore'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value
    }

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmp ={
        ...employee
    } 
    delete newEmp[key];
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

