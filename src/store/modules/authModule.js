export default {
    state: {
        authModalShow:false,
        userData:null,
        isLoggedIn:null
      },
      getters: {
      },
      mutations: {
        IS_LOGGED_IN(state){
            state.isLoggedIn = true;
        },
        SHOW_OR_CLOSE_MODAL(state,value){
            state.authModalShow = value; 
        },
        SET_USER_DATA(state,value){
          state.userData = value;
        }
      },
      actions: {
        async authorizationAction(context,value){
          try{
            const response = await fetch('https://dummyjson.com/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                username: 'rshawe2',
                password: 'OWsTbMUgFc',
              })
            })

            const user = await response.json();
            context.commit("SET_USER_DATA",user);
            context.commit("IS_LOGGED_IN");
            context.commit("SHOW_OR_CLOSE_MODAL",false);
            localStorage.setItem('user', JSON.stringify(user))
          }catch(err){
            throw new Error(err)
          }
        },
        async getCurrentUser(context){
         const userDataFromLocal = JSON.parse(localStorage.getItem("user")) ?? null;
         if(!userDataFromLocal) return;

         context.commit("SET_USER_DATA",userDataFromLocal);
         context.commit("IS_LOGGED_IN",true)
        }
    },
      modules: {
      }
 
}