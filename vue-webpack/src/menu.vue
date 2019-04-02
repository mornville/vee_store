<template>

        <div class="row">
                
            <div class="col-lg-4" style="padding:20px">
                <starters title="STARTERS"></starters>

            </div>
            
             <div class="col-lg-4" style="padding:20px">
               
                 <mainCourse title="MAINCOURSE"></mainCourse>
            </div>
              <div class="col-lg-4" style="padding:20px">
                <desarts title="DESARTS"></desarts>

            </div>

            <div id="mybutton">
                <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black" href="#0" style="color:white;text-decoration:none" >Cart (  )</a>
            </div>
            
        </div>

</template>
<script>
import starters from './starters.vue'
import mainCourse from './mainCourse.vue'
import desarts from './desart.vue';

    export default {
    name: 'menu',
    components:{
        starters,mainCourse,desarts
    },

}
</script>
<style>
.feedback {

  padding: 10px 20px;
  
}

#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
}

</style>
