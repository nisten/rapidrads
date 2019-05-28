const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields:() => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer:{
            type: CustomerType,
            args: {
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
              return axios.get('http://jsonplaceholder.typicode.com/users/'+ args.id)
              .then(res => res.data);
            }
        },
        customers:{
          type: new GraphQLList(CustomerType),
          resolve(parentValue, args){
              return axios.get('http://jsonplaceholder.typicode.com/users/')
                  .then(res => res.data);
          }
      }
    }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});