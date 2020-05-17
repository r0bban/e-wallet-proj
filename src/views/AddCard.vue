<template>
  <section class="add-card">
    <Top :pageTitle = "'ADD NEW CARD'"/>
    <Card :title="'NEW CARD'"/>
  </section>
</template>

<script>
import Top from "@/components/Top";
import Card from "@/components/Card";

export default {
  name: "AddCard",
  components: {
    Top: Top,
    Card: Card
  }
};
</script>

<style lang="scss" scoped>
</style>