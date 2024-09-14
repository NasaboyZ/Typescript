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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'John',
    age: 34,
    hobbies: ['Sport', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
var favortiteActivities;
favortiteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // Error !! weil das nicht ein teil von Typescript ist.
}
if (person.role === Role.AUTHOR) {
    console.log('is Admin');
}
