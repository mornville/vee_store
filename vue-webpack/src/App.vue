import Message from './Message.vue';


<template>
  <div id="app">
     <Header store_name="Store Ka Naam" store_desc="Something About this store Timing etc"></Header>
     <br><br>

    <div class="container">   
        <br><br><br><br>
        <h1 class="f5 f4-ns fw6 mid-gray" style="text-align:center;letter-spacing:2px;font-size:3.5em">The Menu</h1>
        <h2 class="f6 gray fw2 ttu tracked" style="text-align:center">You'll Love Our Food</h2>
        <br><br><br><br>
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