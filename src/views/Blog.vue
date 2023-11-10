<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <PaperHeader/>
   <div class="wrap blog container-in">
      <div  class="col col-md-8">
         <div class="block">
            <h4>Blog</h4>
            <div class="post" v-for="(item, index) in 6" :key="index">
               <h5><strong> Lorem impsu </strong></h5>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
            </div>
         </div>
         <div class="block up">
               <a href="" class="btn-g light"  data-toggle="modal" data-target="#upPost" v-on:click="entity = 'BLO'">
                  Postear Blog
               </a>
         </div>
      </div>
      <div  class="col col-md-4" style="padding:0 0 0 20px;">
         <div class="block">
            <h4>Feedback</h4>
             <div class="post" v-for="(item, index) in 6" :key="index">
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               </p>
            </div>
         </div>
         <div class="block up">
            <a href="" class="btn-g light"  data-toggle="modal" data-target="#upPost" v-on:click="entity = 'FED'">
               Subir Feedback
            </a>
         </div>
      </div>
   </div>
   <div class="modal fade" id="upPost" tabindex="-1" aria-labelledby="upfileLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
         <div class="modal-content">
            <div class="input-wrap">
               <label for="">Encabezado</label>
               <input type="text">
            </div>
         </div>
      </div>
   </div>
</template>

<script>
//tools
//import * as tools from '@/store/tools.js'
// Default theme
//AWS
import { API } from "aws-amplify";
import { listRecords } from "../graphql/queries";

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
         entity: null,
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
            this.data.RAM = {...this.data}
         } catch (error) {
            console.log(error);
            tools.popUp('info', error)
         }
      },
   }
}
</script>
   