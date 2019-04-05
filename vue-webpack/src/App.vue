import Message from './Message.vue';


<template>
  <div id="app">

     <Header store_name="Sadda Adda" store_desc="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" style="padding:20px"></Header>
  

    <div class="container">   

  
  
        <Menu></Menu>
        <br><br><br><br>
    </div>
    <foot></foot>
  </div>
  
 
</template>


<style>

</style>
<script>
    import Input from './input.vue';
    import Message from './Message.vue';
    import Header from './header.vue';
    import Menu from './menu.vue';
    import foot from './footer.vue';    


    export default{
        name: 'App',
        components: {
            Input,Message,Header,Menu,foot
        },
        
    }


</script>

