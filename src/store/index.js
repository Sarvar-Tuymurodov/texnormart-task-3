import { createStore } from 'vuex'
import productModule from './modules/productModule'
import authModule from './modules/authModule'

export default createStore({
    modules: {productModule,authModule} 
})
