const { graphql, buildSchema } = require("graphql");

/**Construct a schema  for welcome query*/
const schema = buildSchema(`
  type Query {
    welcome: String
  }
`);

/**The rootValue provides a resolver function for each API endpoint*/
const rootValue = {
  welcome: () => {
    return "Welcome to graphql api!";
  }
};

/**Run the GraphQL query '{ welcome }' and print out the response */
graphql({
  schema,
  source: "{ welcome }",
  rootValue
}).then((response) => {
  console.log(response);
});
