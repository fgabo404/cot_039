<template>
  <div class="paper-dash">
    <img src="../assets/bgTexture.png" class="bgDash" id="bgDash" alt="">
    <paper-menu/>
    <div class="header section">
      <div class="wrap shadow-block">
        <img class="logo" src="../assets/logoColor.svg" alt="">
        <div class="controlBar">
          <div class="notifications">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2177_27)">
                  <path d="M15 30C15.9634 30.0012 16.9032 29.7129 17.6888 29.1752C18.4744 28.6376 19.0667 27.8773 19.3836 27H10.6164C10.9333 27.8773 11.5256 28.6376 12.3112 29.1752C13.0968 29.7129 14.0366 30.0012 15 30V30ZM25.8889 18.879V12C25.8889 7.1745 22.49 3.1095 17.8856 1.887C17.4298 0.78 16.316 0 15 0C13.684 0 12.5702 0.78 12.1144 1.887C7.51 3.111 4.11111 7.1745 4.11111 12V18.879L1.45578 21.4395C1.31105 21.5786 1.19627 21.7438 1.11804 21.9259C1.03982 22.1079 0.999705 22.303 1 22.5V24C1 24.3978 1.16389 24.7794 1.45561 25.0607C1.74734 25.342 2.143 25.5 2.55556 25.5H27.4444C27.857 25.5 28.2527 25.342 28.5444 25.0607C28.8361 24.7794 29 24.3978 29 24V22.5C29.0003 22.303 28.9602 22.1079 28.882 21.9259C28.8037 21.7438 28.689 21.5786 28.5442 21.4395L25.8889 18.879Z" fill="#5A5A5A" />
              </g>
            </svg>
          </div>
          <div class="dropdown ">
            <a class="profile" data-toggle="dropdown" aria-expanded="false">
              <div class="ico">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2177_24)">
                      <path d="M6.46131 5.68421C6.46131 8.8181 8.94624 11.3684 11.9998 11.3684C15.0533 11.3684 17.5382 8.8181 17.5382 5.68421C17.5382 2.55032 15.0533 0 11.9998 0C8.94624 0 6.46131 2.55032 6.46131 5.68421ZM21.8459 24H23.0767V22.7368C23.0767 17.8623 19.2109 13.8947 14.4613 13.8947H9.53824C4.78747 13.8947 0.922852 17.8623 0.922852 22.7368V24H21.8459Z" fill="#404040" />
                  </g>
                </svg>
              </div>
              <p>{{user.name}}</p>
            </a>

            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PaperMenu from '@/components/papers/PaperMenu.vue'; // @ is an alias to /src

export default {
  name: 'mangoo-dash',
  components:{
    PaperMenu,
  },
  data() {
    return {
      user:{
        name:'Mangoo'
      }
    }
  },
}
</script>
