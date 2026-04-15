const graphql  = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLString} = graphql
const userCollection = require('../models/userModel')
const bcrypt = require('bcryptjs');


const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        registerUser:{
            type:GraphQLString,
            args:{
                name:{type:GraphQLString},
                email:{type:GraphQLString},
                password:{type:GraphQLString},
            },
            async resolve(parent , args ){
                const {name ,email , password} = args
                let existingUser = await userCollection.findOne({email});
                if(existingUser){
                    return 'user already registered'
                }
                else{
                    let hash = await bcrypt.hash(password, 10);
                    await userCollection.create({name, email, password:hash});
                    return 'user registered successfully'
                }
            }
        },
        loginUser:{

        },
        updateUser:{

        },
        deleteUser:{

        }
    }
})

const Query = new GraphQLObjectType({

})

module.exports = new GraphQLSchema({
    query:Query,
    mutation:Mutation
})