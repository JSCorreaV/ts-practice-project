enum Role {ADMIN = 0, READ_ONLY = "viewer", AUTHOR = "0"};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    exampleOftuple: [number, string];
    role: Role;
} = {
    name: 'Juan Sebastian',
    age: 33,
    hobbies: ['Sport', 'Cooking'],
    exampleOftuple: [1, 'author'],
    role: Role.AUTHOR
};

console.log(person);

