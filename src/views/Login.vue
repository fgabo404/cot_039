<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <section class="login-wrap absoluteCenterFlex">
      <div class="container-in centerFlex wrap">
         <div class="col-md-6 text" >
            <img src="@/assets/loginCover.png" alt="" srcset="">
         </div>
         <div class="col-md-6 centerFlex wrap form">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="60" height="60" rx="30" fill="#FDFDFD"/>
               <path d="M24.4616 23.6842C24.4616 26.8181 26.9465 29.3684 30 29.3684C33.0536 29.3684 35.5385 26.8181 35.5385 23.6842C35.5385 20.5503 33.0536 18 30 18C26.9465 18 24.4616 20.5503 24.4616 23.6842ZM39.8462 42H41.0769V40.7368C41.0769 35.8623 37.2111 31.8947 32.4616 31.8947H27.5385C22.7877 31.8947 18.9231 35.8623 18.9231 40.7368V42H39.8462Z" fill="#404040"/>
            </svg>
            <input type="text" placeholder="User" v-model="user">
            <input type="password" placeholder="Password" v-model="pass">
            <a class="btn-g light" v-on:click="logIn(user, pass)">
               Log In
            </a>
         </div>
      </div>
   </section>
</template>

<script>
//tools
import * as tools from '@/store/tools.js'
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
      setTimeout(() => {
         //tools.renderSlider('sliderShowcase')
      }, 500);
   },
   methods:{
      logIn( user, pass ){
         if ( this.usersList[user] && this.usersList[user] == pass) {
            this.$router.push({path:'/dash'})
         }else{
            tools.popUp('info', 'Incorrect user or password')
         }
      }
   }
}
</script>
   