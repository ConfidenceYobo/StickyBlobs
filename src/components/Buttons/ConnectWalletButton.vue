<script lang="ts">
import Web3Mixins from "../../helpers/mixins/web3Mixin";
export default class ConnectWalletButton extends Web3Mixins { }
</script>

<template>
  <button role="button" class="bg-[#252B41] rounded-[100px] w-[300px] h-[50px] text-white mt-4" v-if="!isWalletConnected" @click="connectWallet()">
    Connect Wallet
  </button>
</template>
<style lang="scss" scoped>
</style>