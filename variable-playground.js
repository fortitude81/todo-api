var person = {
	name: 'Andrew',
	age: 21
};

function updatePerson (obj) {
	obj = {
		name: 'Andrew',
		age: 24
	};
}

updatePerson(person);
console.log(person);

//array example
var grades = [15, 88];

function addGrades(grades) {
	grades.push(55);
}

addGrades(grades);
console.log(grades);