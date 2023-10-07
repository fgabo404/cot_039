<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="container-in edition">
     <div class="col col-md-6"> 
         <div class="block">
            <h4>Playlist</h4>
            <table>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Albun</th>
                  <th>Time</th>
                  <th></th>
               </tr>
               <tr v-for="(row, trIndex) in data.playlist" :key="trIndex">
                  <td>{{trIndex+1}}</td>
                  <td>
                     <div>
                        <p>{{row.name}}</p><span>{{row.autor}}</span>
                     </div>
                  </td>
                  <td >{{row.albun}} </td>
                  <td >{{row.time}} </td>
                  <td >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </td>
               </tr>
            </table>
         </div>
         <div class="block up">
            <input type="file" name="" id="">
         </div>
      </div>
      <div class="col col-md-6">
         <div class="block">
            <h4>Ads</h4>
            <table>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Time</th>
                  <th></th>
               </tr>
               <tr v-for="(row, trIndex) in data.ads" :key="trIndex">
                  <td>{{trIndex+1}}</td>
                  <td>
                     <div>
                        <p>{{row.name}}</p><span>{{row.autor}}</span>
                     </div>
                  </td>
                  <td >{{row.time}} </td>
                  
                   <td >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </td>
               </tr>
            </table>
         </div>
         <div class="block up">
            <input type="file" name="" id="">
         </div>
      </div>
      <div class="col col-md-6">
         
      </div>
      <div class="col col-md-6">
        
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
         data:{
            playlist:[
               {
                  name:'Unforgettable',
                  albun:'Unforgettable',
                  time:'3:12',
                  autor:'Nat King Cold',
               },
               {
                  name:'Living Mice',
                  albun:'C418',
                  time:'2:58',
                  autor:'Nat King Cold',
               },
               {
                  name:'Always',
                  albun:'Favored Nations',
                  time:'3:38',
                  autor:'Favored Nations',
               },
               {
                  name:'No Roots',
                  albun:'No Roots',
                  time:'3:56',
                  autor:'Alice Merton',
               },
               {
                  name:'Unforgettable',
                  albun:'Unforgettable',
                  time:'3:12',
                  autor:'Nat King Cold',
               },
               {
                  name:'Living Mice',
                  albun:'C418',
                  time:'2:58',
                  autor:'Nat King Cold',
               },
               {
                  name:'Always',
                  albun:'Favored Nations',
                  time:'3:38',
                  autor:'Favored Nations',
               },
               {
                  name:'No Roots',
                  albun:'No Roots',
                  time:'3:56',
                  autor:'Alice Merton',
               },
               {
                  name:'Unforgettable',
                  albun:'Unforgettable',
                  time:'3:12',
                  autor:'Nat King Cold',
               },
               {
                  name:'Living Mice',
                  albun:'C418',
                  time:'2:58',
                  autor:'Nat King Cold',
               },
               {
                  name:'Always',
                  albun:'Favored Nations',
                  time:'3:38',
                  autor:'Favored Nations',
               },
               {
                  name:'No Roots',
                  albun:'No Roots',
                  time:'3:56',
                  autor:'Alice Merton',
               },
               {
                  name:'Unforgettable',
                  albun:'Unforgettable',
                  time:'3:12',
                  autor:'Nat King Cold',
               },
               {
                  name:'Living Mice',
                  albun:'C418',
                  time:'2:58',
                  autor:'Nat King Cold',
               },
               {
                  name:'Always',
                  albun:'Favored Nations',
                  time:'3:38',
                  autor:'Favored Nations',
               },
               {
                  name:'No Roots',
                  albun:'No Roots',
                  time:'3:56',
                  autor:'Alice Merton',
               },
            ],
            ads:[
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               },
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               },
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               },
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               },
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               },
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               },
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               },
               {
                  name:'Lorem impsu',
                  autor:'Businnes',
                  time:'3:12',
               }
            ]
         },
         song:{
            name:'Unforgettable',
            albun:'Unforgettable',
            time:'3:12',
            autor:'Nat King Cole',
         }
      }
   },
   created() {
      setTimeout(() => {
         //tools.renderSlider('sliderShowcase')
      }, 500);
   },
}
</script>
   