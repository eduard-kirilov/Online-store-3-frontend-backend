import { graphql } from 'react-apollo'
import { compose } from 'recompose'

import {
    addProductMutation,
    upProductMutation
} from '../../graphql/mutation'
import { productsQuery } from '../../graphql/query'
import AddToCard from './AddToCard'

const addProduct = graphql(addProductMutation, {
    props: ({ mutate }) => ({
        addProduct: product => mutate({
            variables: product,
            refetchQueries: [{ 
                query: productsQuery,
                variables: { name: '', sortName: '', state: false }
            }],
        }),
    }),
})

const upProduct = graphql(upProductMutation, {
    props: ({ mutate }) => ({
        upProduct: product => mutate({
            variables: product,
            refetchQueries: [{ 
                query: productsQuery,
                variables: { name: '', sortName: '', state: false  }
            }],
        }),
    }),
})

const getProducts = graphql(productsQuery, {
    options: ({ name = '', sortName = '', state = false }) => ({
        variables: { name, sortName, state }
    })
})

export default compose(
    getProducts,
    addProduct,
    upProduct,
)(AddToCard)