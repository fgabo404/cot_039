<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="wrap blog container-in">
      <div  class="col col-md-8">
         <div class="block">
            <h4>Blog</h4>
            <div class="post" v-for="(item, index) in 6" :key="index">
               <h5><strong> Lorem impsu </strong></h5>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
            </div>
         </div>
      </div>
      <div  class="col col-md-4" style="padding:0 0 0 20px;">
         <div class="block">
            <h4>Feedback</h4>
             <div class="post" v-for="(item, index) in 6" :key="index">
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
//tools
//import * as tools from '@/store/tools.js'
// Default theme

// @ is an alias to /src
//Ui
import PaperHeader from '@/components/Header.vue';

//Components
//import HeaderFooter from '@/website/components/HeaderFooter.vue';

export default {
   name: 'dash-view',
   components: {
      PaperHeader,
      //UiSlider,
   },
   data() {
      return { 
         mainClasses:['black', 'orange', 'green', 'yellow', 'white'],
      }
   },
   created() {
      setTimeout(() => {
         //tools.renderSlider('sliderShowcase')
      }, 500);
   },
}
</script>
   