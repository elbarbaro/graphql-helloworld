var datasource = {
	fruits: [
		{
			name: "Manzana",
			color: "roja",
			price: 10.5
		},
		{
			name: "Platano",
			color: "amarillo",
			price: 5.5
		}

	],
	animals:[
		{
			name: "Gato",
			color: "negro",
			age: 3
		},
		{
			name: "Perro",
			color: "blanco",
			age: 5
		}
	]
};


var express = require('express');

var { buildSchema } = require('graphql');

var { graphqlHTTP } = require('express-graphql');


// Schema

var schema = buildSchema(`

	type Query {
		fruits: [Fruit]
		animals:  [Animal]
	}, 

	type Fruit {
		name: String
		color: String
		price: Float
	},

	type Animal {
		name: String
		color: String
		age: Int
	}
`);

// Resolver functions
var functions = {
	fruits: () => datasource.fruits,
	animals: () => datasource.animals
};

var app = express();

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: functions,
	graphiql: true
}));

app.listen(4000);
console.log("API GRAPHQL JALANDO AL 100");

