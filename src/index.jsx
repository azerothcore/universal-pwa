import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'

import App from "@this/src/client/App/App.jsx";
import config from "@this/conf/conf.js"

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("AUTH_TOKEN")
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const httpLink = createUploadLink({
    uri: config.apiUrl + "/" + config.path
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})


const jsx = (<div>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
</div>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(jsx, rootElement);
} else {
    ReactDOM.render(jsx, rootElement);
}


// switch register to unregister to disable serviceWorker (offline available app)
// serviceWorker.unregister();
serviceWorker.register();