<script lang="ts">
import { BASE_BSC_SCAN_URL } from "@/config";
import { Options } from "vue-class-component";
import CommonMixin from "@/helpers/mixins/CommonMixin";
import useCatchTxError, { TxResponse } from "@/helpers/useCatchTxError";
import ConnectWalletButton from "@/components/Buttons/ConnectWalletButton.vue";

@Options({
  components: {
    ConnectWalletButton,
  },
})
export default class Home extends CommonMixin {
  mounted() {
    var elems = document.getElementsByClassName('flip-box-inner');
    var totalSecond = 0;
    var myTimer;
    function RotationCard() {
      totalSecond = totalSecond + 1;
      for (var i = 0; i < elems.length; i++) {
        if (totalSecond == 1) {
          if (i % 2 == 0) {
            if (!elems[i].classList.contains("myAnim"))
              elems[i].classList.add("myAnim");
            else
              elems[i].classList.remove("myAnim");
          }
        }
        else {
          if (!elems[i].classList.contains("myAnim"))
            elems[i].classList.add("myAnim");
          else
            elems[i].classList.remove("myAnim");
        }
      }

      myTimer = setTimeout(RotationCard, 3000);

    }
    RotationCard()
  }
}
</script>

<style scoped>
.inter-font {
  font-family: 'Inter', sans-serif;
}

/* New style */

.flip-box {
  background-color: transparent;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
  /* display:inline-block; */
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  background-color: #bbb;
  color: black;
}

.flip-box-back {
  background-color: #555;
  color: white;
  transform: rotateY(180deg);
}

.myAnim {
  transform: rotateY(180deg);
  /* transition: transform 0.8s; */
}
</style>

<template>
  <nav
    class=" w-full items-center fixed top-0 inset-x-0 z-20 justify-between px-4 lg:px-10 flex flex-row py-5 text-[#090909]">
    <router-link to="/" class=" text-xl lg:text-3xl font-bold ">Sticky Blobs</router-link>
    <div class=" flex items-center text-[#CACDD2] ">
      <button
        class=" bg-[#090909] lg:w-[48px] w-[30px] h-[27px] rounded-full lg:h-[45px] flex justify-center items-center ">
        <!-- <img src="/img/Vector.png" class="  w-[25px] h-[25px]  " /> -->
        <svg class="lg:w-[26px] w-[20px] fill-current " width="41" height="33" viewBox="0 0 41 33" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40.1127 4.25C38.6689 4.90625 37.1127 5.3375 35.5002 5.54375C37.1502 4.55 38.4252 2.975 39.0252 1.08125C37.4689 2.01875 35.7439 2.675 33.9252 3.05C32.4439 1.4375 30.3627 0.5 28.0002 0.5C23.5939 0.5 19.9939 4.1 19.9939 8.54375C19.9939 9.18125 20.0689 9.8 20.2002 10.3813C13.5252 10.0438 7.58145 6.8375 3.6252 1.98125C2.93145 3.1625 2.5377 4.55 2.5377 6.0125C2.5377 8.80625 3.94395 11.2812 6.11895 12.6875C4.7877 12.6875 3.5502 12.3125 2.4627 11.75V11.8062C2.4627 15.7062 5.2377 18.9688 8.9127 19.7C7.73281 20.0229 6.49412 20.0678 5.29395 19.8313C5.80321 21.4296 6.80058 22.8283 8.14585 23.8305C9.49113 24.8327 11.1167 25.3882 12.7939 25.4188C9.95075 27.6696 6.42644 28.8862 2.8002 28.8687C2.1627 28.8687 1.5252 28.8312 0.887695 28.7562C4.4502 31.0437 8.6877 32.375 13.2252 32.375C28.0002 32.375 36.1189 20.1125 36.1189 9.48125C36.1189 9.125 36.1189 8.7875 36.1002 8.43125C37.6752 7.30625 39.0252 5.88125 40.1127 4.25Z" />
        </svg>
      </button>
      <router-link to="/join"
        class=" bg-[#090909] font-normal flex justify-center items-center ml-3 lg:ml-8 rounded-[100px] px-3 h-[30px] lg:px-12 lg:h-[45px] ">
        Join Waitlist
      </router-link>
    </div>
  </nav>



  <div class="flip-box">
    <div class="flip-box-inner">
      <div class="flip-box-front">
        <img src="/img/Police.png" class=" h-screen object-cover w-full " />
      </div>
      <div class="flip-box-back">
        <img src="/img/Policenew2.png" class=" h-screen object-cover w-full " />
      </div>
    </div>
  </div>
</template>
