<template>
<header class="sans-serif">
  <div class="cover bg-left bg-center-l" style="background-image: url('src/assets/menu.jpg')">
    <div class="bg-black-80 pb5 pb6-m pb7-l">
      <nav class="dt w-100 mw8 center"> 
   
       
      </nav> 
      <div class="tc-l mt4 mt5-m mt6-l ph3">
        <h1 class="f2 f1-l fw2 white-90 mb0 lh-title" style="text-align:center;text-transform:uppercase;letter-spacing:3px;" >{{ store_name}}</h1>
        <h2 class="fw1 f3 white-80 mt3 mb4" style="text-align:center">{{ store_desc }}</h2>
      
      </div>
    </div>
  </div> 
</header>


</template>
<script>
export default {
   props: ['store_name','store_desc']
}
</script>

