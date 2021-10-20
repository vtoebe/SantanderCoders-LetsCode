# Classes Person, Teacher and Student
#### Create classes based on the imagem bellow. Teacher and Student classes should inherit Person class
![personClass](https://user-images.githubusercontent.com/21991501/138008866-8b32584d-2ba5-49d9-a962-938148908df3.png)
#

### How to test:
#### Creating a new Person, Student and Teacher 
```js
// NEW PERSON - paramenters: first name, last name, age, gender and an interest
const neil = new Person('Neil', 'Gaiman', 60, 'Male', 'writing')

// NEW STUDENT - parameters: same as for the creation of new Person
const vitoria = new Student('Vitoria', 'Toebe', 29, 'Female', 'Flag Football')

// NEW TEACHER - parameters: same as for Person, plus the teached subject
const murillo = new Teacher('Murilo', 'Moraes', 26, 'Male', 'AI', 'JavaScript')
```

#### These are all the functions each Person, Student or Teacher have:
###### bio - will get the person biography
```js
neil.bio
// Neil Gaiman is 60 years old and likes writing.
```
###### greet - will show the person's greeting
```js
murillo.greet
// Hello. My name is Moraes, and I teach JavaScript.
```
###### addInterest - allows the person to update their interest list
```js
murillo.addInterest('Robotics')

// You can check the updated list by using the bio function again
murillo.bio
// Murilo Moraes is 26 years old and likes AI, Robotics.
```
