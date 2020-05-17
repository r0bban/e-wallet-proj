<template>
  <section class="home">
    <Top :pageTitle="'E-WALLET'"/>
    <Card :title="'ACTIVE CARD'" :card="activeCard" activeMode/>
    <CardStack :cards ="cardStack"/>
  </section>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardStack from "@/components/CardStack";



export default {
  name: "Home",
  components: {
    Top: Top,
    Card: Card,
    CardStack: CardStack
  },
  computed:{
    activeCard(){
      return this.$store.getters.getActiveCard
    },
    cardStack(){
      return this.$store.getters.getCardStackList
    }
  }
};
</script>

<style lang="scss" scoped>
</style>