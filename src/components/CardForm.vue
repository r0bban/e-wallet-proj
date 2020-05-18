<template>
  <section class="register-card-form">
    <div class="wrapper card-number">
      <p class="label card-number">CARD NUMBER</p>
      <input class="data card-number" type="text" v-model="card.cardNumber" />
    </div>

    <div class="wrapper card-holder">
      <p class="label card-holder">CARDHOLDER NAME</p>
      <input
        class="data card-holder"
        type="text"
        v-model="card.cardHolderName"
        placeholder="FIRSTNAME LASTNAME"
      />
    </div>

    <div class="wrapper validation">
      <div class="wrapper valid-thru">
        <p class="label valid-thru">VALID THRU</p>
        <input class="label valid-thru" type="text" v-model="card.ValudThru" />
      </div>
      <div class="wrapper ccv-code">
        <p class="label ccv-code">CCV</p>
        <input class="data ccv-code" type="text" v-model="card.ccvVode" />
      </div>
    </div>
    <div class="wrapper vendor">
              <p class="label vendor">VENDOR</p>
      <select v-model="card.vendor" name="vendors" id="vendors">
        <option
          v-for="vendor in vendorList"
          :key="vendor.id"
          v-bind:value="vendor.id"
        >{{vendor.name}}</option>
      </select>
    </div>
    <button class="dark" v-on:click="addCard">ADD CARD</button>
  </section>
</template>

<script>
export default {
  props: {
    card: Object
  },
  computed: {
    vendorList() {
      return this.$store.getters.getVendorList;
    }
  },
  methods: {
    addCard() {
      this.$store.dispatch("addNewCard", this.card);
      this.routeToHome();
    },
    routeToHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style lang="scss" scoped>
.register-card-form {
  font-family: "PT Mono", monospace;
  width: 90vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 10px auto 0 auto;
  

  .label {
    margin: 0 0 2px 0;
    font-size: 10px;
    text-align: left;
    font-weight: 700;
  }

  input,
  select {
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 7px;
    height: 2rem;
    padding-left: 0.5rem;
    font-size: 1rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    margin:3px;

    &.validation {
      flex-direction: row;
      justify-content: space-between;
      margin:0;

      .wrapper.valid-thru,
      .wrapper.ccv-code {
        width: 45%;
      }
    }
  }
  button{
    margin-top: 15px
  }
}
</style>