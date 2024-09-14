// const person: {
//     name:string;
//     age: number;

// } = {
//     name: 'John',
//     age: 34
// };
// console.log(person.name);


// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // das definiert eine Tuple
// } = {
//     name: 'John',
//     age: 34,
//     hobbies: ['Sport', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'John',
    age: 34,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;


let favortiteActivities : string[];
favortiteActivities = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error !! weil das nicht ein teil von Typescript ist.
}



if (person.role === Role.AUTHOR){
    console.log('is Admin');
}
