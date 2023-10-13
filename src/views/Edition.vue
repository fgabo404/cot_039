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
               <tr v-for="(row, trIndex) in data.SNG" :key="trIndex">
                  <td>{{trIndex+1}}</td>
                  <td>
                     <div>
                        <p>{{row.name}}</p><span>{{row.autor}}</span>
                     </div>
                  </td>
                  <td >{{row.albun}} </td>
                  <td >{{row.time}} </td>
                  <td v-on:click="deleteSong(row,'SNG', trIndex)">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </td>
               </tr>
            </table>
         </div>
         <div class="block up">
            <input type="file" name="" id="" v-on:change="(event) => fileUp(event, 'SNG' )" />
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
               <tr v-for="(row, trIndex) in data.ADS" :key="trIndex">
                  <td>{{trIndex+1}}</td>
                  <td>
                     <div>
                        <p>{{row.name}}</p><span>{{row.autor}}</span>
                     </div>
                  </td>
                  <td >{{row.time}} </td>
                  
                   <td v-on:click="deleteSong(row,'ADS', trIndex)">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </td>
               </tr>
            </table>
         </div>
         <div class="block up">
            <input type="file" name="" id="" v-on:change="(event) => fileUp(event, 'ADS' )" />
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

import * as tools from '@/store/tools.js'
import { v4 as uuidv4 } from 'uuid';
//AWS
import { API } from "aws-amplify";
import { Storage } from "@aws-amplify/storage"
import { listSongs } from "../graphql/queries";
import { createSongs, deleteSongs } from '../graphql/mutations';

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
            SNG:[
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
            ADS:[
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
      this.data.SNG = []
      this.data.ADS = []
      this.listSong()
   },
   methods:{
      async listSong( ){
         try {
            let pulldata = await API.graphql({
               query: listSongs
            })
           
            pulldata = pulldata.data.listSongs.items
            pulldata.forEach(element => {
               try {
                   this.data[element.key].push(JSON.parse(element.att))
                } catch (error) {
                   element.att = element.att.slice(1, -1);
                   this.data[element.key].push(JSON.parse(element.att))
                }
            });
         } catch (error) {
            console.log(error);
            tools.popUp('error', error)
         }
      },
      async deleteSong( data, key, index ){
         console.log(data, key,index);
         try {
            let pulldata = await API.graphql({
               query: deleteSongs,
               variables:{
                  input:{
                     id:data.id
                  }
               }
            })
            console.log(pulldata);
         } catch (error) {
            console.log(error);
            tools.popUp('error', error)
         }
         this.data[key].splice(index, 1)
      },
      async fileUp(event, key){
         let pushData = {
            id:uuidv4(),
            name:'',
            albun:'desconocido',
            time:'',
            autor:'desconocido',
            url:'',
         }
         let file = event.target.files[0]
         try {
            //set S3 KEY
            pushData.name = file.name.replace('.mp3','')
            pushData.albun = pushData.name
            //check duration
            const reader = new FileReader();
            reader.onload = (event) => {
               const audio = new Audio();
               audio.src = event.target.result;

               audio.addEventListener('loadedmetadata', () => {
                  //this.duration = audio.duration;
                  const minutes = Math.floor(audio.duration / 60);
                  const seconds = Math.floor(audio.duration % 60);
                  pushData.time = `${minutes}:${seconds}`
               });

               audio.load();
            };
            reader.readAsDataURL(file);

            // upload to s3 storage
            const upImg = await Storage.put(pushData.id+'.mp3', file, {
               contentType: 'audio/mpeg'
            });
            pushData.url = await Storage.get(upImg.key);

            //UP Load
            console.log(pushData);
            let pulldata = await API.graphql({
               query: createSongs,
               variables:{
                  input:{
                     id:pushData.id,
                     key: key,
                     att:JSON.stringify(pushData)
                  }
               }
            })
            console.log(pulldata);
            this.data[key].push(pushData)
            
         } catch (error) {
            console.log(error);
            tools.popUp('info', error)
         }
      
      }

   },
   computed: {
      
   },
}
</script>
   