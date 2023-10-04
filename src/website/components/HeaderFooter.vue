<template>
   <img  src="@/assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
   <section id="header" class="header black">
      <div class="container-in row">
         <div class="w-logo" >
            <img :src="require('@/assets/logo/'+logo)" alt="">
         </div>
         <div class="w-menu">
            <router-link :to="txt.toLowerCase()" :class="{'active':menu == txt}" v-on:click="menu=txt" v-for="(txt, index) in content.menu['en']" :key="index">{{txt}}</router-link>
         </div>
         <div class="w-media">
            <a class="btn-g">
               Contact Us
            </a>
         </div>
      </div>
   </section>
   <slot>

   </slot>
   <section class="footer">
      <div class="container-in wrap">
         <div class="col-md-4">
            <img class="logo" src="@/assets/logo/logoLight.svg" alt="" srcset="">
            <div class="redes">
               <a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="white"/>
                  </svg>
               </a>
               <a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.0648 9.56124H14.337H14.9188L14.8313 10.1365L14.3888 13.0436L14.3242 13.4684H13.8945H12.0636V19.3949C16.3155 18.4473 19.5 14.6294 19.5 10.0612C19.5 4.77769 15.2441 0.500061 10.0014 0.5L12.0648 9.56124ZM12.0648 9.56124V8.17398C12.0648 7.84786 12.1451 7.58733 12.2931 7.41495C12.4289 7.2567 12.6827 7.10168 13.1933 7.10168H14.4544H14.9544V6.60168V4.12698V3.70547L14.539 3.63419L14.4544 4.12698L14.5389 3.63417L14.5388 3.63415L14.5385 3.6341L14.5375 3.63394L14.5344 3.63341L14.5233 3.63155L14.4824 3.62488C14.4472 3.61921 14.3962 3.61123 14.3318 3.60171C14.2032 3.58268 14.0208 3.55743 13.8034 3.5322C13.3708 3.482 12.7901 3.43076 12.216 3.43076C10.9724 3.43076 9.8891 3.81187 9.11644 4.58966C8.34362 5.3676 7.93894 6.48453 7.93894 7.84402V9.56249H5.89926H5.39926V10.0625V12.9696V13.4696H5.89926H7.93645V19.3962C3.68454 18.4486 0.5 14.6307 0.5 10.0625C0.5 4.77784 4.75582 0.501248 10.0012 0.5L12.0648 9.56124Z" fill="white" stroke="white"/>
                  </svg>
               </a>
               <a>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z" fill="white"/>
                  </svg>
               </a>
            </div>
         </div>
         <div class="col-md-5 menu-footer">
            <div class="wrap">
               <div class="col-md-6">
                  <h4>Menu</h4>
                  <nav>
                     <router-link to=""> Home </router-link>
                     <router-link to=""> Services </router-link>
                     <router-link to=""> About </router-link>
                     <router-link to=""> Proyects </router-link>
                     <router-link to=""> Contacts </router-link>
                  </nav>
               </div>
               <div class="col-md-6">
                  <h4>Services</h4>
                  <nav>
                     <router-link to=""> Marketing </router-link>
                     <router-link to=""> Digital Control</router-link>
                     <router-link to=""> Creative Design </router-link>
                     <router-link to=""> Web Applications </router-link>
                     <router-link to=""> More... </router-link>
                  </nav>
               </div>
            </div>
         </div>
         <div class="col-md-3">
            <h4>A new project? Let's talk</h4>
            <div class="redes">
               <a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="white" fill-rule="evenodd" d="m7.172 11.334l2.83 1.935l2.728-1.882l6.115 6.033c-.161.052-.333.08-.512.08H1.667c-.22 0-.43-.043-.623-.12l6.128-6.046ZM20 6.376v9.457c0 .247-.054.481-.15.692l-5.994-5.914L20 6.376ZM0 6.429l6.042 4.132l-5.936 5.858A1.663 1.663 0 0 1 0 15.833V6.43ZM18.333 2.5c.92 0 1.667.746 1.667 1.667v.586L9.998 11.648L0 4.81v-.643C0 3.247.746 2.5 1.667 2.5h16.666Z"/></svg>
               </a>
               info@mangoo.gt
            </div>
         </div>
         <div class="col-12">
            <p class="copy">
               Copyright © 2023. All rights reserved.
               <br>
               Powered by <strong>©Mangoo</strong> 
            </p> 
         </div>
         
      </div>
   </section>
</template>
<script> 
// @ is an alias to /src
import '@splidejs/vue-splide/css';
// or other themes
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
// or only core styles
import '@splidejs/vue-splide/css/core';

