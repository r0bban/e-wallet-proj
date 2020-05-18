<template>
  <section class="card-stack">
    <Card
      stackMode
      v-for="(card, index) in cards"
      :key="card.cardNumber"
      :card="card"
      :stackIndex="index"
      :style="{'z-index': index}"
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
  data() {
    return {
      //   cardsInStack: this.cards
    };
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
  }
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
  display: grid;
  grid-auto-rows: 4vh;
  margin: 10px auto;
}

@media only screen and (min-width: 445px) {
  .card-stack {
    grid-auto-rows: 40px;
  }
}
// .card-stack {
//   display: flex;
//   justify-content: center;
//   position: relative;
//   margin: 10px auto;
//   height: 400px;
// }
</style>