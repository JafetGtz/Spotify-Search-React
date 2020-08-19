import { ApolloClient, createHttpLink, InMemoryCache  } from  '@apollo/client';


const URL = "https://spotify-graphql-server.herokuapp.com/graphql";

const httpLink = createHttpLink({
    uri: URL
})

const client = new ApolloClient({
    connectToDevTools:true,
    cache: new InMemoryCache(),
    link: httpLink
})


export default client;