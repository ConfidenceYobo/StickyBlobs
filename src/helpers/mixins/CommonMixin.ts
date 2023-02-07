import { Options } from "vue-class-component";
import _ from "lodash";
import Web3Mixins from "./web3Mixin";

@Options({
  watch: {},
})
export default class CommonMixin extends Web3Mixins {
  previousBlock: number;

  mounted(): void {}
}
