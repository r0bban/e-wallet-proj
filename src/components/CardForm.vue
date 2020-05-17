<template>
  <input type="text"
  v-model="card.cardNumber">
</template>

<script>
export default {
    props:{
        card: Object
    }

}
</script>

<style>

</style>