<template>
    
    <div>
        <h5 style="letter-spacing:3px;text-align:center">{{ title }}</h5>
                <br>
                <main class="mw6 center"   v-for="i in deserts ">
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
                            <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit" @click="reverse()">+ Add To Cart</button>
                            </form>
                        </div>
                        </article>

                </main>
    </div>
</template>

<script>
export default {
    props: ['title','type'],
       data() {
    return{
    
     deserts:[
        {name: 'Mango', cost:70},
        {name: 'Strawberry', cost:70},
        {name: 'ButterScotch', cost:70},
        {name: 'Black Currant', cost:70},
        {name: 'Vanilla', cost:70}
    ],
    }
    
  }
}
</script>

<style>

</style>
