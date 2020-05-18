<template>
  <section class="home">
    <Top :pageTitle="'E-WALLET'" />
    <Card :title="'ACTIVE CARD'" :card="activeCard" activeMode />
    <CardStack :cards="cardStack" />
    <router-link :to="{name: 'AddCard'}" tag="button" class="add-card">ADD CARD</router-link>
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
  computed: {
    activeCard() {
      return this.$store.getters.getActiveCard;
    },
    cardStack() {
      return this.$store.getters.getCardStackList;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  .card-stack {
    margin-top: 1.2vh;
  }
  button.add-card {
    margin-top: 49vw;
    width: 90vw;
    max-width: 400px;
  }
}

@media only screen and (min-width: 445px) {
  .home {
    justify-content: flex-start;
    button.add-card {
      margin-top: 236px;
    }

    .card-stack {
      margin-top: 30px;
    }
  }
}
</style>