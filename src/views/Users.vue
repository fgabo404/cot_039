<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="wrap panel container-in">
      <div class="col col-md-12"> 
         <div class="block">
            <h4>Playlist</h4>
            <table>
               <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Password</th>
                  <th>Permisos</th>
                  <th style="text-align:end;">Options</th>
               </tr>
               <tr v-for="(row, index) in data.USR" :key="index">
                  <td>
                     {{data.USR.indexOf(row)+1}}
                  </td>
                  <td>
                     <p >
                        {{row.att.user}}
                     </p>
                  </td>
                  <td >
                     <input style="height: 30px; width: 250px;" v-if="USR == index" v-model="row.att.pass">
                     <p v-if="USR != index">
                        {{row.att.pass}} 
                     </p>
                  </td>
                  <td>
                     <select name="" id=""  style="height: 30px; width: 250px; padding: 5px 10px;" v-if="USR == index" v-model="row.att.permits">
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="lector">Lector</option>
                     </select>   
                     <p v-if="USR != index" >
                        {{row.att.permits}}
                     </p>
                  </td>
                  <td style=" display: flex; align-items: center; justify-content: flex-end;" >
                     <span>
                        <!-- Edition -->
                        <svg v-if="USR != index" v-on:click="USR = index" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="white" d="M10.733 2.56a1.914 1.914 0 0 1 2.707 2.708L12.707 6l.263.262a1.75 1.75 0 0 1 0 2.475l-1.116 1.116a.5.5 0 0 1-.708-.707l1.117-1.116a.75.75 0 0 0 0-1.061L12 6.708l-5.955 5.954a1.648 1.648 0 0 1-.644.398l-2.743.915a.5.5 0 0 1-.632-.633L2.94 10.6a1.65 1.65 0 0 1 .398-.644l7.395-7.394Z"/></svg>
                        <!-- Save -->
                        <svg v-if="USR == index" v-on:click="USR = null; updateRecord(row)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M21 7v12q0 .825-.588 1.413T19 21H5q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h12l4 4Zm-9 11q1.25 0 2.125-.875T15 15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Zm-6-8h9V6H6v4Z"/></svg>
                        <!-- Delete -->
                        <svg v-on:click="deleteRecord(row,index )" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                     </span>
                  </td>
               </tr>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
//tools
import * as tools from '@/store/tools.js'

//AWS
import { API } from "aws-amplify";
import { listRecords } from "../graphql/queries";
import { deleteRecord, updateRecord } from '../graphql/mutations';

// @ is an alias to /src
//Ui
import PaperHeader from '@/components/Header.vue';

//Components
//import HeaderFooter from '@/website/components/HeaderFooter.vue';


export default {
   name: 'dash-view',
   components: {
      PaperHeader,
   },
   data() {
      return { 
         data:{
            USR:[],
         },
         USR:null,
         permisos:[
            'admin',
            'editor', 
            'lector', 
         ]
      }
   },
   created() {
      this.listData()
   },
   methods:{
      async listData( ){
         try {
            let pulldata = await API.graphql({
               query: listRecords
            })
            pulldata = pulldata.data.listRecords.items
            console.log(pulldata);
            pulldata.forEach(element => {
               switch (element.entity) {
                 case 'USR':
                     element.att = JSON.parse(element.att)
                     this.data.USR.push(element)
                  break;
                 
               }
            });
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
         this.data.USR.splice(index, 1)
      },
      async updateRecord( data ){
         let pushData = data
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
   computed:{
     
   },
   watch:{
   }
}
</script>
   