<template>
  <form class="register-card-form">
    <div class="wrapper card-number">
      <p class="label card-number">CARD NUMBER</p>
      <input class="data card-number" type="number" v-model="card.cardNumber" placeholder="1234 1234 1234 1234" />
    </div>

    <div class="wrapper card-holder">
      <p class="label card-holder">CARDHOLDER NAME</p>
      <input
        class="data card-holder"
        type="text"
        v-model="card.cardHolderName"
        placeholder="FIRSTNAME LASTNAME"
        maxlength="23"
      />
    </div>

    <div class="wrapper validation">
      <div class="wrapper valid-thru">
        <p class="label valid-thru">VALID THRU</p>
        <input class="data valid-thru" type="number" v-model="card.ValudThru" @input="validThruValidator" />
      </div>
      <div class="wrapper ccv-code">
        <p class="label ccv-code">CCV</p>
        <input class="data ccv-code" type="number" v-model="card.ccvVode" @input="ccvCodeValidator"/>
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
  </form>
</template>

<script>
export default {
  props: {
    card: Object
  },
  computed: {
    vendorList() {
      return this.$store.getters.getVendorList;
    },
    // ccvCodeValidator(event){
    //   return event.target.value+1
    // }
  },
  methods: {
    addCard() {
      this.$store.dispatch("addNewCard", this.card);
      this.routeToHome();
    },
    routeToHome() {
      this.$router.push({ name: "Home" });
    },
    ccvCodeValidator(event){
      const incomingValue = event.target.value
      if(this.card.ccvVode.length < 4){
        this.card.ccvVode = incomingValue
      } else{this.card.ccvVode = incomingValue.substring(0,3)}
    },
    validThruValidator(event){
      const incomingValue = event.target.value
      if(this.card.ValudThru.length < 5){
        this.card.ValudThru = incomingValue
      } else{this.card.ValudThru = incomingValue.substring(0,4)}
    },
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
    background: white;
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