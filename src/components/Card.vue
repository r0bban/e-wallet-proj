<template>
  <section class="card">
    <p class="title" v-if="title">{{title}}</p>
    <article
      v-bind:style="{background: vendor.bgColor}"
      class="credit-card"
      :class="{'edit' : editMode, 'active' : activeMode}"
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
        <p class="data card-holder">{{card.cardHolderName}}</p>
        <p class="data valid-thru">{{valudThruStyled}}</p>
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
    editMode: Boolean
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
    }
  },
  computed: {
    styledCardNumber() {
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
    valudThruStyled() {
      let output = `${this.card.ValudThru.substring(
        0,
        2
      )}/${this.card.ValudThru.substring(2, 4)}`;
      return output;
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

    .icon-logo-wrapper {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;

      .chip-icon {
        width: 12.1vw;
        align-self: flex-end;
      }
      .vendor-logo {
        width: 7.5vw;
        align-self: flex-start;
        fill: black;
        fill-opacity: 0.4;
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
  .card .credit-card .card-number {
    font-size: 31.2px;
    font-weight: lighter;
  }
}
</style>