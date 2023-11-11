<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="wrap blog container-in">
      <div  class="col col-md-8">
         <div class="block">
            <h4>Blog</h4>
            <div class="post" v-for="(item, index) in data.BLO" :key="index">
               <h5><strong> {{ item.att.header }} </strong></h5>
               <p>
                  {{ item.att.body }}
               </p>
               <span> by: {{item.att.by}}</span>
            <svg v-if="user.att.permits != 'lector'" v-on:click="deleteRecord(item,index )" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </div>
         </div>
         <div class="block up">
               <a href="" class="btn-g light"  data-toggle="modal" data-target="#upPost" v-on:click="post={ entity:'BLO', att:{ } }">
                  Postear Blog
               </a>
         </div>
      </div>
      <div  class="col col-md-4" style="padding:0 0 0 20px;">
         <div class="block">
            <h4>Feedback</h4>
             <div class="post" v-for="(item, index) in data.FED" :key="index">
               <h5><strong> {{ item.att.header }} </strong></h5>
               <p>
                  {{ item.att.body }}
               </p>
               <span> by: {{item.att.by}}</span>
               <svg v-if="user.att.permits != 'lector'" v-on:click="deleteRecord(item,index )" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
            </div>
         </div>
         <div class="block up">
            <a href="" class="btn-g light"  data-toggle="modal" data-target="#upPost" v-on:click="post={ entity:'FED', att:{ } }">
               Subir Feedback
            </a>
         </div>
      </div>
   </div>
   <div v-if="post" class="modal fade" id="upPost" tabindex="-1" aria-labelledby="upfileLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
         <div class="modal-content">
            <div class="input-wrap">
               <label for="">Encabezado</label>
               <input type="text" v-model="post.att.header">
            </div> 
            <div class="input-wrap">
               <label for="">Cuerpo </label>
               <textarea name="" id="" cols="30" rows="10" v-model="post.att.body"></textarea>
            </div>
            <a v-on:click="publishPost()" class="btn-g light" data-dismiss="modal" >
               Publicar
            </a>
         </div>
      </div>
   </div>
</template>

<script>
//tools
import * as tools from '@/store/tools.js'
import { v4 as uuidv4 } from 'uuid';
import Vuex from 'vuex'
// Default theme
//AWS
import { API } from "aws-amplify";
import { listRecords } from "../graphql/queries";
import { createRecord, deleteRecord } from '../graphql/mutations';

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
            FED:[],
            BLO:[]
         },
         post:null,
      }
   },
   created() {
      this.listPost()
      setTimeout(() => {
      }, 500);
   },
   methods:{
      async listPost( ){
         try {
            let pulldata = await API.graphql({
               query: listRecords
            })
            pulldata = pulldata.data.listRecords.items
            console.log('pulldata:', pulldata);
            pulldata.forEach(element => {
               switch (element.entity) {
                 case 'BLO':
                    element.att = JSON.parse(element.att)
                    this.data[element.entity].push(element)
                  break;
                  case 'FED':
                     element.att = JSON.parse(element.att)
                     this.data[element.entity].push(element)
                  break;
               }
            });
            console.log('My Data: ', this.data );
         } catch (error) {
            console.log(error);
            tools.popUp('info', error)
         }
      },
      async publishPost(){
         console.log(this.post);
         let pushData = {
            id:uuidv4(),
            entity:this.post.entity,
            att:{
               ...this.post.att,
               by: this.user.id
            }
         }

         try {
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
            if (this.data[pushData.att.type]) {
               this.data[pushData.att.type].push(pushData)
            } else {
               this.data[pushData.entity].push(pushData)
            }
            
         } catch (error) {
            console.log(error);
            tools.popUp('info', error)
         }
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
         this.data[data.entity].splice(index, 1)
      },
   } ,
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
}
</script>
   