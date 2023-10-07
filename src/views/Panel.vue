<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="wrap panel container-in">
      <div class="col col-md-6"> 
         <div class="block">
            <h4>Playlist</h4>
            <table>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Albun</th>
                  <th>Time</th>
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
               </tr>
            </table>
         </div>
      </div>
      <div class="col mid col-md-3">
         <div class="block">
            <h4>Ads</h4>
            <table>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Time</th>
               </tr>
               <tr v-for="(row, trIndex) in data.ads" :key="trIndex">
                  <td>{{trIndex+1}}</td>
                  <td>
                     <div>
                        <p>{{row.name}}</p><span>{{row.autor}}</span>
                     </div>
                  </td>
                  <td >{{row.time}} </td>
               </tr>
            </table>
         </div>
      </div>
      <div class="col col-md-3">
         <div class="block">
            <h4>Cola</h4>
            <table>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Time</th>
               </tr>
               <tr v-for="(row, trIndex) in data.playlist" :key="trIndex">
                  <td>{{trIndex+1}}</td>
                  <td>
                     <div>
                        <p>{{row.name}}</p><span>{{row.autor}}</span>
                     </div>
                  </td>
                  <td >{{row.time}} </td>
               </tr>
            </table>
         </div>
      </div>
   </div>
   <div class="player">
    <div class="wrap container-in">
      <div class="song">
         <p>{{song.name}}</p>
         <span>{{song.autor}}</span>
      </div>
      <div class="play">
         <audio id="play" controls>
            <source src="@/assets/songs/testSong.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
         </audio>
      </div>
      <div class="controls">
         <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.8333 33.3333H9.16663L4.16663 38.3333V10C4.16663 7.25 6.41663 5 9.16663 5H30.8333C33.5833 5 35.8333 7.25 35.8333 10V28.3333C35.8333 31.0833 33.5833 33.3333 30.8333 33.3333Z" fill="#FDFDFD"/>
            <path d="M18.3333 16.666H21.6666V25.8327H18.3333V16.666Z" fill="#404040"/>
            <path d="M20 14.1663C20.9205 14.1663 21.6666 13.4201 21.6666 12.4997C21.6666 11.5792 20.9205 10.833 20 10.833C19.0795 10.833 18.3333 11.5792 18.3333 12.4997C18.3333 13.4201 19.0795 14.1663 20 14.1663Z" fill="#404040"/>
         </svg>
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
   method:{
      play(){
         
      }
   }
}
</script>
   