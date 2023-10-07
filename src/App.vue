<template>
  <div id="loading" class="loading fadeIn none">
    <div id="c1" class="ring one fadeIn s1"> 
        <div class="circle "></div>
    </div>
    <div id="c2" class="ring two fadeIn s1-5"> 
        <div class="circle "></div>
    </div>
    <img id="isotipo" class="fadeIn " src="@/assets/isotipo_white.svg" alt="">
  </div>
  <router-view/>
</template>

<script>
  setTimeout(() => {
    document.getElementById('c1').classList.add('fadeOut')
    document.getElementById('c2').classList.add('fadeOut')
    document.getElementById('isotipo').classList.add('fadeOut')
  }, 2500);
  setTimeout(() => {
    document.getElementById('loading').classList.add('fadeOut')
  }, 4000);
</script>

<style lang="less">

  //Fonts
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @fontFamily:'Montserrat';
  
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

  .mango(){
    background: linear-gradient(90deg, #73B31C 0%, #FF4520 50.52%, #F2B705 100%);
  }
  .greenGradient(){
    background: linear-gradient(90deg, #2D9C00 0.01%, #4DB600 100%);
  }
  .orangeGradient(){
    background: linear-gradient(90deg, #2D9C00 0.01%, #4DB600 100%);
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
  .shadow-block(){
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  }
  .shadow-block{ .shadow-block;}  

  .shadow-button(){
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.50);

  }
  .shadow-button{ .shadow-button;}  
  
  //Global Styles ----------------------------------------
  .absoluteCenterFlex(){
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .absoluteCenterFlex{
    .absoluteCenterFlex;
  }
  .hover(){ 
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -ms-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
  }
  .hover5s(){ 
    -webkit-transition: all 0.5s ease 0s;
    -moz-transition: all 0.5s ease 0s;
    -ms-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.55s ease 0s;
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
  //Fades an Slides
  .fadeIn{
    -webkit-animation: fadeIn 0.5s both; animation: fadeIn 0.5s both;
    &.s1{ -webkit-animation: fadeIn 1s both; animation: fadeIn 1s both; }
    &.s1-5{ -webkit-animation: fadeIn 1.5s both; animation: fadeIn 1.5s both; }
    &.s2{ -webkit-animation: fadeIn 2s both; animation: fadeIn 2s both; }
    &.s3{ -webkit-animation: fadeIn 3s both; animation: fadeIn 3s both; }
    &.s4{ -webkit-animation: fadeIn 4s both; animation: fadeIn 4s both; }
    &.s5{ -webkit-animation: fadeIn 5s both; animation: fadeIn 5s both; }
  }
  @keyframes fadeIn { 
    0% { opacity: 0; }
    70% { opacity: 0.4; }
    100% { opacity: 1; }
  }
  .fadeOut{
    -webkit-animation: fadeOut 0.5s both; animation: fadeOut 0.5s both;
    &.s1{ -webkit-animation: fadeOut 1s both; animation: fadeOut 1s both; }
    &.s1-5{ -webkit-animation: fadeOut 1.5s both; animation: fadeOut 1.5s both; }
    &.s2{ -webkit-animation: fadeOut 2s both; animation: fadeOut 2s both; }
    &.s3{ -webkit-animation: fadeOut 3s both; animation: fadeOut 3s both; }
    &.s4{ -webkit-animation: fadeOut 4s both; animation: fadeOut 4s both; }
    &.s5{ -webkit-animation: fadeOut 5s both; animation: fadeOut 5s both; }
  }
  @keyframes fadeOut {
    0% { opacity: 1; }
    70% { opacity: 0.7; }
    100% { opacity: 0; z-index: -1; }
  }
  .zoomIn{
    -webkit-animation: zoomIn 0.5s both; animation: zoomIn 0.5s both;
    &.s1{ -webkit-animation: zoomIn 1s both; animation: zoomIn 1s both; }
    &.s1-5{ -webkit-animation: zoomIn 1.5s both; animation: zoomIn 1.5s both; }
    &.s2{ -webkit-animation: zoomIn 2s both; animation: zoomIn 2s both; }
    &.s3{ -webkit-animation: zoomIn 3s both; animation: zoomIn 3s both; }
    &.s4{ -webkit-animation: zoomIn 4s both; animation: zoomIn 4s both; }
    &.s5{ -webkit-animation: zoomIn 5s both; animation: zoomIn 5s both; }
  }
  @keyframes zoomIn {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  .slideDown{
    -webkit-animation: slideDown 0.5s both; animation: slideDown 0.5s both;
    &.s1{ -webkit-animation: slideDown 1s both; animation: slideDown 1s both; }
    &.s1-5{ -webkit-animation: slideDown 1.5s both; animation: slideDown 1.5s both; }
    &.s2{ -webkit-animation: slideDown 2s both; animation: slideDown 2s both; }
    &.s3{ -webkit-animation: slideDown 3s both; animation: slideDown 3s both; }
    &.s4{ -webkit-animation: slideDown 4s both; animation: slideDown 4s both; }
    &.s5{ -webkit-animation: slideDown 5s both; animation: slideDown 5s both; }
  }
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: inherit;
    }
  }
  .slideUp{
    -webkit-animation: slideUp 0.5s both; animation: slideUp 0.5s both;
    &.s1{ -webkit-animation: slideUp 1s both; animation: slideUp 1s both; }
    &.s1-5{ -webkit-animation: slideUp 1.5s both; animation: slideUp 1.5s both; }
    &.s2{ -webkit-animation: slideUp 2s both; animation: slideUp 2s both; }
    &.s3{ -webkit-animation: slideUp 3s both; animation: slideUp 3s both; }
    &.s4{ -webkit-animation: slideUp 4s both; animation: slideUp 4s both; }
    &.s5{ -webkit-animation: slideUp 5s both; animation: slideUp 5s both; }
  }
  @keyframes slideUp {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: inherit;
    }
  }
  .slideRight{ 
    -webkit-animation: slideRight 0.5s both; animation: slideRight 0.5s both;
    &.s1{ -webkit-animation: slideRight 1s both; animation: slideRight 1s both; }
    &.s1-5{ -webkit-animation: slideRight 1.5s both; animation: slideRight 1.5s both; }
    &.s2{ -webkit-animation: slideRight 2s both; animation: slideRight 2s both; }
    &.s3{ -webkit-animation: slideRight 3s both; animation: slideRight 3s both; }
    &.s4{ -webkit-animation: slideRight 4s both; animation: slideRight 4s both; }
    &.s5{ -webkit-animation: slideRight 5s both; animation: slideRight 5s both; }
  }
  @keyframes slideRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .slideLeft{
    -webkit-animation: slideLeft 0.5s both; animation: slideLeft 0.5s both;
    &.s1{ -webkit-animation: slideLeft 1s both; animation: slideLeft 1s both; }
    &.s1-5{ -webkit-animation: slideLeft 1.5s both; animation: slideLeft 1.5s both; }
    &.s2{ -webkit-animation: slideLeft 2s both; animation: slideLeft 2s both; }
    &.s3{ -webkit-animation: slideLeft 3s both; animation: slideLeft 3s both; }
    &.s4{ -webkit-animation: slideLeft 4s both; animation: slideLeft 4s both; }
    &.s5{ -webkit-animation: slideLeft 5s both; animation: slideLeft 5s both; }
  }
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .none{
    display: none!important;
  }
  //Tags Styles ----------------------------------------
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12,
  h1, h2 ,h3 ,h4 ,h5 ,h6{
    padding:0;
    margin: 0;
  }
  section{
    -webkit-animation: fadeIn 1s both;
    animation: fadeIn 1s both;
  }
  img{
    width: 100%;
  }
  a{
    text-decoration: none;
    color: #000;
    cursor: pointer;
    &:hover{
      color: #000;
      text-decoration: none;
    }
  }
  p, h1, h2, h3, h4, h5, h6{
    margin: 0;
  }
  @media (max-width: 992px) {
    p{ font-size: 14px; }
  }
  @media (max-width: 767px) {
    p{ font-size: 13px; }
    p, h1, h2, h3, h4, h5, h6{
      text-align: center;
    }
  }
  @media (max-width: 520px) {
    p{ font-size: 12px; }
    
  }
  // Inputs
  input{
    border: none;
    outline: none;
    height: 40px;
    padding: 10px;
    font-size: 14px;
  }
  input:focus, textarea:focus, select:focus,
  input:hover, textarea:hover, select:hover{
    border: none;
    outline:none;
  }
  input:focus-visible, textarea:focus-visible, select:focus-visible {
    border: none;
    outline:none;
  }
  //Estructure Components Styles -----------------------------
  .container-in{
    max-width: 1200px;
    margin: 0 auto;
  }
  .container-min{
    max-width: 900px;
    margin: 0 auto;
  }
  .wrap{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    
  }
  .block{
    padding: 15px;
  }
  ::-webkit-scrollbar {
    display: none;
    .hover;
  }
  ::-webkit-scrollbar-thumb {
    border: 4px solid #00000000;
    background-clip: padding-box;
    border-radius: 9999px;
    background-color: #AAAAAA;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  //Essential Components Mango Dash
  .bgDash{
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .loading{
    display: flex;
    position: fixed;
    background: #000000d4;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    backdrop-filter: blur(5px);
    .centerFlex;
    img{
      width: 125px;
      z-index: 99;
    }
  }
  .ring {
    display: inline-block;
    position: absolute;
    
    .circle{
      border-radius: 50%;
      display: inline-block;
      margin: 5px;
      width: calc( 100% - 10px );
      height: calc( 100% - 10px );
      position: absolute;
      
    }
    &:after {
      content: " ";
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid rgb(255, 255, 255);
      border-color: #fff transparent #fff transparent ;
      box-shadow: 0px 0px 50px 5px rgba(0,0,0,0.4);
      -webkit-box-shadow: 0px 0px 50px 5px rgba(0,0,0,0.4);
      -moz-box-shadow: 0px 0px 50px 5px rgba(0,0,0,0.4);
    }
    //----
    &.one{
      width: 250px;
      height: 250px;
      &:after{
        background: #0000001f;
        border-width: 6px;
        animation: ring 5s linear infinite;
      }
    }
    &.two{
      width: 400px;
      height: 400px;
      &:after{
        border-width: 1px;
        animation: ring 10s linear infinite;
      }
    }
  }
  @keyframes ring {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @media (max-width: 992px) {

  }
  @media (max-width: 767px) {

  }
  @media (max-width: 520px) {
    
  }
  //Components Styles ----------------------------------------
  .btn-g{
    padding: 10px 30px;
    color: @grayLight;
    background: @grayBlack;
    border-radius: 50px;
    margin: 0 auto;
    font-weight: 600;
    width: 200px;
    .centerFlex;
    margin: 0 auto;
    &.dark{
      color: @grayLight;
      background: @grayBlack;
    }
    &.light{
      color: @grayBlack;
      background: @light;
    }
  }
  .redes{
    .wrap;
    a{
      border-radius: 50%;
      border: 1px solid #ccc;
      width: 40px;
      height: 40px;
      padding: 7px;
      .absoluteCenterFlex;
      margin: 5px;
      svg{
        width: 20px;
        height: 20px;
      }
    }
  }
  @media (max-width: 992px) {

  }
  @media (max-width: 767px) {

  }
  @media (max-width: 520px) {
    
  }
  //View Styles
  *{
    box-sizing: border-box;
  }
  body{
    margin:0;
    padding: 0;
  }
  #app {
    font-family: @fontFamily, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2f2f2f;
  }
  .section{
    width: 100%;
    padding: 30px 40px;
  }
  .header{
    padding: 20px 0;
    .wrap{
      .shadow-block;
      height: 80px;
      background: @grayBlack;
      padding: 15px;
      border-radius: 20px;
      .centerFlex;
      justify-content: space-between;
      svg{
        width: 45px;
        height: 45px;
      }
      .profile{
        cursor: pointer;
        .centerFlex;
        p{
          color: @light;
          font-size: 26px;
          font-weight: 700;
          padding: 0 20px;
          margin:0;
        }
      }
      .menu{
        a{
          color: @light;
          padding: 0 10px;
          opacity: 0.7;
          .hover;
          &:hover{
            .hover;
            opacity: 1;
          }
        }
      }
      .hover;
      &:hover{
        .hover;
      }
    }
  }
  .player{
    bottom: 0;
    padding: 20px 0;
    .col{
      padding: 0 10px;
    }
    .wrap{
      height: 80px;
      background: @grayBlack;
      padding: 15px;
      border-radius: 20px;
      color: @light;
      .centerFlex;
      justify-content: space-between;
      position: relative;
      .song{
        display: flex;
        flex-direction: column;
        p{
          font-size: 20px
        }
        span{
          font-size: 12px;
          opacity: 0.7;
        }
      }
      .play{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        left: 0;
        audio{
          width: 700px;
        }
      }
    }
  }
  .dash{
    .centerFlex;
    flex-direction: column;
    a{
      .hover;
      .centerFlex;
      cursor: pointer;
      flex-direction: column;
      padding: 20px;
      margin: 20px;
      background: @grayBlack;
      border-radius: 20px;
      h4{
        color: @light;
        padding: 20px 0 0 0;
      }
      &:hover{
        .hover;
        .shadow-button
      }
    }
  }
  .panel{
    .centerFlex;
    .mid{
      padding: 0 20px;
    }
    .block{
      height: calc(100vh - 240px);
      overflow-y: auto;
      .centerFlex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;    
      padding: 20px;
      background: @grayBlack;
      border-radius: 20px;
      color: @light;
      .hover;
      &:hover{
        .hover;
        .shadow-button
      }
      h4{
        padding: 0 0 20px 0;
      }
      
    }
  }
  .blog{
    .centerFlex;
    .mid{
      padding: 0 20px;
    }
    .block{
      height: calc(100vh - 240px);
      overflow-y: auto;
      .centerFlex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;    
      padding: 20px;
      background: @grayBlack;
      border-radius: 20px;
      color: @light;
      .hover;
      &:hover{
        .hover;
        .shadow-button
      }
      h4{
        padding: 0 0 10px 0;
      }
      .post{
        background: #ffffff28;
        padding: 20px;
        border-radius: 15px;
        margin: 10px;
      }
    }
  }
  .edition{
    flex-wrap: wrap;
    .centerFlex;
    .col{
      padding:0  10px;
    }
    .block{
      height: calc(100vh - 240px);
      overflow-y: auto;
      .centerFlex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;    
      padding: 20px;
      background: @grayBlack;
      border-radius: 20px;
      color: @light;
      .hover;
      &:hover{
        .hover;
        .shadow-button
      }
      h4{
        padding: 0 0 20px 0;
      }
      &.up{
        height: auto;
        margin: 20px 0;
        input[type="file"] {
          color: #fff;
          height: auto;
          outline: none;
          padding: 4px;
          margin: -4px auto;
        }

        input[type="file"]:focus-within::file-selector-button,
        input[type="file"]:focus::file-selector-button {
          outline: 2px solid #ffffff;
          outline-offset: 2px;
        }

        input[type="file"]::before {
          top: 16px;
        }

        input[type="file"]::after {
          top: 14px;
        }

        /* ------- From Step 2 ------- */

        input[type="file"] {
          position: relative;
        }

        input[type="file"]::file-selector-button {
          width: 200px;
          margin: 0 auto;
          color: transparent;
        }

        /* Faked label styles and icon */
        input[type="file"]::before {
          position: absolute;
          pointer-events: none;
          /*   top: 11px; */
          left: 40px;
          color: #404040;
          content: "Upload File";
        }

        input[type="file"]::after {
          position: absolute;
          pointer-events: none;
          /*   top: 10px; */
          left: 16px;
          height: 20px;
          width: 20px;
          content: "";
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23404040'%3E%3Cpath d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'/%3E%3C/svg%3E");
        }

        /* ------- From Step 1 ------- */

        /* file upload button */
        input[type="file"]::file-selector-button {
          //color: #404040;
          border-radius: 10px;
          padding: 0 16px;
          height: 40px;
          cursor: pointer;
          background-color: white;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.05);
          margin-right: 16px;
          transition: background-color 200ms;
        }

        /* file upload button hover state */
        input[type="file"]::file-selector-button:hover {
          background-color: #f3f4f6;
        }

        /* file upload button active state */
        input[type="file"]::file-selector-button:active {
          background-color: #e5e7eb;
        }
      }
      
    }
  }
  table{
    width: 100%;
    tr{
      .hover;
      cursor: pointer;
      &:hover{
        .hover;
        background: #ffffff10;
      }
    }
    th{
      font-size: 10px;
      opacity: 0.5;
      font-weight: 500;
      border-bottom: 1px solid #ffffff46;
      padding: 0 10px;
    }
    td{
      font-size: 14px;
      div{
        display: flex;
        flex-direction: column;
      }
      vertical-align: middle;
      padding: 10px;
      p{
        width: 100%;
      }
      span{
        font-size: 10px;
        line-height: 10px;
        opacity: 0.6;
      }
    }
  }
  //Landing
  .login-wrap{
    height: 100vh;
    .container-in{
      .shadow-button;
      background: @grayBlack;
      overflow: hidden;
      width: 1000px;
      border-radius: 40px 50px;
      img{
        width: 100%;
      }
      .form{
        display: flex;
        flex-direction: column;
        input{
          margin: 20px 0 0 0;
          font-size: 15px;
          font-family: 'Montserrat';
          width: 300px;
          padding: 10px 15px;
          -webkit-border-radius: 0;
          -moz-border-radius: 0;
          border-radius: 15px;
          border: none;
          background: @light;
          color: #5A5A5A;
          position: relative;
          .hover;
          &.disable-input{
            background: transparent;
            border: none!important;
          }
        }
      }
      .btn-g{
        margin: 20px 0;
      }
    }
  }
  //Responsive
  @media (max-width: 1200px) {
    h1{
      font-size: 32px;
    }
    .login-wrap{
      padding: 20px;
    }
  }
  @media (max-width: 992px) {
    h1{
      font-size: 24px;
    }
    .login-wrap{
      .container-in{
        padding: 50px;
      }
    }
  }
  @media (max-width: 767px) {
    .login-wrap{
      height: auto;
      .container-in{
        padding: 50px;
        .btn-g{
          width: 250px;
          margin: 20px auto 50px;
        }
        .logo{
          margin: 0 auto;
        }
        .text{
          padding: 0;
        }
      }
    }
  }
  @media (max-width: 520px) {

  }
</style>
