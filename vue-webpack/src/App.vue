import Message from './Message.vue';


<template>
  <div id="app" class="container">

    <Header></Header>
<hr>
    </div>
  </div>
</template>


<style>

</style>
<script>
    import Input from './input.vue';
    import Message from './Message.vue';
    import Header from './header.vue';

    export default{
        name: 'App',
        components: {
            Input,Message,Header
        }
    }


</script>