<template>

        <div class="row">
                
            <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center">STARTERS</h5>
                <br>
                <main class="mw6 center"   v-for="i in starters">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/tikka.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ i.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60"> {{ i.cost }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit" @click="reverse()">+ Add To Cart</button>
                            </form>
                        </div>
                        </article>

                </main>

            </div>
            
             <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center">MAIN COURSE</h5>
                <br>
                <main class="mw6 center"   v-for="i in main">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/chick.jpeg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ i.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60"> {{ i.cost }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit" @click="reverse()" >+ Add To Cart</button>
                            </form>
                        </div>
                        </article>

                </main>

            </div>
              <div class="col-lg-4" style="padding:20px">
                <h5 style="letter-spacing:3px;text-align:center">Deserts</h5>
                <br>
                <main class="mw6 center"   v-for="i in deserts">
                        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div class="dtc w2 w3-ns v-mid">
                            <img src="src/assets/black.jpg" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
                        </div>
                        <div class="dtc v-mid pl3">
                            <h1 class="f6 f5-ns fw6 lh-title black mv0">{{ i.name }} </h1>
                            <h2 class="f6 fw4 mt0 mb0 black-60"> {{ i.cost }}</h2>
                        </div>
                        <div class="dtc v-mid">
                            <form class="w-100 tr">
                            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit"  @click="reverse()">+ Add To Cart</button>
                            </form>
                        </div>
                        </article>

                </main>

            </div>

            <div id="mybutton">
                <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black" href="#0" style="color:white;text-decoration:none">Cart ( {{ total }} )</a>
            </div>
            
        </div>

</template>
<script>
export default {
   data() {
    return{
    total:0,
    starters: [
      { name : 'Paneer Manchurian', cost:120 },
      { name: 'Gobi Manchurian', cost:90 },
      { name: 'Noodles', cost: 140 }
    ],
    main: [
      { name : 'Paneer Tikka', cost: 220 },
      { name: 'Panner Butter', cost: 120 },
       { name: 'Chicken Masala', cost: 320 },
        { name: 'TAndoori Naan', cost: 120 },
         { name: 'Lolipop', cost:1200 },
          { name: 'Biryani', cost: 70 },
    ],
    deserts:[
        {name: 'Mango', cost:70},
        {name: 'Strawberry', cost:70},
        {name: 'ButterScotch', cost:70},
        {name: 'Black Currant', cost:70},
        {name: 'Vanilla', cost:70}
    ],

    
    }
    
  },
  methods:{
       reverse(){
        this.total++;
    }
  }
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
