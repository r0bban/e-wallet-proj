<template>
  <v-touch tag="section" class="card-stack"
  v-on:swipedown="rotateCardStackDownwards"
  v-on:swipeup="rotateCardStackUpwards">
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
  }
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
</style>