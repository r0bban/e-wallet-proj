<template>
  <v-touch tag="section" class="card-stack"
  v-on:swipedown="rotateCardStackDownwards"
  v-on:swipeup="rotateCardStackUpwards">
  <p class="not-shown-cards"
  v-if="notDisplayedCards">{{notDisplayedCards}} more cards</p>
    <Card
      stackMode
      v-for="(card, index) in cards"
      :key="card.cardNumber"
      :card="card"
      :stackIndex="index"
      :style="{'z-index': index}"
    />
  </v-touch>
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
    };
  },
  methods: {
    rotateCardStackDownwards() {
      this.$store.commit("rotateCardStackDownwards");
    },
    rotateCardStackUpwards() {
      this.$store.commit("rotateCardStackUpwards");
    }
  },
  props: {
    cards: Array
  },
  computed: {
    notDisplayedCards(){
      if(this.$store.getters.getCardStackList.length>3){
        return this.$store.getters.getCardStackList.length-3;
      }
      return false
    }
  }
};
</script>

<style lang="scss" scoped>
.card-stack {
  display: grid;
  grid-auto-rows: 4vh;
  margin: 10px auto;
  position: relative;

  .not-shown-cards{
    position: absolute;
    background: rgba(255, 255, 255, 0.877);
    left: 30px;
    z-index: 99;
    padding: 3px 10px;
    border: 0 none white;
    border-radius: 10px;
  }

}

@media only screen and (min-width: 445px) {
  .card-stack {
    grid-auto-rows: 40px;
  }
}
</style>