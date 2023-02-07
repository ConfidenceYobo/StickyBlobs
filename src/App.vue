<script lang="ts">
import { Options } from "vue-class-component";
import Web3ModalVue from "@/components/Web3ModalVue.vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ConnectToTrustWallect from "@/providers/connectors/trust";
import injection from "@/providers/connectors/injected";
import { BASE_BSC_SCAN_URL } from "@/config/index";
import Web3Mixins from './helpers/mixins/web3Mixin';
import Dialog from "primevue/dialog";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import Button from "primevue/button";

declare global {
  interface Window {
    BinanceChain: any;
  }
}

@Options({
  components: {
    Toast,
    Dialog,
    ConfirmDialog,
    Button,
    Web3ModalVue
  },
  watch: {
  },
})
export default class App extends Web3Mixins {
  BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URL;

  providerOptions = {
    "custom-metamask": {
      display: {
        logo: "/images/logos/metamask.svg",
        name: "MetaMask",
        description: "Connect to your MetaMask",
      },
      package: true,
      connector: async () => injection(),
    },
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
        },
        network: "binance",
        chainId: 56,
      },
    },
    "custom-trustwallet": {
      display: {
        logo: "/images/logos/trust.svg",
        name: "TrustWallet",
        description: "Connect to your TrustWallet",
      },
      package: true,
      connector: async (_, __, opt) =>
        ConnectToTrustWallect(
          WalletConnectProvider,
          {
            rpc: {
              56: "https://bsc-dataseed.binance.org/",
            },
            network: "binance",
            chainId: 56,
          },
          opt
        ),
    },
    "custom-binancechainwallet": {
      display: {
        logo: "/images/logos/binance.png",
        name: "Binance Chain Wallet",
        description: "Connect to your Binance Chain Wallet",
      },
      package: true,
      connector: async () => {
        let provider = null;
        if (typeof window.BinanceChain !== "undefined") {
          provider = window.BinanceChain;
          try {
            await provider.request({ method: "eth_requestAccounts" });
          } catch (error) {
            throw new Error("User Rejected");
          }
        } else {
          throw new Error("No Binance Chain Wallet found");
        }
        return provider;
      },
    },
  };

  declare $refs: {
    web3modal: any;
    toast: any;
    txToast: any;
  };

  mounted() {
    this.$store.commit("setToast", this.$refs.toast);
    this.$store.commit("setTxToast", this.$refs.txToast);
  
    this.$nextTick(async () => {
      const web3modal = this.$refs.web3modal;
      this.$store.commit("setWeb3Modal", web3modal);
      if (web3modal.cachedProvider) {
        this.$store.dispatch("connect");
      }
    });
  }
}
</script>

<template>
  <web3-modal-vue :disableInjectedProvider="true" ref="web3modal" :providerOptions="providerOptions"
    :cacheProvider="true" network="binance" />
  <Toast ref="toast" group="regular" />
  <Toast position="top-right" ref="txToast">
    <template #message="slotProps">
      <span class="p-toast-message-icon pi pi-times"></span>
      <div class="p-toast-message-text">
        <span class="p-toast-summary">{{ slotProps.message.summary }}</span>
        <div class="p-toast-detail">
          <a :href="`${BASE_BSC_SCAN_URL}/tx/${slotProps.message.detail}`" target="_blank">Check your transaction on
            BSCScan</a>
        </div>
      </div>
    </template>
  </Toast>
  <router-view></router-view>
</template>


