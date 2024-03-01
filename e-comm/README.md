## E commerce app

![Image](./ecomm.png)

Full stack React application that uses GraphQL as its backend. Using a GraphQL server and mock data, the GraphQL server was created within Next.js using API routes. This GraphQL server takes queries and mutations to provide you with data and lets you mutate that data. This GraphQL server is used by a React application that uses Apollo Client to send and receive data from the server.

- Project Overview
    1. GraphQL server with next.js
    2. Consuming GraphQL with Apollo Client
    3. Handeling authentication in GraphQL

### Setting up next project

- Before creatign GraphQL endpoint, we need to set up the server in Next.js
    + The graphql library is needed to use GraphQL in our application
    + express- graphql is a tiny implementation of GraphQL Server for Node.js. 
    + Both @graphql- tools/schema and @graphql-tools/mock are open source libraries that helps you create GraphQL servers. 


```bash
npm install graphql @graphql-tools/schema @graphql-tools/mock express-graphql

```

### Main takeaways:

- GraphQL is a query language for APIs and its defined as a convention for retrieving data from an API.

- APIs Compared:
    + REST API: Well known for sending HTTP request that are dependant on multiple endpoints. 
    + GraphQL API: provides a single endpoint that lets you query and/or mutate data sources such as databases.

- The way GraphQL is constructed will determine the structure of the returned data since GraphQL follows the principle of "Ask for what you need, get exactly that".
    + Result of data is returned in JSON format.

- Apollo acts as an abstracction layer between application and server.
    + Apollo Client is a state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
    + it handels 


- Mutating data makes using GraphQl more interesting because when data is mutated, some side effects should be executed.
    + Adding them is similar than schema definition.

- For authentication in frontend apps, most of the time, JSN Web Tokens (JWTs) are used, which are encrypted tokens that can easily be used to share user info with backend.