<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="wrap panel container-in">
      <div class="col col-md-3"> 
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
                              <p>{{element.att.name}}</p><span>{{element.att.artista}}</span>
                           </div>
                        </td>
                        <td >{{element.att.albun}} </td>
                        <td >{{element.att.duracion}} </td>
                     </tr>
                  </template>
               </draggable>
            </table>
         </div>
      </div>
      <div style=" padding: 0 10px 0 20px;" class="col col-md-3">
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
                               <p>{{element.att.name}}</p><span>{{element.att.artista}}</span>
                           </div>
                        </td>
                        <td >{{element.att.duracion}} </td>
                     </tr>
                  </template>
               </draggable>
            </table>
         </div>
      </div>
      <div style=" padding: 0 20px 0 10px;" class="col col-md-3">
         <div class="block">
            <h4>Play List</h4>
               <draggable
                  class="dragArea wrap"
                  style="width: 100%;"
               
                  :list="data.LST"
                  :group="{ name: 'song', pull: 'clone', put: false }"
                  :clone="cloneSong"
                  @change="log"
                  item-key="id"
               >
                  <template #item="{element}">
                     <div class="list" >
                        <p class="target"  data-toggle="collapse" :href="'#list-'+element.id" role="button" aria-expanded="false" aria-controls="collapseExample">{{data.LST.indexOf(element)+1}}  {{element.att.name}}  </p>
                        <div class="collapse" :id="'list-'+element.id">
                           <div class="wrap">
                              <table >
                                 <tr>
                                    <th>Title</th>
                                    <th>Time</th>
                                 </tr>
                                 <tr  v-for="(row, index) in element.att.list" :key="index" >
                                    <td>
                                       <div>
                                          <p>{{row.att.name}}</p><span>{{row.att.autor}}</span>
                                       </div>
                                    </td>
                                    <td >{{row.att.duracion}} </td>
                                 </tr>
                              </table>
                           </div>
                        </div>
                     </div>
                  </template>
               </draggable>
            <table>
            </table>
         </div>
      </div>
      <div class="col col-md-3">
         <div class="block">
            <h4>Cola</h4>
            <table>
               <tr>
                  <th>Title</th>
                  <th>Albun</th>
                  <th>Time</th>
               </tr>
                <tr v-if="song" style="color:#8cff1c;">
                  <td>
                     <div>
                        <p>{{song.att.name}}</p><span>{{song.att.artista}}</span>
                     </div>
                  </td>
                  <td >{{song.att.albun}} </td>
                  <td >{{song.att.duracion}} </td>
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
                        <td>
                           <div>
                              <p>{{element.att.name}}</p><span>{{element.att.autor}}</span>
                           </div>
                        </td>
                        <td >{{element.att.albun}} </td>
                        <td >{{element.att.duracion}} </td>
                     </tr>
                  </template>
               </draggable>
            </table>
         </div>
      </div>
   </div>
   <div class="player"> 
    <div class="wrap container-in">
      <div class="song" v-if="song">
         <p>{{song.att.name}}</p>
         <span>{{song.att.autor}}</span>
      </div>
      <div class="play">
         <audio id="play" controls @ended="song = null; playSong()">
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
import { listRecords } from "../graphql/queries";

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
            LST:[],
            COL:[  ]
         },
         song:null,
         play: false
      }
   },
   created() {
      this.listSong()
   },
   methods:{
      async playSong(first){
         if (this.data.COL.length == 0) {
            return
         }
         try {
            console.log('playSong');
            this.song = {...this.data.COL[0]}
            this.data.COL.shift()
            if (!first) {
               console.log('no es primera');
            }
            const url = await Storage.get( this.song.id+".mp3", {
               level: "public"
            });
       
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
               query: listRecords
            })
            pulldata = pulldata.data.listRecords.items
            console.log(pulldata);
            pulldata.forEach(element => {
               switch (element.entity) {
                 case 'SNG':
                     element.att = JSON.parse(element.att)
                     this.data[element.att.type].push(element)
                  break;
                  case 'LST':
                     element.att = JSON.parse(element.att)
                     this.data[element.entity].push(element)
                  break;
               }
            });
         } catch (error) {
            console.log(error);
            tools.popUp('info', error)
         }
      },
      //Drag
      log: function(evt) {
         console.log(evt);
         if (evt.added && evt.added.element.entity == 'LST') {
            let index = this.data.COL.indexOf(evt.added.element)
            this.data.COL.splice(index,1 , ...evt.added.element.att.list)
            console.log(index);
         }
      },
      cloneSong({ id, entity, att }) {
         let data = null
         console.log(id, entity,att);
          switch (entity) {
            case 'SNG':
               data = this.data[att.type].find(item => item.id === id)
               console.log(data);
               return data
            break;
            case 'LST':
               data = this.data.LST.find(item => item.id === id)
               console.log(data);
               return data
            break;
         }
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
            if (newItems.COL.length == 1 && this.play == false && !this.song ) {
               setTimeout(() => {
                  this.playSong(true)
                  this.play = true
               }, 500);
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
   