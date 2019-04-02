import Message from './Message.vue';


<template>
  <div id="app" class="container">

    <Header store_name="Store Ka Naam" store_desc="Something About this store Timing etc"></Header>
    <hr>
    <h1 style="text-align:center">Menu</h1>
    <hr><br><br>
    <Menu></Menu>

  </div>
 
</template>


<style>

</style>
<script>
    import Input from './input.vue';
    import Message from './Message.vue';
    import Header from './header.vue';
    import Menu from './menu.vue';

    export default{
        name: 'App',
        components: {
            Input,Message,Header,Menu
        },
        
    }


</script>