<template>
  <section class="card" :class="{'inStack' : stackMode}" v-if="!toBeHidden">
    <p class="title" v-if="title">{{title}}</p>
    <p
    v-if="!card"
    class="template">
    NO ACTIVE CARD
    </p>

    <v-touch
      v-if="card"
      tag="article"
      v-bind:style="{backgroundImage: bgColor}"
      class="credit-card"
      :class="{'edit' : editMode, 'active' : activeMode}"
      v-on:tap="clickHandler"
      v-on:swipeleft="deleteRequest"
      v-on:swiperight="deleteRequest"
    >
      <div v-if="deleteRequested" class="action-wrapper">
        <p>Confirm to delete this card</p>
        <div class="confirm-wrapper">
          <button id="cancel"
          v-on:click="cancelDeleteRequest">CANCEL</button>
          <button id="confirm"
          v-on:click="deleteCard">DELETE CARD</button>
        </div>
      </div>
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
    </v-touch>
  </section>
</template>

<script>
console.log;
export default {
  name: "Card",
  data() {
    return {
      deleteRequested: false
    };
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
    clickHandler() {
      if (this.stackMode && !this.deleteRequested) {
        this.$store.dispatch("swapActiveCard", {
          index: this.stackIndex,
          card: this.card
        });
      }
    },
    cancelDeleteRequest(){
      this.deleteRequested = false
    },
    deleteRequest(){
      this.deleteRequested = true
    },
    deleteCard(){
      this.$store.commit('deleteCard', this.card)
    }
  },
  computed: {
    bgColor() {
      if (this.editMode || this.activeMode) {
        return `linear-gradient(to left, ${this.vendor.bgColor}D9, ${this.vendor.bgColor})`;
      } else if (this.stackMode) {
        return `linear-gradient(to top right, ${this.vendor.bgColor}D9, ${this.vendor.bgColor})`;
      } else {
        return `linear-gradient(to top right, purple, gray)`;
      }
    },
    styledCardNumber() {
      if (!this.card.cardNumber) {
        return "XXXX XXXX XXXX XXXX";
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
    styledCardHolderName() {
      if (!this.card.cardHolderName) {
        return "FIRSTNAME LASTNAME";
      }
      return this.card.cardHolderName;
    },
    toBeHidden() {
      if (this.stackMode && this.stackIndex > 2) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
p,
img {
  margin: 0;
  padding: 0;
}

.card {
  margin: 0 auto;
  max-width: min-content;

  .title {
    font-size: 0.676rem;
    font-weight: 790;
    color: gray;
    margin-bottom: 10px;
  }
  .credit-card, .template {
    display: flex;
    position: relative;
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

    .action-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0 none white;
      border-radius: 8px;
      background: rgba(56, 56, 56, 0.829);
      box-sizing: border-box;
      p {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: white;
        margin-bottom: 10px;
      }
      .confirm-wrapper {
        display: flex;
        justify-content: space-around;
        width: 100%;
        #cancel,
        #confirm {
          padding: 0.5rem;
          width: 40%;
        }
        #cancel{
          background: none;
          color: white;
          border-color: white;
        }
      }
    }

    &.edit,
    &.active {
      color: black;
      text-shadow: none;
    }

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
  }
  
  .template{
    justify-content: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: gray;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: none;
    text-shadow: none;
    padding: 4vw;
    box-sizing: border-box;
    background: white;
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