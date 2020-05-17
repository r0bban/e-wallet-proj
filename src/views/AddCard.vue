<template>
  <section class="add-card">
    <Top :pageTitle = "'ADD NEW CARD'"/>
    <Card :card="card" :title="'NEW CARD'" editMode/>
    <CardForm :card="card"/>
  </section>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";

export default {
  name: "AddCard",
  data(){
    return{
      card:{
        cardNumber: "",
        cardHolderName: "",
        ValudThru: "",
        ccvVode: "",
        vendor: "NO_VENDOR"
      }
    }
  },
  components: {
    Top: Top,
    Card: Card,
    CardForm: CardForm
  }
};
</script>

<style lang="scss" scoped>
</style>