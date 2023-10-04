<template>
   <header-footer>
      <section class="showcase">
         <div class="container-in centerFlex wrap">
            <h1>BODY</h1>
         </div>
      </section>
   </header-footer>
</template>

<script> 
// @ is an alias to /src
import HeaderFooter from '@/website/components/HeaderFooter.vue'; // @ is an alias to /src

export default {
   name: 'web-about',
   components:{
      HeaderFooter 
   },
   data() {
      return {
      }
   },
}
</script>
