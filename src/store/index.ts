import { createStore } from 'vuex';
import web3Store, { UserState } from "./modules/web3Store";
import blockStore, { BlockState } from "./modules/blockStore";

export interface IVueState {
  web3?: UserState;
  blockStore?: BlockState;
  toast: any;
  txToast: any;
}

export default createStore<IVueState>({
  state: {
    toast: null,
    txToast: null
  },
  mutations: {
    setToast(state, toast) {
      state.toast = toast;
    },
    setTxToast(state, toast) {
      state.txToast = toast;
    },
    useToast(state, { severity, summary, detail }: { severity: string, summary: string, detail: string }) {
      state.toast.add({ severity: severity, summary: summary, detail: detail, life: 5000 });
    },
    useTxToast(state, { txHash }: { txHash: string }) {
      state.txToast.add({ severity: 'info', summary: 'Transaction Details!', detail: txHash, life: 7000 });
    },
    toastError(state, { summary, detail }: { summary: string, detail: string }) {
      state.toast.add({ severity: 'error', summary: summary, detail: detail, life: 5000 });
    },
    toastSuccess(state, { summary, detail }: { summary: string, detail: string }) {
      state.toast.add({ severity: 'success', summary: summary, detail: detail, life: 5000 });
    }
  },
  actions: {},
  modules: {
    web3: web3Store,
    blockStore: blockStore,
  },
})
