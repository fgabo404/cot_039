<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <div class="login">
      <div class="container" :class="{'right-panel-active': mode == 'signUp'}">
         <div class="form-container sign-up-container">
            <form action="#">
               <h2> <strong> Crea una Cuenta </strong> </h2>
               <span>Introduce tus datos</span>
               <input type="text" placeholder="User" v-model="user"/>
               <input type="password" placeholder="Password" v-model="pass"/>
               <br>
               <button type="button" v-on:click="signUp( user, pass)">Sign Up</button>
            </form>
         </div>
         <div class="form-container sign-in-container">
            <form action="#">
               <h2> <strong> Inicia Sesion </strong> </h2>
               <span>Introduce tus datos</span>
               <input type="text" placeholder="User" v-model="user" />
               <input type="password" placeholder="Password" v-model="pass" />
               <a v-on:click="forgotPass() " >Forgot your password?</a>
               <button type="button" v-on:click="signIn( user, pass)"> Sign In</button>
            </form>
         </div>
         <div class="overlay-container">
            <div class="overlay">
               <div class="overlay-panel overlay-left">
                  <h1>Ya tienes una cuenta?</h1>
                  <p>Para seguir escuchando con nosotros, inicia sesión con tus datos personales</p>
                  <button class="ghost" id="signIn" v-on:click="mode = 'signIn'">Sign In</button>
               </div>
               <div class="overlay-panel overlay-right">
                  <h1>Nuevo Aqui</h1>
                  <p>Introduce tus datos personales y empieza a escuchar con nosotros</p>
                  <button class="ghost" id="signUp" v-on:click="mode = 'signUp'">Sign Up</button>
               </div>   
            </div>
         </div>
      </div>
   </div>
   <section v-false class="login-wrap absoluteCenterFlex">
      <div class="container-in centerFlex wrap">
         <div class="col-md-6 text" >
            <img src="@/assets/loginCover.png" alt="" srcset="">
         </div>
         <div class="col-md-6 centerFlex wrap form" v-if="mode == 'signIn'">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="60" height="60" rx="30" fill="#FDFDFD"/>
               <path d="M24.4616 23.6842C24.4616 26.8181 26.9465 29.3684 30 29.3684C33.0536 29.3684 35.5385 26.8181 35.5385 23.6842C35.5385 20.5503 33.0536 18 30 18C26.9465 18 24.4616 20.5503 24.4616 23.6842ZM39.8462 42H41.0769V40.7368C41.0769 35.8623 37.2111 31.8947 32.4616 31.8947H27.5385C22.7877 31.8947 18.9231 35.8623 18.9231 40.7368V42H39.8462Z" fill="#404040"/>
            </svg>
            <input type="text" placeholder="User" v-model="user">
            <input type="password" placeholder="Password" v-model="pass">
            
            <a class="btn-g light" v-on:click="logIn(user, pass)">
               Log In
            </a>
            <a style=" color: #fff ;" v-on:click="mode = 'signUp'" >Crear usuario</a>
            
         </div>
         <div class="col-md-6 centerFlex wrap form" v-if="mode == 'signUp'">

            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="60" height="60" rx="30" fill="#FDFDFD"/>
               <path d="M24.4616 23.6842C24.4616 26.8181 26.9465 29.3684 30 29.3684C33.0536 29.3684 35.5385 26.8181 35.5385 23.6842C35.5385 20.5503 33.0536 18 30 18C26.9465 18 24.4616 20.5503 24.4616 23.6842ZM39.8462 42H41.0769V40.7368C41.0769 35.8623 37.2111 31.8947 32.4616 31.8947H27.5385C22.7877 31.8947 18.9231 35.8623 18.9231 40.7368V42H39.8462Z" fill="#404040"/>
            </svg>

            <input type="text" placeholder="User" v-model="user">
            <input type="password" placeholder="Password" v-model="pass">
            
            <a class="btn-g light" v-on:click="signUp(user, pass)">
               Sign Up
            </a>

            <a style=" color: #fff ;" v-on:click="mode = 'signIn'" >Ya tengo usuario</a>
            
         </div>
      </div>
   </section>
</template>

<script>
//AWS
import { Auth, API } from 'aws-amplify';
import { createRecord } from '@/graphql/mutations';
import { getRecord } from '@/graphql/queries';

//tools
import * as tools from '@/store/tools.js'
import Vuex from 'vuex'
// Default theme

