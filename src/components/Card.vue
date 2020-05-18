<template>
  <section class="card"
  :class="{'inStack' : stackMode}">
    <p class="title" v-if="title">{{title}}</p>
    <article
      v-bind:style="{backgroundImage: bgColor}"
      class="credit-card"
      :class="{'edit' : editMode, 'active' : activeMode}"
      v-on:click="clickHandler"
    >
      <div class="icon-logo-wrapper">
        <img class="chip-icon" :src="require('@/assets/'+chipIcon)" />
        <img class="vendor-logo" :src="require('@/assets/'+vendor.logo)" />
      </div>
      <p class="card-number">{{styledCardNumber}}</p>
      <div class="label-wrapper">
        <p class="label card-holder">CARDHOLDER NAME</p>
        <p class="label valid-thru">VALID THRU</p>
      </div>
      <div class="data-wrapper">
        <p class="data card-holder">{{styledCardHolderName}}</p>
        <p class="data valid-thru">{{validThruStyled}}</p>
      </div>
    </article>
  </section>
</template>

<script>
console.log;
export default {
  name: "Card",
  data() {
    return {};
  },
  props: {
    title: String,
    card: Object,
    activeMode: Boolean,
    editMode: Boolean,
    stackMode: Boolean,
    stackIndex: Number
  },
  methods: {
    groupStringBySize(str, size) {
      str = str
        .toString()
        .split(" ")
        .join("");
      let output = "";
      for (let i = 0; i < str.length; i++) {
        output += str.substring(i, i + size) + " ";
        i = i + 3;
      }
      return output;
    },
    clickHandler(){
      if(this.stackMode){
        // let comObject
        this.$store.dispatch('swapActiveCard', {index: this.stackIndex, card: this.card})
      }
    }
  },
  computed: {
    bgColor() {
      if (this.editMode || this.activeMode) {
          return `linear-gradient(to left, ${this.vendor.bgColor}D9, ${this.vendor.bgColor})`;
      } else if(this.stackMode) {
        return `linear-gradient(to top right, ${this.vendor.bgColor}D9, ${this.vendor.bgColor})`;
        }  else {return `linear-gradient(to top right, purple, gray)`}
    },
    styledCardNumber() {
      if(!this.card.cardNumber){
      return "XXXX XXXX XXXX XXXX"
      }
      return this.groupStringBySize(this.card.cardNumber, 4);
    },
    vendor() {
      return this.$store.state.vendors[this.card.vendor];
    },
    chipIcon() {
      if (this.editMode || this.activeMode) {
        return "chip-dark.svg";
      } else return "chip-light.svg";
    },
    validThruStyled() {
      let output = `${this.card.ValudThru.substring(0,2)}/${this.card.ValudThru.substring(2, 4)}`;
      return output;
    },
    styledCardHolderName(){
      if(!this.card.cardHolderName){
      return "FIRSTNAME LASTNAME"
      }
      return this.card.cardHolderName;
    }
  }
};
</script>

<style lang="scss" scoped>
p,
img {
  margin: 0;
  padding: 0;
  // color: #8b8b8b;
}

.card {
  margin: 0 auto;
  max-width: min-content;
  
  // &.inStack{
  //     position: absolute;
  // }

  .title{
    font-size: 0.676rem;
    font-weight: 790;
    color:gray;
    margin-bottom: 10px;
  }
  .credit-card {
    display: flex;
    flex-direction: column;
    font-family: "PT Mono", monospace;
    width: 90vw;
    max-width: 400px;
    height: 56.75vw;
    max-height: 252px;
    border: 0 none white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.185);
    color: white;
    text-shadow: -0.7px -0.7px gray;
    padding: 4vw;
    box-sizing: border-box;
    background: white;

    .icon-logo-wrapper {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      align-items: flex-start;

      .chip-icon {
        width: 12.1vw;
        max-width: 53.72px;
        align-self: flex-end;
      }
      .vendor-logo {
        width: 7.5vw;
        max-width: 33.3px;
      }
    }

    .card-number {
      font-size: 7vw;
      margin: 2.8vw 0 8vw 0;
    }

    .label-wrapper,
    .data-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .label {
      font-size: 2.8vw;
      margin-bottom: 1vw;
    }

    .data {
      font-size: 4.3vw;
      font-weight: 595;
    }

    &.edit,
    &.active {
      color: black;
      text-shadow: none;
    }

  }
}

@media only screen and (min-width: 445px) {
  .card {
    .credit-card {
          padding: 17.76px;

      .chip-icon {
        width: 53.72px;
      }
      .vendor-logo {
        width: 33.3px;
      }

      .card-number {
        font-size: 31.2px;
        font-weight: lighter;
        margin: 12.43px 0 35.52px 0;

      }
      .label {
        font-size: 12.43px;
        margin-bottom: 4.4px;
      }
      .data {
        font-size: 19.1px;
        font-weight: 595;
      }
    }
  }
}
</style>