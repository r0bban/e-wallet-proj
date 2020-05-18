import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeCardNo: '1234567891011123',
    cardStackList: [],
    userCards: [
      {
        cardNumber: "4321432143214321",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "0922",
        ccvVode: "196",
        vendor: "NINJA_BANK"
      },
      {
        cardNumber: "9879987998799879",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "0318",
        ccvVode: "136",
        vendor: "BLOCK_CHAIN_INC"
      },
      {
        cardNumber: "6666666666666666",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "0318",
        ccvVode: "136",
        vendor: "EVIL_CORP"
      },
      {
        cardNumber: "1234567891011123",
        cardHolderName: "CHRISTOFFER WALLENBERG",
        ValudThru: "1222",
        ccvVode: "456",
        vendor: "BITCOIN_INC"
      },
    ],
    vendors: {
      NO_VENDOR: {
        name: "",
        logo: "vendor-bitcoin.svg",
        bgColor: "#8b8b8b"
      },
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
      return state.userCards
    },
    getActiveCard(state) {
      return state.userCards.find(card => card.cardNumber == state.activeCardNo)
    },
    getActiveCardNo(state) {
      return state.activeCardNo
    },
    getCardStackList(state) {
      return state.cardStackList
    }
  },
  mutations: {
    setActiveCardNo(state, payload) {
      state.activeCardNo = payload
    },
    loadCardStack(state) {
      state.cardStackList = state.userCards.filter(card => card.cardNumber != state.activeCardNo)
    },
    replaceCardInStack(state, payload) {
      state.cardStackList.splice(payload.index, 1, payload.card)
    },
    addCardtoStack(state, payload) {
      state.cardStackList.push(payload)
    },
    addCardtoUserCards(state, payload) {
      state.userCards.push(payload)
    },
    rotateCardStackUpwards(state) {
      if (state.cardStackList.length > 1) {
        state.cardStackList.push(state.cardStackList[0])
        state.cardStackList.splice(0, 1)
      }
    },
    rotateCardStackDownwards(state) {
      if (state.cardStackList.length > 1) {
        state.cardStackList.unshift(state.cardStackList[state.cardStackList.length - 1])
        state.cardStackList.splice(state.cardStackList.length - 1, 1)
      }
    }

  },
  actions: {
    swapActiveCard(context, payload) {
      let activeCard = context.getters.getActiveCard
      context.commit('setActiveCardNo', payload.card.cardNumber)
      context.commit('replaceCardInStack', { index: payload.index, card: activeCard })
    },
    addNewCard(context, payload) {
      context.commit('addCardtoStack', payload)
      context.commit('addCardtoUserCards', payload)
    }
  },
  modules: {
  }
})

