<template>
  <div :class="{'burger ':true, 'show':menu.show, 'shadow-block': !menu.show} " id="floatingBurger" v-on:click="menu.show = !menu.show" v-on:mouseover="tools('toolTip', 'floatingBurger')" data-toggle="tooltip" data-placement="right" :title="menu.tool">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33333 13.3333H9.33333C9.68696 13.3333 10.0261 13.1929 10.2761 12.9428C10.5262 12.6928 10.6667 12.3536 10.6667 12V1.33333C10.6667 0.979711 10.5262 0.640573 10.2761 0.390524C10.0261 0.140476 9.68696 0 9.33333 0H1.33333C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333V12C0 12.3536 0.140476 12.6928 0.390524 12.9428C0.640573 13.1929 0.979711 13.3333 1.33333 13.3333ZM0 22.6667C0 23.0203 0.140476 23.3594 0.390524 23.6095C0.640573 23.8595 0.979711 24 1.33333 24H9.33333C9.68696 24 10.0261 23.8595 10.2761 23.6095C10.5262 23.3594 10.6667 23.0203 10.6667 22.6667V17.3333C10.6667 16.9797 10.5262 16.6406 10.2761 16.3905C10.0261 16.1405 9.68696 16 9.33333 16H1.33333C0.979711 16 0.640573 16.1405 0.390524 16.3905C0.140476 16.6406 0 16.9797 0 17.3333V22.6667ZM13.3333 22.6667C13.3333 23.0203 13.4738 23.3594 13.7239 23.6095C13.9739 23.8595 14.313 24 14.6667 24H22.6667C23.0203 24 23.3594 23.8595 23.6095 23.6095C23.8595 23.3594 24 23.0203 24 22.6667V13.3333C24 12.9797 23.8595 12.6406 23.6095 12.3905C23.3594 12.1405 23.0203 12 22.6667 12H14.6667C14.313 12 13.9739 12.1405 13.7239 12.3905C13.4738 12.6406 13.3333 12.9797 13.3333 13.3333V22.6667ZM14.6667 9.33333H22.6667C23.0203 9.33333 23.3594 9.19286 23.6095 8.94281C23.8595 8.69276 24 8.35362 24 8V1.33333C24 0.979711 23.8595 0.640573 23.6095 0.390524C23.3594 0.140476 23.0203 0 22.6667 0H14.6667C14.313 0 13.9739 0.140476 13.7239 0.390524C13.4738 0.640573 13.3333 0.979711 13.3333 1.33333V8C13.3333 8.35362 13.4738 8.69276 13.7239 8.94281C13.9739 9.19286 14.313 9.33333 14.6667 9.33333Z" fill="white"/>
    </svg>
  </div>
  <div :class="{'menu shadow-block wrap show':true, 'show':menu.show}" >
    <img class="logo" src="@/assets/logoWhite.svg" alt="">
    <div class="search centerFlex">
      <div class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.84236 14.684C9.36049 14.6837 10.8349 14.1755 12.0307 13.2403L15.7906 17L17 15.7907L13.2401 12.031C14.1758 10.8351 14.6844 9.36043 14.6847 7.84199C14.6847 4.06949 11.6151 1 7.84236 1C4.06965 1 1 4.06949 1 7.84199C1 11.6145 4.06965 14.684 7.84236 14.684ZM7.84236 2.7105C10.6725 2.7105 12.9741 5.01197 12.9741 7.84199C12.9741 10.672 10.6725 12.9735 7.84236 12.9735C5.01219 12.9735 2.71059 10.672 2.71059 7.84199C2.71059 5.01197 5.01219 2.7105 7.84236 2.7105Z" fill="#FDFDFD" stroke="#FDFDFD"/>
        </svg>
      </div>
      <input type="text">
      <div class="x">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5001 0L5.99947 4.5L1.49987 0L0 1.5L4.4996 6L0 10.5L1.49987 12L5.99947 7.5L10.5001 12L12 10.5L7.5004 6L12 1.5L10.5001 0Z" fill="#5A5A5A"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
//tools
import * as tools from '@/store/tools.js'
export default {
  name: "paper-menu",
  props: {
    data: {
      type: String,
      default: "null",
    },
  },
  data() {
    return {
      menu:{
        show: false,
        toolTip:'Menu',
      }
    }
  },
  mounted() {
    /*dragElement(document.getElementById("floatingBurger"));
    function dragElement(element) {
      let screen = document.getElementById("bgDash");
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

      element.onmousedown = dragMouseDown;

      function dragMouseDown(event) {
        event = event || window.event;
        event.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = event.clientX;
        pos4 = event.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        //element.style.right = 'min('+screen.offsetWidth+'px,0px)'
        document.onmousemove = elementDrag;
      }

      function elementDrag(event) {
        element.style.borderRadius = '10px'
        event = event || window.event;
        event.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        // set the element's new position:
        //element.style.top = element.offsetTop - pos2 + "px";
        //element.style.left = element.offsetLeft - pos1 + "px";
        element.style.top ='min('+(screen.offsetHeight -60)+'px,'+(element.offsetTop - pos2)+'px)';
        element.style.left ='min('+(screen.offsetWidth -60)+'px,'+(element.offsetLeft - pos1)+'px)';
      }

      function closeDragElement() {
        
        let position = [
          (element.offsetTop *100) / screen.offsetHeight,
          100 - ((element.offsetLeft *100) / screen.offsetWidth),
          100 - ((element.offsetTop *100) / screen.offsetHeight),
          (element.offsetLeft *100) / screen.offsetWidth,
        ]
        switch (position.indexOf(Math.min(...position)) ) {
          case 0: 
            element.style.top = '0px'; 
            element.style.borderRadius = '0 0 10px 10px';
          break;
          case 1: 
            element.style.left = screen.offsetWidth-60+'px'; 
            element.style.borderRadius = '10px 0 0 10px';
          break;
          case 2: 
            element.style.top = screen.offsetHeight-60+'px';
            element.style.borderRadius = '10px 10px 0 0';
          break;
          case 3: 
            element.style.left = '0px';
            element.style.borderRadius = '0 10px 10px 0';
          break;
          
        }
        //console.log(Math.min(position.top, position.bottom));
        //console.log(Math.min(position.left, position.right));

        //let direction = "";

        //stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }*/
  },
  methods: {
    tools(tool, data){
      switch (tool) {
        case 'popUp': tools.popUp(data); break;
        case 'toolTip': tools.toolTip(data); break;
        default: tools.popUp(data); break;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
