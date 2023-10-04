<template>
  <div id="slider" :class="'slider-wrap '+type">
    <div class="slide">
      <div class="numbertext">1 / 3</div>
      <img src="https://via.placeholder.com/1000" style="width: 100%" />
    </div>

    <div class="slide">
      <div class="numbertext">2 / 3</div>
      <img src="https://via.placeholder.com/1050" style="width: 100%" />
    </div>

    <div class="slide">
      <div class="numbertext">3 / 3</div>
      <img src="https://via.placeholder.com/1100" style="width: 100%" />
    </div>
  </div>
</template>

<script>
//tools
export default {
  name: "paper-slider",
  props: {
    name: {
      type: String,
      default: "null",
    },
    type: {
      type: String,
      default: "fadeSlide",
    },
  },
  data() {
    return {
      menu: {
        show: false,
        toolTip: "Menu",
      },
      slideIndex:0,
    };
  },
  mounted() {
    setTimeout(() => {
      
      console.clear()
      this.slider() 
    }, 1000);
  },
  methods: {
    slider() {
      let i;
      let slider = document.getElementById("slider").childNodes;
      console.log(document.getElementById("slider"));
      //let slides = document.getElementsByClassName("mySlides");
      //let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slider.length; i++) {
        //slider[i].style.display = "none";  
        console.log(slider[i]);
        if (slider[i].classList) {
          
          slider[i].classList.remove('show');
        }
        
      }
      this.slideIndex++;
      if (this.slideIndex > slider.length) {this.slideIndex = 1}    
      //for (i = 0; i < dots.length; i++) {
        //  dots[i].className = dots[i].className.replace(" active", "");
        //}
        slider[this.slideIndex-1].classList.add('show');
      //slider[this.slideIndex-1].style.display = "block";  
      //dots[this.slideIndex-1].className += " active";
      setTimeout(this.showSlides, 5000); // Change image every 2 seconds
    }
  },
};
</script>

<style></style>