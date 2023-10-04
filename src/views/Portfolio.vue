<template>
   <header-footer>
      <section class="showcase">
         <div class=" container-in wrap">
            <h1>Some of our projects .</h1>
         </div>
      </section>
      <section class="projects container-in centerFlex wrap">
         <div class="col col-md-4" v-for="(project, index) in projects" :key="index">
            <a class="block" :href="project.url" target="_blank" >
               <img :src="require('./assets/proyects/'+project.image)" alt="./assets/proyects/molina-web.jpg">
               <div class="text">
                  <h4>{{ project.name }}</h4>
                  <p>{{ project.description }}</p>
               </div>
            </a>
         </div>
         <div class="container-in centerFlex wrap">
         </div>
      </section>
   </header-footer>
</template>
<script>   
// @ is an alias to /src
import HeaderFooter from '@/website/components/HeaderFooter.vue'; // @ is an alias to /src

export default {
   name: 'web-portafolio',
   components:{
      HeaderFooter 
   },
   data() {
      return {
         projects:[
            {
               url:'https://grupomolina.com.gt/en',
               image:'molina-web.jpg',
               name:'Grupo Molina',
               description:'Compañía productora de banano con reconocimiento a nivel mundial.'
            },
            {
               url:'https://www.rosalescastro.com/',
               image:'rosalescastro-web.jpg',
               name:'Rosales Castro Inversiones S.A.',
               description:'Empresa promotora de proyectos habitacionales por medio de asesoría inmobiliaria.'
            },
            {
               url:'https://remisa.com/',
               image:'remisa-web.jpg',
               name:'Renta de Maquinaria Industrial S. A.',
               description:'Especializados en el manejo y almacenaje de carga y distribuidores autorizados de UniCarriers.'
            },
            {
               url:'https://agrosemillas.com.gt/',
               image:'agrosemillas-web.jpg',
               name:'Agrosemillas',
               description:'Empresa con más de 30 años de experiencia en el mercado, dedicados a la importación de Semillas Certificadas de Ejote, Arveja y Hortalizas. '
            },
            {
               url:'https://bodegasenalquiler.com/',
               image:'bodegasenalquiler-web.jpg',
               name:'Bodegas en Alquiler',
               description:'Plataforma desarrollada para la empresa Acción Inmobiliaria, promotores de bodegas en Guatemala.'
            },
            {
               url:'https://oftalmoclinicas.com/',
               image:'oftalmo-web.jpg',
               name:'Clínicas Oftalmológicas',
               description:'Médicos especialistas oftalmólogos con más de 35 años en el mercado médico.'
            },
            {
               url:'https://tecnosoluciones.com.gt/',
               image:'tecnosoluciones-web.jpg',
               name:'Tecnosoluciones',
               description:'Tecnología e innovación.'
            },
            {
               url:'https://www.aplitegua.com.gt/',
               image:'aplitegua-web.jpg',
               name:'Aplitegua',
               description:'Empresa proveedora de productos de electricidad, neumática y control eléctrico.'
            },
            {
               url:'https://wearmet.com/',
               image:'wearmet-web.jpg',
               name:'Medicine Everyday Therapy',
               description:'Tienda de Moda en linea.'
            },
            {
               url:'https://maruagro.com/',
               image:'maruagro-web.jpg',
               name:'IDH S.A. (Maruyama)',
               description:'Distribuidores autorizados de maquinaria agrícola.'
            },
            {
               url:'https://happypeople.gt/es',
               image:'happypeople-web.jpg',
               name:'happypeople',
               description:'Organización de jóvenes que apoyan a productores locales en cada viaje.'
            },
            {
               url:'https://grupomuratori.com/',
               image:'muratori-web.jpg',
               name:'Grupo Muratori',
               description:'Especializados en construir puentes y edificos en Guatemala.'
            },
            {
               url:'https://piersan.com/es',
               image:'piersan-web.jpg',
               name:'Piersan Centroamericana S.A.',
               description:'Empresa Farmaceutica 100% Guatemalteca con posicionamiento en toda Centroamérica.'
            },
            {
               url:'https://lovolguatemala.com/',
               image:'lovol-web.jpg',
               name:'Lovol Guatemala',
               description:'Distribuidor autorizado de tractores FOTON LOVOL.'
            },
            {
               url:'https://panacomsa.com/es',
               image:'panacom-web.jpg',
               name:'Panamericana de Comercio S.A.',
               description:'Expertos en Especialidades Químicas.'
            },
            {
               url:'https://productosmiguels.com/',
               image:'miguels-web.jpg',
               name:'Productos Miguels',
               description:'empresa guatemalteca que lleva más de 45 años dedicándose al procesamiento de las mejores conservas de frutas y verduras con los más altos estándares de calidad.'
            },
            {
               url:'https://ican-b.com/en',
               image:'icanb-web.jpg',
               name:'Ican B',
               description:'Especialistas en apoyar a niños con autismo en San Francisco.'
            },
            {
               url:'https://dejedefumarfacil.com/',
               image:'allencarr-web.jpg',
               name:'Allen Carr Guatemala',
               description:'Di si a tu salud y deja de fumar sin esfuerzo...'
            },
            {
               url:'http://coysosa.com/',
               image:'coysosa-web.jpg',
               name:'Contro y Sostenibilidad',
               description:'Automatización e ingeniería en un solo lugar.'
            },
            {
               url:'http://daisochem.com/',
               image:'daisochem-web.jpg',
               name:'DaisoChem',
               description:'Productos y Sistemas para limpieza y sanitización.'
            },
         ]
      }
   }, 
   created() {
      setTimeout(() => {
         this.render = true
      }, 1000);
   },
   methods: {
   },
}
</script>
   