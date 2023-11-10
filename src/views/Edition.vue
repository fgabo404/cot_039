<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="container-in edition" v-if="data.RAM"> 
      <div class="col col-md-4"> 
         <div class="block">
            <h4>Canciones</h4>
            <div class="input-wrap inputSearch">
               <input type="text" v-on:keyup="(event) => search('SNG', event.target.value)">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ccc" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
            </div>
            <table>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Albun</th>
                  <th>Time</th>
                  <th v-if="user.att.permits != 'lector' "></th>
               </tr>
              <draggable
                  class="dragArea "
                  :list="data.RAM.SNG"
                  :group="{ name: 'song', pull: 'clone', put: false }"
                  :clone="cloneSong"
                  @change="log"
                  item-key="id"
                  tag="tbody"
               >
                  <template #item="{element}">
                     <tr v-on:click="element" >
                        <td>{{data.RAM.SNG.indexOf(element)+1}}</td>
                        <td>
                           <div>
                              <p>{{element.att.name}}</p><span>{{element.att.autor}}</span>
                           </div>
                        </td>
                        <td >{{element.att.albun}} </td>
                        <td >{{element.att.duracion}} </td>
                        <td v-if="user.att.permits != 'lector' " v-on:click="deleteRecord(element, data.SNG.indexOf(element))">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </td>
                     </tr>
                  </template>
               </draggable>
            </table>
         </div>
         <div class="block up">
            <a href="" class="btn-g light"  data-toggle="modal" data-target="#upfile" v-on:click="this.file = { att:{ type:'SNG' } }">
               Subir Cancion
            </a>
         </div>
      </div>
      <div class="col col-md-4">
         <div class="block">
            <h4>Anuncios</h4>
            <div class="input-wrap inputSearch">
               <input type="text" v-on:keyup="(event) => search('ADS', event.target.value)">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ccc" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
            </div>
            <table>
               <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Albun</th>
                  <th>Time</th>
                  <th v-if="user.att.permits != 'lector' "></th>
               </tr>
               <draggable
                  class="dragArea "
                  :list="data.RAM.ADS"
                  :group="{ name: 'song', pull: 'clone', put: false }"
                  :clone="cloneSong"
                  @change="log"
                  item-key="id"
                  tag="tbody"
               >
                  <template #item="{element}">
                     <tr v-on:click="element" >
                        <td>{{data.RAM.ADS.indexOf(element)+1}}</td>
                        <td>
                           <div>
                              <p>{{element.att.name}}</p><span>{{element.att.autor}}</span>
                           </div>
                        </td>
                        <td >{{element.att.albun}} </td>
                        <td >{{element.att.duracion}} </td>
                        
                        <td v-if="user.att.permits != 'lector' " v-on:click="deleteRecord(element, data.ADS.indexOf(element))">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </td>
                     </tr>
                  </template>
               </draggable>
            </table>
         </div>
         <div class="block up">
            <a href="" class="btn-g light"  data-toggle="modal" data-target="#upfile" v-on:click="this.file = { att:{ type:'ADS' } }">
               Subir Anuncio
            </a>
         </div>
      </div>
      <div class="col col-md-4"> 
         <div class="block">
            <h4>Play List</h4>
            <div class="input-wrap inputSearch">
               <input type="text" v-on:keyup="(event) => search('LST', event.target.value)">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ccc" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"/></svg>
            </div>
            <div class="list" v-for="(list, lIndex) in data.RAM.LST" :key="lIndex" >
               <div class="target" >
                  <p class="text">
                     <span v-if="LST != lIndex" data-toggle="collapse" :href="'#list-'+list.id" role="button" aria-expanded="false" aria-controls="collapseExample">
                        {{data.RAM.LST[lIndex].att.name}} 
                        <span class="date" v-if="data.RAM.LST[lIndex].att.date">Programado para: {{data.RAM.LST[lIndex].att.date}} </span>
                     </span>
                     <input style="height: 30px;" v-if="LST == lIndex" v-model="list.att.name">
                     <span v-if="user.att.permits != 'lector' "> 
                        <!-- Date -->
                        <input type="date" v-model="list.att.date" v-on:change="updateList('save', lIndex)" @mouseover="tooltip('date'+lIndex)" :id="'date'+lIndex" >
                        <!-- Edition -->
                        <svg @mouseover="tooltip('edition'+lIndex)" :id="'edition'+lIndex" data-toggle="tooltip" data-placement="top" title="Edita el nombre de la playlist" v-if="LST != lIndex" v-on:click="LST = lIndex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="white" d="M10.733 2.56a1.914 1.914 0 0 1 2.707 2.708L12.707 6l.263.262a1.75 1.75 0 0 1 0 2.475l-1.116 1.116a.5.5 0 0 1-.708-.707l1.117-1.116a.75.75 0 0 0 0-1.061L12 6.708l-5.955 5.954a1.648 1.648 0 0 1-.644.398l-2.743.915a.5.5 0 0 1-.632-.633L2.94 10.6a1.65 1.65 0 0 1 .398-.644l7.395-7.394Z"/></svg>
                        <!-- Save -->
                        <svg @mouseover="tooltip('save'+lIndex)" :id="'save'+lIndex" data-toggle="tooltip" data-placement="top" title="Guarda los ambios" v-if="LST == lIndex" v-on:click="LST = null; updateList('save', lIndex)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M21 7v12q0 .825-.588 1.413T19 21H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h12l4 4Zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6v4Z"/></svg>
                        <!-- Delete -->
                        <svg @mouseover="tooltip('delete'+lIndex)" :id="'delete'+lIndex" data-toggle="tooltip" data-placement="top" title="Tooltip on top" v-on:click="deleteRecord(list,lIndex )" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                     </span>
                  </p>
               </div>
               <div class="collapse" :id="'list-'+list.id">
                  <div class="wrap">
                     <table>
                        <tr>
                           <th>#</th>
                           <th>Title</th>
                           <th>Albun</th>
                           <th>Time</th>
                           <th></th>
                        </tr>
                        <draggable
                           class="dragArea "
                           :list="data.RAM.LST[lIndex].att.list"
                           group="song"
                           @change="log($event, lIndex)"
                           item-key="id"
                           tag="tbody"
                        >
                           <template #item="{element}">
                              <tr v-on:click="element" >
                              <td>{{data.RAM.LST[lIndex].att.list.indexOf(element)+1}}</td>
                              <td>
                                 <div>
                                    <p>{{element.att.name}}</p><span>{{element.att.autor}}</span>
                                 </div>
                              </td>
                              <td >{{element.att.albun}} </td>
                              <td >{{element.att.duracion}} </td>
                              <td v-on:click="data.RAM.LST[lIndex].att.list.splice(data.RAM.LST[lIndex].att.list.indexOf(element), 1); updateList('save', lIndex) ">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                              </td>
                           </tr>
                           </template>
                        </draggable>
                     </table>
                  </div>
               </div>
            </div>

         </div>
         <div class="block up">
            <a class="btn-g light" v-on:click="updateList('new')">
               Añadir play list
            </a>
         </div>
      </div>
   </div>
   
   <div class="modal fade" id="upfile" tabindex="-1" aria-labelledby="upfileLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
         <div class="modal-content">
            <div class="input-wrap">
               <label for="">File</label>
               <input type="file" name="" id="" v-on:change="(event) => takeFile(event) "/>
            </div>
            <div class="input-wrap">
               <label for="">Name</label>
               <input type="text" v-model="file.att.name">
            </div>
            <div class="input-wrap">
               <label for="">Genero</label>
               <select v-model="file.att.genero">
                  <option value="Pop">Pop</option>
                  <option value="Rock">Rock</option>
                  <option value="Hip-hop">Hip Hop</option>
                  <option value="Electronica">Electrónica</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Clasica">Música Clásica</option>
                  <option value="Country">Country</option>
                  <option value="Reggae">Reggae</option>
                  <option value="Metal">Metal</option>
                  <option value="Rap">Rap</option>
                  <option value="Blues">Blues</option>
                  <option value="Folk">Folk</option>
                  <option value="Reggaeton">Reggaetón</option>
                  <option value="Punk">Punk</option>
                  <option value="Disco">Disco</option>
                  <option value="Funk">Funk</option>
                  <option value="Techno">Techno</option>
                  <option value="Salsa">Salsa</option>
                  <option value="Cumbia">Cumbia</option>
                  <option value="Bachata">Bachata</option>
               </select>
            </div>
            <div class="input-wrap">
               <label for="">Artista</label>
               <input type="text" v-model="file.att.artista">
            </div>
            <div class="input-wrap">
               <label for="">Albun</label>
               <input type="text" v-model="file.att.albun">
            </div>
            <div class="input-wrap">
               <label for="">Duracion</label>
               <input type="text" v-model="file.att.duracion" disabled>
            </div>
            <a v-on:click="fileUp()" class="btn-g light" data-dismiss="modal" >
               Subir
            </a>
         </div>
      </div>
   </div>
