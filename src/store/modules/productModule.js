export default {
    state: {
        productsList :[],
        productInfoDialog:false
      },
      getters: {
      },
      mutations: {
        SER_PRODUCTS(state,value){
          state.productsList = value;
        },
        SHOW_OR_CLOSE_FULL_INFO(state,value){
          state.productInfoDialog = value;
        }
      },
      actions: {
        async getProducts(context){
          const response =  await fetch("https://dummyjson.com/products")
          let products = await response.json();
          context.commit("SER_PRODUCTS",products.products)
        }
      },
      modules: {
      }
}