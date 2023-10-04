<template>
  <div id="loading" class="loading fadeIn none">
    <div id="c1" class="ring one fadeIn s1"> 
        <div class="circle "></div>
    </div>
    <div id="c2" class="ring two fadeIn s1-5"> 
        <div class="circle "></div>
    </div>
    <img id="isotipo" class="fadeIn " src="./assets/isotipo_white.svg" alt="">
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
  .menu{
    width: 250px;
    height: 100%;
    display: block;
    position: absolute;
    background: @grayBlack;
    padding: 20px;
    left: -250px;
    .hover;
    &.show{
      .hover;
      left: 0;
    }
    .logo{
      width: 100px;
    }
    .search{
      margin: 20px 0;
      width: 100%;
      .icon{
        width: 40px;
        height: 40px;
        .grayDarkGradient;
        .centerFlex;
      }
      input{
        width: calc( 100% - 70px);
        height: 40px;
      }
      .x{
        .centerFlex;
        width: 30px;
        height: 40px;
        .hover;
        background: #fff;
        svg{
          opacity: 0.3;
        }
        &:hover{
          background: #ececec;
          .hover; 
          svg{
            opacity: 0.6;
          }
        }
      }
    }
  }
  .burger{
    position: absolute;
    background: @grayBlack;
    width: 60px;
    height: 60px;
    right: 0;
    bottom: 20px;
    padding: 18px;
    left: 0;
    border-radius: 0 10px 10px 0;
    z-index: 99;
    .hover;
    &.show{
      .hover;
      left: 170px;
    }
    svg{
      width: 24px;
      height: 24px;
    }
  }
  .tooltip-inner {
    background-color: @grayBlack !important;
    color: #fff ;
    padding: 10px 20px;
    font-size: 16px;
    font-family: @fontFamily;
    font-weight: 600;
    border: none;
  }
  .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
    border-top-color: @grayBlack !important;
  }
  .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
    border-right-color: @grayBlack !important;
  }
  .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
    border-bottom-color: @grayBlack !important;
  }
  .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
    border-left-color: @grayBlack !important;
  }
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
    .centerFlex;
  }
  .slider-wrap{
    padding: 0!important;
    .splide__slide{
      display: flex;
      align-items: center;
    }
    .splide__arrows{
      &.light{
          svg{ path{ fill:#f0f0f0; } }
      }
      &.dark{
          svg{ path{ fill:@grayBlack; } }
      }
      .splide__arrow{
          opacity: 0.7;
          .hover;
          &:hover{
            .hover;
            opacity: 1;
          }
      }
    }
    .splide__progress__bar{
      opacity: 0.6;
      &.light{
        background: #fff;
      }
      &.dark{
        background: @grayBlack;
      }
    }
    &.dark{
      .splide__pagination {
        .splide__pagination__page{
          background: @grayBlack;
          opacity: 0.3;
          .hover;
          &.is-active{
            .hover;
            opacity: 0.6;
  
          }
        }
      }
    }
    &.light{
      .splide__pagination {
        .splide__pagination__page{
          background: #ffffff;
          opacity: 0.3;
          .hover;
          &.is-active{
            .hover;
            opacity: 0.6;
  
          }
        }
      }
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
  .paper-dash{    
    //overflow: hidden;
    .header{
      .wrap{
        background: @light;
        padding: 20px;
        border-radius: 20px;
        .centerFlex;
        justify-content: space-between;
        .logo{
          //width: 150px;
          height: 50px;
        }
        .controlBar{
          .centerFlex;
          .notifications{
            .centerFlex;
            padding: 0 20px;
            svg{
              width: 30px;
              path{ fill:@gray; }
            }
          }
          .profile{
            .centerFlex;
            .ico{
              border-radius: 50%;
              padding: 18px;
              background: @grayLight;
              .centerFlex;
              svg{
                width: 24px;
                path{ fill:@gray; }
              }
            }
            p{
              color: @font;
              font-size: 28px;
              font-weight: 700;
              padding: 0 20px;
              margin:0;
            }
          }
        }
      }
    }
  }
  .menuItemText h6:hover{
    font-weight: 800;
  }
  //Landing
  .landing-wrap{
    height: 100vh;
    .container-in{
      background: #fff;
      padding: 100px;
      border-radius: 40px 50px;
      .header{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 0 40px 0;
      }
      .text{
        padding: 0 40px 0 0;
      }
      .logo{
        width: 200px;
      }
      .btn-g{
        width: 250px;
        margin: 0;
      }
      h1{
        font-size: 52x;
        font-weight: 700;
        text-transform: uppercase;
        padding: 0 0 20px 0;
      }
      p{
        font-size: 18px;
      }
    }
  }
  //Responsive
  @media (max-width: 1200px) {
    h1{
      font-size: 32px;
    }
    .landing-wrap{
      padding: 20px;
    }
  }
  @media (max-width: 992px) {
    h1{
      font-size: 24px;
    }
    .landing-wrap{
      .container-in{
        padding: 50px;
      }
    }
  }
  @media (max-width: 767px) {
    .landing-wrap{
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
