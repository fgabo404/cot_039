<template>
   <Splide :class="'slider-wrap '+ theme"  aria-labelledby="autoplay-example-heading" :options="parameters" :has-track="false">
      <div style="position: relative">
        
         <SplideTrack >
            <SplideSlide v-for="(img, index) in imgs" :key="index">
               <img :src="img.url" alt="">
            </SplideSlide>
         </SplideTrack>
         <div :class="'splide__arrows '+ theme" >
            <button class="splide__arrow splide__arrow--prev "> 
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"> <path fill="#ccc" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"/></g></svg>
            </button>
            <button class="splide__arrow splide__arrow--next">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="#ccc" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"/></g></svg>
            </button>
         </div>
         <div v-if="parameters.progress" class="splide__progress">
            <div :class="'splide__progress__bar '+ theme"></div>
         </div>
      </div>
   </Splide>
</template>

<script>

//tools
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
//import Displayer from "@/components/tools/Displayer.vue";

export default {
   name: "ui-slider",
   components: {
      Splide,
      SplideSlide,
      SplideTrack,
      //Displayer,
   },
   props: {
      imgs: {
         type: Array,
         default: () => [
            {
               url:require('@/assets/placehold500.svg'),
               name:'test'
            },
            {
               url:require('@/assets/placehold500.svg'),
               name:'test'
            }
            
         ],
      },
      theme: {
         type: String,
         default: "dark", //light,dark
      },
      options: {
         type: Object,
         default: () => {
            return {
               pause: false,
               arrows:true,
               rewind: true, 
               autoplay: true, 
               perPage: 1,
               pagination: true,
               gap:'20px',
               url:false, //if imgage is a url or local file
            }
         },
      },
   },
   data() {
      return {
         parameters: {
            pause: false,
            arrows:true,
            rewind: true, 
            autoplay: true, 
            perPage: 1,
            pagination: true,
            gap:'20px'
         }

      };
   },
   created(){
      this.parameters= { ...this.parameters, ...this.options }
   },
   mounted() {
      
   },
   methods: {

   },
};
</script>