//import PaperMenu from '@/components/PaperMenu.vue'; // @ is an alias to /src
   export default {
      name: 'header-footer',
      components:{   
      },
      props:{
         mainClasses:{
            type: Array,
            default: () => []
         }
      },
      data() {
         return {
            menu:'Home',
            //Class system
            logo:'logoLight.svg',
            timeoutIdLoopClass: null,
            isRunningLoopClass: false,
            counterLoopClass: 1,

            content:{
               menu:{
                  es:['Inicio', 'Servicios', 'Nosotros', 'Portafolio'],
                  en:['Home', 'Services', 'About', 'Portfolio']
               },
            }
         }
      },
      created() {
         
         // Ejecuta la función 'loopInfinito' cada 1000 milisegundos (1 segundo)
         console.clear()

      },
      mounted(){
         setTimeout(() => {
            this.startLoopClass()
         }, 3000);

      },
      methods:{

         loopClass() {
            if (this.isRunningLoopClass) {
               if (this.counterLoopClass >= this.mainClasses.length) {  
                  console.log('reinicio');
                  this.counterLoopClass = 0
               } 
               //get Elements
               let header = document.getElementById('header')
               let showcase = document.getElementById('showcase')
               let logos = ['logoColorLight.svg', 'logoLight.svg', 'logoLight.svg', 'logoDark.svg', 'logoColorDark.svg']

               //replace clases
               for (const key of  this.mainClasses) {
                  header.classList.remove(key)
                  showcase.classList.remove(key)
                  document.getElementById('point-'+key).classList.remove('active')
               }
               this.logo = logos[this.counterLoopClass]
               showcase.classList.add( this.mainClasses[this.counterLoopClass])
               header.classList.add( this.mainClasses[this.counterLoopClass])
               document.getElementById('point-'+ this.mainClasses[this.counterLoopClass]).classList.add('active')

               //console.log("Looping... Count:", this.counterLoopClass,  this.mainClasses[this.counterLoopClass]);

               this.counterLoopClass++;
               this.timeoutIdLoopClass = setTimeout(() => this.loopClass(), 8000);
            }
         },
         startLoopClass() {
            if (!this.isRunningLoopClass) {
               this.isRunningLoopClass = true;
               this.loopClass();
            }
         },
         stopLoopClass() {
            this.isRunningLoopClass = false;
            if (this.timeoutIdLoopClass !== null) {
               clearTimeout(this.timeoutIdLoopClass);
               this.timeoutIdLoopClass = null;
            }
         },
         restartLoopClass(index) {
            this.stopLoopClass();
            this.counterLoopClass = index;
            this.startLoopClass();
         }
      },
   }
