<template>
   <header-footer ref="headerFoter" :mainClasses="mainClasses">
      <section id="showcase" class="showcase black">
         <svg class="bg" width="1000" height="900" viewBox="0 0 1000 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H1000L903.536 471.108C875.792 606.603 861.92 674.351 815.584 719.425C769.248 764.499 701.143 776.496 564.933 800.489L0 900V0Z" fill="#fff"/>
         </svg>   
         <div class="container-in centerFlex wrap">
            <div class="col-md-6 ">
               <h1>Design and Development of Digital Products.</h1>
               <a class="btn-g">
                  Contact Us
               </a>
               <div class="pagination" id="pagination">
                  <div :class="{'point' : true, 'active':index == 0 }" v-on:click="$refs.headerFoter.restartLoopClass(index)" :id="'point-'+item" v-for="(item, index) in mainClasses" :key="index">
                  </div>
               </div>
            </div>
            <div class="col-md-6 centerFlex">         
               <UiSlider v-if="false" :options="{ arrows:false, progress:false }" :imgs="imgs" />
               <img src="../assets/website/showcase_1.svg" alt="">
            </div>
         </div>
      </section>
      <section class="services">
         <div class="container-in centerFlex wrap">
            <div class="col-md-6 centerFlex">
               <img src="../assets/website/services.svg" alt="">
            </div>
            <div class="col-md-6 centerFlex wrap list">
               <h3 class="col-12">Our Best Services For You</h3>
               <div class="col-md-6 block">
                  <div class="inner">
                     <div class="wrap">
                     </div>
                     <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet"
                           viewBox="0 0 24 24">
                           <path fill="white"
                              d="m6.91 5.5l2.3 2.29l-1.42 1.42l-2.29-2.3l-2.29 2.3l-1.42-1.42l2.3-2.29l-2.3-2.29l1.42-1.42l2.29 2.3l2.29-2.3l1.42 1.42m13 13l-1.42-1.42l-2.29 2.3l-2.29-2.3l-1.42 1.42l2.3 2.29l-2.3 2.29l1.42 1.42l2.29-2.3l2.29 2.3l1.42-1.42l-2.3-2.29m.49-11.67L17.18 11L15.6 9.73l1.17-1.5a9.08 9.08 0 0 0-6.66 5.62A4.5 4.5 0 1 1 7.5 13a4 4 0 0 1 .78.08a11.27 11.27 0 0 1 8.15-6.82L15 5.18l1.27-1.58M10 17.5A2.5 2.5 0 1 0 7.5 20a2.5 2.5 0 0 0 2.5-2.5Z" />
                        </svg>
                     </div>
                     <h4>Strategies and Marketing group</h4>

                     <p>We help our clients to expand in the digital environment.</p>
                  </div>
               </div>
               <div class="col-md-6 block">
                  <div class="inner">
                     <div class="wrap">
                     </div>
                     <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet"
                           viewBox="0 0 24 24">
                           <path fill="white"
                              d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v5.53a5.72 5.72 0 0 0-2-1.19V8H4v11h8.08c.12.72.37 1.39.72 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4V4c0-1.1.9-2 2-2m4 4V4h-4v2h4m3.5 13H19v-4h2v4h1.5L20 22l-2.5-3m-.5-2v4h-2v-4h-1.5l2.5-3l2.5 3H17Z" />
                        </svg>
                     </div>
                     <h4>Digital Business Control</h4>
                     <p>Centralized platform with all the tools you need to manage your business</p>
                  </div>
               </div>
               <div class="col-md-6 block">
                  <div class="inner">
                     <div class="wrap">
                     </div>
                     <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet"
                           viewBox="0 0 16 16">
                           <path fill="white"
                              d="M7 10.973a4.474 4.474 0 0 1-1.016-.235c.01-.236.016-.482.016-.738v-.337c.31.148.647.251 1 .302V7.5A1.5 1.5 0 0 1 8.5 6h2.465a3.5 3.5 0 0 0-5.088-2.602a3.195 3.195 0 0 0-.386-.926A4.5 4.5 0 0 1 11.973 6H13.5A1.5 1.5 0 0 1 15 7.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 7 12.5v-1.527ZM11.973 7A4.502 4.502 0 0 1 8 10.973V12.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-1.527Zm-1.008 0H8.5a.5.5 0 0 0-.5.5v2.465A3.502 3.502 0 0 0 10.965 7Zm-6.17.561c-.105-.386-.275-.773-.567-1.07C4.7 6.044 5 5.332 5 4.5c0-.697-.141-1.176-.396-1.559a2.749 2.749 0 0 0-.39-.453a9.182 9.182 0 0 0-.17-.16c-.061-.057-.117-.109-.19-.182c-.15-.15-.167-.27-.167-.333a.33.33 0 0 1 .017-.103a.5.5 0 0 0-.731-.626l-.002.001l-.003.002l-.009.006l-.03.02a5.487 5.487 0 0 0-.433.343c-.25.221-.576.548-.807.938a4.73 4.73 0 0 0-.482 1.032C1.087 3.785 1 4.174 1 4.5c0 .832.3 1.543.772 1.992c-.292.296-.462.683-.567 1.07C1 8.314 1 9.244 1 9.963V10c0 2.058.385 3.28.821 4.007c.219.364.447.599.638.747a1.645 1.645 0 0 0 .33.2A.8.8 0 0 0 3 15c.084 0 .211-.046.211-.046a1.645 1.645 0 0 0 .33-.2c.19-.148.42-.383.638-.747C4.615 13.281 5 12.058 5 10v-.036c0-.72 0-1.649-.205-2.403Zm-2.308-.37C2.6 7.077 2.751 7 3 7c.25 0 .4.078.513.19c.126.127.235.333.317.634C3.996 8.435 4 9.237 4 10c0 1.942-.365 2.97-.679 3.493c-.12.2-.233.329-.321.41a1.856 1.856 0 0 1-.321-.41C2.365 12.969 2 11.942 2 10c0-.763.004-1.565.17-2.176c.082-.3.191-.507.317-.634ZM3 6c-.385 0-1-.428-1-1.5c0-.173.052-.447.156-.757a3.725 3.725 0 0 1 .389-.833c.087-.147.2-.29.322-.421c.069.122.16.245.28.365c.073.073.168.161.249.237l.124.116c.105.102.186.191.251.29c.12.179.229.45.229 1.003C4 5.572 3.385 6 3 6Z" />
                        </svg>
                     </div>
                     <h4>Creative Design</h4>
                     <p>we design more than a product, we create pleasant experiences.</p>
                  </div>
               </div>
               <div class="col-md-6 block">
                  <div class="inner">
                     <div class="wrap">
                     </div>
                     <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet"
                           viewBox="0 0 32 32">
                           <path fill="white"
                              d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM18 28h-4v-4h4Zm10-6H4V6h24Z" />
                        </svg>
                     </div>
                     <h4>Web Applications</h4>
                     <p>Development of digital products that help you meet your business objectives. .</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section class="about">
         <div class="container-in">
         </div>
      </section>
      <section class="contact">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
         <div class="container-in">
         </div>
      </section>
      <section class="tech">
         <div class="container-min wrap">
            <div class="col-md-3">
               <img src="../assets/logoColor.svg" alt="">
            </div>
            <div class="col-md-3">
               <img src="../assets/logoColor.svg" alt="">
            </div>
            <div class="col-md-3">
               <img src="../assets/logoColor.svg" alt="">
            </div>
            <div class="col-md-3">
               <img src="../assets/logoColor.svg" alt="">
            </div>
         </div>
         <div class="container-in"></div>
      </section>
   </header-footer>
</template>

<script>
//tools
//import * as tools from '@/store/tools.js'
// Default theme


// @ is an alias to /src
//Ui
import UiSlider from '@/components/ui/UiSlider.vue';

//Components
import HeaderFooter from '@/website/components/HeaderFooter.vue';


export default {
   name: 'web-site',
   components: {
      HeaderFooter,
      UiSlider,
   },
   data() {
      return { 
         mainClasses:['black', 'orange', 'green', 'yellow', 'white'],
         imgs:[
            { url:require('@/website/assets/home/draw-responsive.svg') },
            { url:require('@/website/assets/home/draw-marketing.svg') },
            { url:require('@/website/assets/home/draw-design.svg') }
         ]
      }
   },
   created() {
      setTimeout(() => {
         //tools.renderSlider('sliderShowcase')
      }, 500);
   },
}
</script>
   