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
                <draggable
                  class="dragArea "
                  :list="data.SNG"
                  :group="{ name: 'song', pull: 'clone', put: false }"
                  :clone="cloneSong"
                  @change="log"
                  item-key="id"
                  tag="tbody"
               >
                  <template #item="{element}">
                     <tr v-on:click="element" >
                        <td>{{data.SNG.indexOf(element)+1}}</td>
                        <td>
                           <div>
                              <p>{{element.name}}</p><span>{{element.autor}}</span>
                           </div>
                        </td>
                        <td >{{element.albun}} </td>
                        <td >{{element.time}} </td>
                     </tr>
                  </template>
               </draggable>
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
               <draggable
                  class="dragArea "
                  :list="data.ADS"
                  :group="{ name: 'song', pull: 'clone', put: false }"
                  :clone="cloneSong"
                  @change="log"
                  item-key="id"
                  tag="tbody"
               >
                  <template #item="{element}">
                     <tr v-on:click="element" >
                        <td>{{data.ADS.indexOf(element)+1}}</td>
                        <td>
                           <div>
                              <p>{{element.name}}</p><span>{{element.autor}}</span>
                           </div>
                        </td>
                        <td >{{element.time}} </td>
                     </tr>
                  </template>
               </draggable>
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
               <draggable
                  class="dragArea "
                  :list="data.COL"
                  group="song"
                  @change="log"
                  item-key="id"
                  tag="tbody"
               >
                  <template #item="{element}">
                     <tr v-on:click="element" >
                        <td>{{data.COL.indexOf(element)+1}}</td>
                        <td>
                           <div>
                              <p>{{element.name}}</p><span>{{element.autor}}</span>
                           </div>
                        </td>
                        <td >{{element.time}} </td>
                     </tr>
                  </template>
               </draggable>
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
         <audio id="play" controls @ended="playSong()">
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

import * as tools from '@/store/tools.js'
import { API, Storage } from "aws-amplify";
import { listSongs } from "../graphql/queries";

// @ is an alias to /src
//Ui
import draggable from "vuedraggable";
import PaperHeader from '@/components/Header.vue';

//Components
//import HeaderFooter from '@/website/components/HeaderFooter.vue';


export default {
   name: 'dash-view',
   components: {
      PaperHeader,
      draggable,
   },
   data() {
      return { 
         data:{
            SNG:[],
            ADS:[],
            COL:[
               {
                  name:'Unforgettable',
                  albun:'Unforgettable',
                  time:'3:12',
                  autor:'Nat King Cole',
               }
            ]
         },
         song:{
           
         },
         play: false
      }
   },
   created() {
      this.data.SNG = []
      this.data.ADS = []
      this.data.COL = []
      this.listSong()
   },
   methods:{
      async playSong(first){
         try {
            console.log('playSong');
            if (!first) {
               console.log('no es primera');
               this.data.COL.shift()
            }
            const url = await Storage.get( this.data.COL[0].id+".mp3", {
               level: "public"
            });
       
            this.song = this.data.COL[0]
            const audioElement = document.getElementById("play");
            audioElement.childNodes[0].src = url
            audioElement.load();
            audioElement.play();
            
         } catch (error) {
            console.log(error);
         }
         //if (audioElement.paused) {
         //} else {
         //   audioElement.pause();
         //}
      },
      async listSong( ){
         try {
            let pulldata = await API.graphql({
               query: listSongs
            })
            pulldata = pulldata.data.listSongs.items
            pulldata.forEach(element => {
               this.data[element.key].push(JSON.parse(element.att))
            });
         } catch (error) {
            console.log(error);
            tools.popUp('info', error)
         }
      },
      //Drag
      log: function(evt) {
         console.log(evt);
      },
      cloneSong({ id }) {
         let data = null
         data = this.data.SNG.find(item => item.id === id)
         if (!data) {
            data = this.data.ADS.find(item => item.id === id)
         }
         return data
      }
   },
   computed:{
      dragOptions() {
         return {
            animation: 200,
            group: "description",
            disabled: false,
            ghostClass: "ghost"
         };
      }
   },
   watch:{
      data:{
         handler(newItems) {
            // This function will be called whenever 'items' changes.
            if (newItems.COL.length == 1 && this.play == false) {
               this.playSong(true)
               this.play = true
            }
            if (newItems.COL.length == 0) {
               this.play = false
            }
         },
         deep: true,
      }
   }
}
</script>
   