</script>
<style lang="less">
//Fonts
   @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
   @fontBody:'Montserrat';
   @fontTitle:'Montserrat';
   
   //Palette and Effects
   @green:#36A300;
   @orange:#FF4520;
   @yellow:#F2B705;

   @gray:#5A5A5A;
   @grayBlack:#404040;
   @grayLight:#EBEBEB;
   
   @light:#FDFDFD;
   @dark:#1F1F1F;

   @font:#404040;
   //------------
   @c1:#EBEBEB;
   @c2:#5A5A5A;
   @c3:#404040;
   @c4:#282828;
   //@c5:;/
   //------------
   .mango(){
      background: linear-gradient(90deg, #73B31C 0%, #FF4520 50.52%, #F2B705 100%);
   }
   .greenGradient(){
      background: linear-gradient(90deg, #2D9C00 0.01%, #4DB600 100%);
   }
   .orangeGradient(){
      background: linear-gradient(90deg, #FF2A00 0.01%, #FF720C 100%);
   }
   .yellowGradient(){
      background: linear-gradient(90deg, #F2B705 0%, #FFD600 100%);
   }
   .grayDarkGradient(){
      background: linear-gradient(90deg, #363636 0%, #2C2C2C 100%);
   }
   .grayLightGradient(){
      background: linear-gradient(90deg, #DFDFDF 0%, #FFFFFF 100%);
   }
   .bgOpacityNight(){
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.02) 100%);
   }
   .bgOpacityNightBottom(){
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.01) 100%);
   }
   .bgOpacityLight(){
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.01) 100%);
   }
   .shadow-block(){
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
   }
   .shadow-block{ .shadow-block;}

   //Global Styles ----------------------------------------
   .hover(){                                             
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -ms-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
   }
   .hover{
      .hover();
   }
   .centerFlex(){
      display: flex;
      align-items: center;
      justify-content: center;
   }
   .centerFlex{ .centerFlex; }

   //Components Styles ----------------------------------------
   .container-in{
      padding: 20px;
      width: 100%;
   }
   //Web Style ----------------------------------------
   //Header-Footer
   .header{
         z-index: 99;
         display: flex;
         position: relative;
      .w-logo{
         width: 200px;
         height: 80px;
         img{
            width: 100%;
         }
      }
      .w-menu{
         width: calc( 100% - 400px ) ;
         .centerFlex;
         justify-content: space-evenly;
         a{
            font-size: 16px;
            color: @c1;
            font-weight: 600;
            padding: 5px 10px;
            opacity: 0.7;
            .hover;
            &.active, &:hover{
               font-weight: 700;
               opacity: 1;
               .hover;
            }
         }
      }
      .w-media{
         .centerFlex;
         width: 200px;
         .btn-g{
            .hover;
            width: 100%;
         }
      }
       &.black{
         .btn-g{
            .grayDarkGradient;
            color: @c1;
         }
         .w-menu{
            a{
               color: @c1;
            }
         }
      }
      &.orange{
         .btn-g{
            .orangeGradient;
            color: @c1;
         }
         .w-menu{
            a{
               color: @c1;
            }
         }
      }
      &.green{
         .btn-g{
            .greenGradient;
            color: @c1;
         }
         .w-menu{
            a{
               color: @c1;
            }
         }
      }
      &.yellow{
         .btn-g{
            .yellowGradient;
            color: @c3;
         }
         .w-menu{
            a{
               color: @c3;
            }
         }
      }
      &.white{
         .btn-g{
            .grayLightGradient;
            color: @c3;
         }
         .w-menu{
            a{
               color: @c3;
            }
         }
      }
   }
   .footer{
      background: @c3;
      color: @c1;
      h4{
         font-size: 14px;
         font-weight: 700;
         padding: 10px 0;
      }
      .menu-footer{
         padding: 20px 40px 40px ;
         nav{
            a{
               display: block;
               color: @c1;
               font-size: 12px;
               padding: 10px 0;
               .hover;
               &:hover{
                  .hover;
                  font-weight: 700;
               }
            }
         }
      }
      .logo{
         width: 250px;
         margin: 0 0 25px 0;
      }
      .copy{
         text-align: center;
         font-size: 11px;
      }
   }
   //Home
   .showcase{
      z-index: -1;
      //padding: 50px 0px;
      .bg{
         position: absolute;
         top: 0;
         z-index: -999;
         width: calc(50vw + 350px);
         height: auto;
         path{
            .hover;
         }
      }
      img{
         background: @c1;
         padding: 50px;
         border-radius: 20px;
         .shadow-block;
      }
      .btn-g{
         width: 200px;
         margin: 20px 0;
         .hover;
      }
      h1{
         font-size: 50px;
         font-weight: 600;
         .hover;
      }
      .pagination{
         display: flex;
         .point{
            width: 26px;
            height: 25px;
            border-radius: 50%;
            margin: 5px;
            border: 1px solid transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.5;
            cursor: pointer;
            .hover;
            &.active{
               opacity: 1;
               .hover;
            }
            &:after{
               content: '';
               .hover;
               background: @c1;
               display: block;
               border-radius: 50%;
               width: 12px;
               height: 12px;
            }
         }
      }
      &.black{
         .bg{ path{ fill:@c3 }  }
         .btn-g{
            .grayLightGradient;
            color: @c3;
         }
         h1{ color: @c1; }
         .pagination{
            .point{
               &.active{
                  border: 1px solid @c1;
               }
            }
             &:after{
               background: @c1;
            }
         }
      }
      &.orange{
         .bg{ path{ fill:@orange }  }
         .btn-g{
            .grayLightGradient;
            color: @c3;
         }
         h1{ color: @c1; }
         .pagination{
            .point{
               &.active{
                  border: 1px solid @c1;
               }
            }
             &:after{
               background: @c1;
            }
         }
      }
      &.green{
         .bg{ path{ fill:@green }  }
         .btn-g{
            .grayLightGradient;
            color: @c3;
         }
         h1{ color: @c1; }
         .pagination{
            .point{
               &.active{
                  border: 1px solid @c1;
               }
            }
             &:after{
               background: @c1;
            }
         }
      }
      &.yellow{
         .bg{ path{ fill:@yellow }  }
         .btn-g{
            .grayDarkGradient;
            color: @c1;
         }
         h1{ color: @c3; }
         .pagination{
            .point{
              &.active{
                  border: 1px solid @c3;
               }
               &:after{
                  background: @c3;
               }
            }
         }
      }
      &.white{
         .bg{ path{ fill:@c1 }  }
         .btn-g{
            .grayDarkGradient;
            color: @c1;
         }
         h1{ color: @c3; }
         .pagination{
            .point{
               &.active{
                  border: 1px solid @c3;
               }
               &:after{
                  background: @c3;
               }
            }
         }
      }
   }
   .services{
      padding: 50px 0;
      .list{
         h3{
            font-family: @fontTitle;
            margin: 10px 0;
            font-weight: 700;
            font-size: 30px;
            color: @c3;
         }
         .inner{
            cursor: pointer;
            background: #FFFFFF;
            border-radius: 10px;
            padding: 20px;
            .hover;
            .icon{
               background: @c3;
               padding: 10px;
               border-radius: 10px;
               display: inline-block;
            }
            h4{
               margin: 15px 0 10px;
            }
            &:hover{
               .shadow-block;
               .hover;
            }
         }
      }
   }
   .tech{
      padding:50px 0;
      img{
         padding: 20px ;
      }
   }
   //Services
   //Projects
   .projects{
      padding: 0;
      align-items: stretch;
      .col{
         padding: 10px;
         text-align: center;
         h4{
            font-size: 18px;
            padding: 10px 0;
         }
         p{
            font-size: 14px;
         }
         .block{
            height: 100%;
            display: block;
            background: @light;
            //padding: 0px;
            .hover;
            &:hover{
               .shadow-block;
               .hover;
            }
         }
      }
   }
</style>