</template>

<script>
//tool
import * as tools from '@/store/tools.js'
import { v4 as uuidv4 } from 'uuid';
import Vuex from 'vuex'

//AWS
import { API } from "aws-amplify";
import { Storage } from "@aws-amplify/storage"
import { listRecords } from "../graphql/queries";
import { createRecord, deleteRecord, updateRecord } from '../graphql/mutations';

// @ is an alias to /src
//Ui
import PaperHeader from '@/components/Header.vue';
import draggable from "vuedraggable";
//Components
//import HeaderFooter from '@/website/components/HeaderFooter.vue';

export default {
   name: 'dash-view',
   components: {
      PaperHeader,
      draggable,
      //UiSlider,
   },
   data() {
      return { 
         data:{
            SNG:[],
            ADS:[ ],
            LST:[],
         },
         LST: null,
         file:{
            att:{}
         },
      }
   },
   created() {
      this.listData()
   }, 
   methods:{
      //tools
      tooltip(id){
         // eslint-disable-next-line
         $('#'+id).tooltip('toggle')
      },
      search(list, value){
         let data = this.data[list]
         let result = []
         try {
            if (value=='') {
               this.data.RAM[list] = this.data[list] 
               return
            }
            for (let i = 0; i < data.length; i++) {
               const att = data[i].att;
               for (const key in att) {
                  if ( typeof att[key] == 'string' && key != 'url'  && att[key].toLowerCase().includes(value.toLowerCase())) {
                     result.push(data[i])
                     break;
                  }
               }
            }
            console.log(result);
            this.data.RAM[list] = result
         } catch (error) {
            console.log(error);
         }
      },
      //Data Bind
      async listData( ){
         try {
            let pulldata = await API.graphql({
               query: listRecords
            })
            pulldata = pulldata.data.listRecords.items
            console.log('pulldata: ',pulldata);
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
            this.data.RAM = {...this.data}
         } catch (error) {
            console.log(error);
            tools.popUp('error', error)
         }
         console.log(this.data);
      },
      async deleteRecord( data, index ){
         console.log(data,index);
         try {
            let pulldata = await API.graphql({
               query: deleteRecord,
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
         if (this.data.entity == 'SNG') {
            this.data[data.att.type].splice(index, 1)
         }else{
            this.data[data.entity].splice(index, 1)
         }
      },
      //Toma del archivo y asignacion de attributos (att)
      takeFile(event){
         let file = event.target.files[0]
         this.file.file = file
         this.file.att.name = file.name.replace('.mp3','')
         //check duration
         const reader = new FileReader();
         reader.onload = (event) => {
            const audio = new Audio();
            audio.src = event.target.result;

            audio.addEventListener('loadedmetadata', () => {
               //this.duration = audio.duration;
               const minutes = Math.floor(audio.duration / 60);
               const seconds = Math.floor(audio.duration % 60);
               this.file.att.duracion = `${minutes}:${seconds}`
            });

            audio.load();
         };
         reader.readAsDataURL(file);
      }, 
      //Upload de los archivos
      async fileUp(){
         let pushData = {
            id:uuidv4(),
            entity:'SNG',
            att:{
               ...this.file.att,
            }
         }
         try {
            // upload to s3 storage
            const upImg = await Storage.put(pushData.id+'.mp3', this.file.file, {
               contentType: 'audio/mpeg'
            });
            pushData.att.url = await Storage.get(upImg.key);

            //UP Load
            console.log(">>> pushData:",pushData);
            let pulldata = await API.graphql({
               query: createRecord,
               variables:{
                  input:{
                     id:pushData.id,
                     entity: pushData.entity,
                     att:JSON.stringify(pushData.att)
                  }
               }
            })
            console.log(">>> pulldata: ", pulldata);
            this.data[pushData.att.type].push(pushData)
            
         } catch (error) {
            console.log(error);
            tools.popUp('info', error)
         }
      
      },
      //Upload Lista
      async updateList(action, index){
         let pushData = { }
         if (action =='new') {
            pushData = {
               id:uuidv4(),
               entity:'LST',
               att:{    
                  name:'new',
                  list:[]
               }
            }
            try {
               // upload to s3 storage
               let pulldata = await API.graphql({
                  query: createRecord,
                  variables:{
                     input:{
                        id:pushData.id,
                        entity: pushData.entity,
                        att:JSON.stringify(pushData.att)
                     }
                  }
               })
               this.data.LST.push(pushData)
               console.log(">>> pulldata: ", pulldata, pushData);
            } catch (error) {
               console.log(error);
               tools.popUp('info', error)
            }
         }else{
            pushData = this.data.LST[index]
            try {
               // upload to s3 storage
               let pulldata = await API.graphql({
                  query: updateRecord,
                  variables:{
                     input:{
                        id:pushData.id,
                        att:JSON.stringify(pushData.att)
                     }
                  }
               })
               console.log(">>> pulldata: ", pulldata, pushData);
            } catch (error) {
               console.log(error);
               tools.popUp('info', error)
            }
         }
      
      },
      //Dragg in drop
      log: function(evt,index) {
         if (index != undefined) {
            this.updateList('edit',index,evt )
         }
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
      ...Vuex.mapState(['user']),
      dragOptions() {
         return {
            animation: 200,
            group: "description",
            disabled: false,
            ghostClass: "ghost"
         };
      }
   },
   watch:(
      () => data.LST,
         (newValue, oldValue) => {
            console.log(newValue, oldValue);
         },
         { deep: true }
      )
  }
</script>
   