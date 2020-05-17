import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCardNo: '1234567891011123',
    userCards: {
  
       '4321432143214321': {
        cardNumber: "4321432143214321",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "0922",
        ccvVode: "196",
        vendor: "NINJA_BANK"
      },
       '9879987998799879': {
        cardNumber: "9879987998799879",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "0318",
        ccvVode: "136",
        vendor: "BLOCK_CHAIN_INC"
      },
      '6666666666666666': {
        cardNumber: "6666666666666666",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "1023",
        ccvVode: "123",
        vendor: "EVIL_CORP"
      },
      '1234567891011123': {
        cardNumber: "1234567891011123",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "1222",
        ccvVode: "456",
        vendor: "BITCOIN_INC"
      }
    },
    vendors: {
      BITCOIN_INC: {
        name: "BITCOIN INC",
        logo: "vendor-bitcoin.svg",
        bgColor: "#ffb546"
      },
      NINJA_BANK: {
        name: "NINJA BANK",
        logo: "vendor-ninja.svg",
        bgColor: "#383838"
      },
      BLOCK_CHAIN_INC: {
        name: "BLOCK CHAIN INC",
        logo: "vendor-blockchain.svg",
        bgColor: "#7d4fe1"
      },
      EVIL_CORP: {
        name: "EVIL CORP",
        logo: "vendor-evil.svg",
        bgColor: "#d82d4c"
      },
    }
  },
  getters: {
    getVendorList(state) {
      let vendorList = []
      for (const vendor in state.vendors) {
        let listedVendor = { id: vendor, name: state.vendors[vendor].name }
        vendorList.push(listedVendor)
      }
      return vendorList
    },
    getCardList(state) {
      let cardList = []
      for (const card in state.userCards) {
        let cardInStore = state.userCards[card];
        // cardInStore.cardNumber = card;
        cardList.push(cardInStore)
      }
      return cardList
    },
    getActiveCard(state) {
      return state.userCards[state.activeCardNo]
    },
    getActiveCardNo(state) {
      return state.activeCardNo
    }
  },
  mutations: {
    setActiveCard(state, payload) {
      state.activeCardNo = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

