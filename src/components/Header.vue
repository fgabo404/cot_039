<template>
  <div class="header" v-if="render">
    <div class="wrap container-in">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="15" fill="#FDFDFD"/>
        <path d="M25 13.75C25 13.75 17.2675 20.425 12.9463 24.04C12.8087 24.1598 12.698 24.3072 12.6211 24.4726C12.5442 24.638 12.503 24.8176 12.5 25C12.5 25.3315 12.6317 25.6495 12.8661 25.8839C13.1005 26.1183 13.4185 26.25 13.75 26.25H16.25V35C16.25 35.3315 16.3817 35.6495 16.6161 35.8839C16.8505 36.1183 17.1685 36.25 17.5 36.25H21.25C21.5815 36.25 21.8995 36.1183 22.1339 35.8839C22.3683 35.6495 22.5 35.3315 22.5 35V30H27.5V35C27.5 35.3315 27.6317 35.6495 27.8661 35.8839C28.1005 36.1183 28.4185 36.25 28.75 36.25H32.5C32.8315 36.25 33.1495 36.1183 33.3839 35.8839C33.6183 35.6495 33.75 35.3315 33.75 35V26.25H36.25C36.5815 26.25 36.8995 26.1183 37.1339 25.8839C37.3683 25.6495 37.5 25.3315 37.5 25C37.4983 24.8141 37.4542 24.6311 37.3713 24.4648C37.2884 24.2985 37.1686 24.1532 37.0213 24.04C32.73 20.425 25 13.75 25 13.75Z" fill="#404040"/>
      </svg>
      <div class="menu">
        <router-link to="/dash">
          Home
        </router-link>
        <router-link to="/panel">
          Panel
        </router-link>
        <router-link to="/edition">
          Edition
        </router-link>
        <router-link to="/blog">
          Blog
        </router-link>
        <router-link to="/users" v-if="user.att.permits == 'admin'">
          Users
        </router-link>
      </div>
      
      <div class="profile dropdown" data-toggle="dropdown" aria-expanded="false">
        
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" rx="30" fill="#EBEBEB"/>
          <path d="M24.4616 23.6842C24.4616 26.8181 26.9465 29.3684 30 29.3684C33.0536 29.3684 35.5385 26.8181 35.5385 23.6842C35.5385 20.5503 33.0536 18 30 18C26.9465 18 24.4616 20.5503 24.4616 23.6842ZM39.8462 42H41.0769V40.7368C41.0769 35.8623 37.2111 31.8947 32.4616 31.8947H27.5385C22.7877 31.8947 18.9231 35.8623 18.9231 40.7368V42H39.8462Z" fill="#404040"/>
        </svg>
        <p>{{user.att.user}}</p>
      </div>
      <div class="dropdown-menu">
        <a class="dropdown-item details" >
          <span>Details:</span> <br>
          {{ user.att.permits }}
        </a>
        <a class="dropdown-item" v-on:click="logOut()">
          <svg xmlns="http://www.w3.org/2000/svg" style=" width: 25px; height: auto; margin: 0 10px 0 0;" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#404040" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="46" stroke-dashoffset="46" d="M16 5V4C16 3.44772 15.5523 3 15 3H6C5.44771 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H15C15.5523 21 16 20.5523 16 20V19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="46;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M10 12h11" opacity="0"><set attributeName="opacity" begin="0.6s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M21 12l-3.5 -3.5M21 12l-3.5 3.5" opacity="0"><set attributeName="opacity" begin="0.8s" to="1"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"/></path></g></svg>
          Log Out
        </a>
      </div>
    </div>
  </div>
</template>

<script>
//tools
import Vuex from 'vuex'

export default {
  name: "paper-header",
  data() {
    return {
      render:false
    };
  },
  created(){
    if (this.user) {
      this.render = true
    }else{
      this.logOut()
    }
  },
  mounted() {
  },
  methods: {
    ...Vuex.mapMutations(['setUser']),
    logOut(){
      this.$router.push({ path: '/' })
      setTimeout(() => {
        
        this.setUser(null)
      }, 100);
    }
  },
  computed:{
    ...Vuex.mapState(['user'])
  }
};
</script>

<style></style>