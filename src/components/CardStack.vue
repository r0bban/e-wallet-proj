<template>
  <section class="card-stack">
    <Card
      stackMode
      v-for="(card, index) in cards"
      :key="card.cardNumber"
      :card="card"
      :stackIndex="index"
      :style="{top: index * 40 + 'px'}"
    />
  </section>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "CardStack",
  components: {
    Card: Card
  },
  data(){
      return{
        //   cardsInStack: this.cards
      }
  },
  props: {
    cards: Array
  },
  computed: {
    // cardsInStack() {
    //   return this.$store.getters.getCardList.filter(
    //     card => card.cardNumber != this.$store.getters.getActiveCardNo
    //   );
    // }
  },
//    beforeMount(){
//       this.cardsInStack = this.$store.getters.getCardList.filter(
//         card => card.cardNumber != this.$store.getters.getActiveCardNo
//       );
//   },
//   beforeUpdate(){
//       this.cardsInStack = this.$store.getters.getCardList.filter(
//         card => card.cardNumber != this.$store.getters.getActiveCardNo
//       );
//   }
};
</script>

<style lang="scss" scoped>
.card-stack {
  display: flex;
  justify-content: center;
  position: relative;
  margin: 10px auto;
  height: 300px;
  // background: chocolate;
}
</style>