// @ is an alias to /src
//Ui
//import UiSlider from '@/components/ui/UiSlider.vue';

//Components
//import HeaderFooter from '@/website/components/HeaderFooter.vue';


export default {
   name: 'login-view',
   components: {
      //HeaderFooter,
      //UiSlider,z
   },
   data() {
      return { 
         //login
         mode:'signIn',
         //let login
         user:'',
         pass:'',
         //users list
         usersList:{
            admin:'admin',
            locutor:'locutor',
            user:'user' 
         }
      }
   },
   created() {
      this.signInSystem()
      setTimeout(() => {
         //tools.renderSlider('sliderShowcase')
      }, 500);
   },
   methods:{
      ...Vuex.mapMutations(['setUser']),
      async signInSystem( ){
         try {
            const user = await Auth.signIn('fmangoo404@gmail.com', '1Jerusalem');
            const session = await Auth.currentUserCredentials();
            console.log(user, session);
            console.clear();
            //this.signIn('admin', 'admin')
         } catch (error) {
            console.log('error signing in', error);
            tools.popUp('info', 'Incorrect user or password')
         }
      },
      async signUp( user, pass ){
         if (!user ) {
            tools.popUp('question', 'Ingresa un usuario')
            return
         }
         if (!pass ) {
            tools.popUp('question', 'Ingresa una contraseña')
            return
         }
         //Data del usuario que se creara
         let pushData = {
            id:user,
            entity:'USR',
            att:{
               user: user,
               pass: pass,
               permits:'lector'
            }
         }
         try {
            //Creaccion de record
            console.log(">>> pushData: ",pushData);
            let pullData = await API.graphql({
               query: createRecord,
               variables:{
                  input:{
                     id:pushData.id,
                     entity: pushData.entity,
                     att:JSON.stringify(pushData.att)
                  }
               }
            })
            console.log(">>> pullData: ", pullData);
            //Seteo de usuario Global
            this.setUser(pushData)
            //Alerta de bienvenida 
            tools.popUp('success', 'Bienvienido', 'Disfruta de nuestra programación diaria')
            //Redireccionamiento al Dashboard
            this.$router.push({path:'/dash'})
         } catch (error) {
            console.log(error);
            tools.popUp('warning', 'Algo salio mal','El usuario que intentas ingresar ya esta resgistrado en nuestro sistema')
         }
      },
      async signIn( user, pass ){
         //Validacion si se ingresaron datos en los inputs correspondientes
         if (!user ) {
            tools.popUp('question', 'Ingresa un usuario')
            return
         }
         if (!pass ) {
            tools.popUp('question', 'Ingresa una contraseña')
            return
         }
         try {
            //Consulta del usuario
            let pullData = await API.graphql({
               query: getRecord,
               variables: { id: user  }
            });
            console.log(">>> pullData: ", pullData);
            pullData = pullData.data.getRecord
            if (!pullData) {
               tools.popUp('warning', 'El usuario que ingresaste no existe', 'Puedes crear una cuenta y disfrutar de nuestra programación diaria ')
               return
            }
            pullData.att = JSON.parse(pullData.att)
            //Validacion de contraseña
            if (pullData.att.pass == pass) { //si coincide
               console.log(pass);
               //Seteo de usuario Global
               this.setUser(pullData)
               //Alerta de bienvenida 
               tools.popUp('info', 'Bienvienido')
               //Redireccionamiento al Dashboard
               this.$router.push({path:'/dash'})
            }else{ // si no coincide
               tools.popUp('warning', 'Contraseña Incorrecta', 'La contraseña que ingresaste NO con coincide con el usuario "'+user+'"')
            }

         } catch (error) {
            console.log(error);
            tools.popUp('error', 'Algo salio mal','Contacta con tu proveedor para mas Información')
         }
      },
      forgotPass(){
         tools.popUp('info', 'Olvidaste tu contraseña?','Contacta con tu proveedor para mas Información')
      }
   }
}
/*
amplify pull --appId d1e6verureqlc4 --envName staging
try {
    const { user } = await Auth.signUp({ username, password });
    console.log(user);
} catch (error) {
    console.log('error signing up:', error);
}

try {
    const user = await Auth.signIn(username, password);
} catch (error) {
    console.log('error signing in', error);
}

try {
    await Auth.signOut();
} catch (error) {
    console.log('error signing out: ', error);
}
*/
</script>