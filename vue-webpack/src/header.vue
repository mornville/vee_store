<template>
<header class="tc pv4 pv5-ns">
  <img src="http://tachyons.io/img/logo.jpg" class="br3 ba b--black-10 h3 w3" alt="avatar">
  <h1 class="f5 f4-ns fw6 black-70" style="font-size:2em">{{ store_name}}</h1>
  <h2 class="f6 black-70 fw2 ttu tracked">{{ store_desc }}</h2>
</header>

</template>
<script>
export default {
   props: ['store_name','store_desc']
}
</script>

