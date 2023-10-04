<template>
   <img  src="../assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <section class="landing-wrap absoluteCenterFlex">
      <div class="container-in centerFlex wrap">
         <div class="col-md-12 header">
            <img class="logo" src="../assets/logoColor.svg" alt="" srcset="">
            <a class="btn-g" v-if="withScreen > 767" href="mailto:fmangoo404@gmail.com">
               Contact Us
            </a>
         </div>
         <div class="col-md-6 text" >
            <h1>Website under construction</h1>
            <p>
               <strong>Design and Development of Digital Products.</strong> <br>
               We create innovative and easy-to-use digital products such as websites, mobile applications and software. 
            </p>
            <a class="btn-g" v-if="withScreen < 767" href="mailto:fmangoo404@gmail.com">
               Contact Us
            </a>
         </div>
         <div class="col-md-6 centerFlex wrap">
            <img src="./assets/landing_draw_animated.svg" />
         </div>
      </div>
   </section>
</template>

<script> 
// @ is an alias to /src
//import HeaderFooter from '@/website/components/HeaderFooter.vue'; // @ is an alias to /src

export default {
   name: 'landing-page',
   components:{
   },
   data() {
      return {
         withScreen:1200
      }
   },
   created() {
      this.withScreen = screen.width
   },
}
</script>
