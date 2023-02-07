<script lang="ts">
import { Options } from "vue-class-component";
import CommonMixin from "@/helpers/mixins/CommonMixin";
import ConnectWalletButton from "@/components/Buttons/ConnectWalletButton.vue";

@Options({
  components: {
    ConnectWalletButton,
  },
})
export default class Join extends CommonMixin {
  mounted() {
    var header = document.getElementById("category");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      const positionIndex = i;
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("activebtn");
        current[0].className = current[0].className.replace(" activebtn", "");
        btns[positionIndex].className += " activebtn";
      });
    }
  }

  shareOnTwitter() {
    this.myFunction('btn2', 'btn4', 'tabtwo', 'tabfour');

    const url = 'http://twitter.com/share?text=Yes,%20I\'m%20curious.%20I\'m%20verifying%20my%20identity%20for%20@stickyblobworld%20&url=https%3A%2F%2Fbeepboopbotz.io%2Fbeeplist&hashtags=NFTs%2CStickyblobworld'
    window.open(url, '_blank');
  }

  showIfActive(isAuthenticated: boolean){
    if(isAuthenticated) {
      return 'show-button';
    }
    return '';
  }

  myFunction(first, second, third, four) {
    document.getElementById(first).style.display = 'none'
    document.getElementById(second).style.display = 'block'
    var firstelement = document.getElementById(third);
    firstelement.classList.remove("active");
    firstelement.classList.add("inactive");
    var secondelement = document.getElementById(four);
    secondelement.classList.remove("inactive");
    secondelement.classList.add("active");
    if (second === 'btn4') {
      document.getElementById('category').style.display = 'grid'
    }
  }

  finish() {
    var firstcontainer = document.getElementById("first");
    firstcontainer.classList.remove("first");
    firstcontainer.classList.add("second");
    var secondcontainer = document.getElementById("second");
    secondcontainer.classList.remove("second");
    secondcontainer.classList.add("first");
  }
}
</script>
<template>
  <div class="w-full flex flex-col items-center justify-center overflow-hidden h-screen lg:px-0 px-3">
    <nav
      class=" w-full items-center fixed inset-x-0 top-0 justify-between px-4 lg:px-10 flex flex-row py-5 text-[#252B41]">
      <router-link to="/" class=" text-xl lg:text-3xl font-bold ">Sticky Blobs</router-link>
      <div class=" flex items-center text-[#CACDD2] ">
        <button
          class=" bg-[#252B41] lg:w-[48px] w-[30px] h-[27px] rounded-full lg:h-[45px] flex justify-center items-center ">
          <!-- <img src="/img/Vector.png" class="  w-[25px] h-[25px]  " /> -->
          <svg class=" lg:w-[26px] w-[20px] fill-current " width="41" height="33" viewBox="0 0 41 33" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40.1127 4.25C38.6689 4.90625 37.1127 5.3375 35.5002 5.54375C37.1502 4.55 38.4252 2.975 39.0252 1.08125C37.4689 2.01875 35.7439 2.675 33.9252 3.05C32.4439 1.4375 30.3627 0.5 28.0002 0.5C23.5939 0.5 19.9939 4.1 19.9939 8.54375C19.9939 9.18125 20.0689 9.8 20.2002 10.3813C13.5252 10.0438 7.58145 6.8375 3.6252 1.98125C2.93145 3.1625 2.5377 4.55 2.5377 6.0125C2.5377 8.80625 3.94395 11.2812 6.11895 12.6875C4.7877 12.6875 3.5502 12.3125 2.4627 11.75V11.8062C2.4627 15.7062 5.2377 18.9688 8.9127 19.7C7.73281 20.0229 6.49412 20.0678 5.29395 19.8313C5.80321 21.4296 6.80058 22.8283 8.14585 23.8305C9.49113 24.8327 11.1167 25.3882 12.7939 25.4188C9.95075 27.6696 6.42644 28.8862 2.8002 28.8687C2.1627 28.8687 1.5252 28.8312 0.887695 28.7562C4.4502 31.0437 8.6877 32.375 13.2252 32.375C28.0002 32.375 36.1189 20.1125 36.1189 9.48125C36.1189 9.125 36.1189 8.7875 36.1002 8.43125C37.6752 7.30625 39.0252 5.88125 40.1127 4.25Z" />
          </svg>
        </button>
        <a href=""
          class=" bg-[#252B41] flex justify-center items-center font-normal ml-3 lg:ml-8 rounded-[100px] px-3 h-[30px] lg:px-12 lg:h-[45px] ">
          Check status
        </a>
      </div>
    </nav>
    <div id="first"
      class=" first lg:w-auto w-full mt-10 px-0 lg:px-24 bg-[#E1E1E199] border border-[#F0F0F080] bg-blur-[10px] text-[#252B41] rounded-[30px] py-8 items-center ">
      <p class=" text-2xl font-medium ">BLOB LIST</p>
      <p class=" text-sm font-semibold ">Complete these 4 steps</p>
      <div class=" w-fit grid grid-cols-3 gap-5 my-5 mx-auto ">
        <div id="tabone" class=" w-[60px] h-[60px] rounded-full" :class="{ 'active': !web3.user.active, 'inactive': web3.user.active }">
          1
        </div>
        <div id="tabtwo" class=" w-[60px] h-[60px] rounded-full" :class="{ 'active': web3.user.active, 'inactive': !web3.user.active }">
          2
        </div>
        <div id="tabfour" class="  w-[60px] h-[60px] rounded-full inactive">
          3
        </div>
      </div>
      <div id="category" class=" w-fit grid grid-cols-2 gap-4 mb-4 mx-auto ">
        <button class=" w-[130px] rounded-[100px] h-[34px] btn activebtn ">Happy</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Magician</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Gangster</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Crazy</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Hipster</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Samurai</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Cowboy</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Alien</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Pirate</button>
        <button class=" w-[130px] rounded-[100px] h-[34px] btn ">Stoned</button>
      </div>
      <ConnectWalletButton />
      <button id="btn2" @click="shareOnTwitter()"
        class="bg-[#252B41] rounded-[100px] w-[300px] h-[50px] text-white mt-4 hidden-btn" :class="showIfActive(web3.user.active)">Share On Twitter</button>
      <button id="btn4" @click="finish()"
        class="bg-[#252B41] rounded-[100px] w-[300px] h-[50px] text-white mt-4">Select
        Your Blob Faction</button>
    </div>
    <div id="second"
      class=" second lg:w-auto w-full mt-10 px-24 bg-[#E1E1E199] border border-[#F0F0F080] bg-blur-[10px] text-[#252B41] rounded-[30px] py-8 items-center ">
      <p class=" text-2xl font-medium ">BLOB LIST</p>
      <p class=" text-sm font-semibold ">You have completed all steps</p>
      <div class=" w-fit grid grid-cols-3 gap-5 my-5 mx-auto ">
        <div id="tabone" class=" w-[60px] h-[60px] rounded-full inactive ">
          <svg class=" w-[35px] " viewBox="0 0 53 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.9933 29.5248L45.0381 1.31487C45.9096 0.438288 47.0187 0 48.3655 0C49.7123 0 50.8214 0.438288 51.6928 1.31487C52.5643 2.19145 53 3.30709 53 4.6618C53 6.01652 52.5643 7.13217 51.6928 8.00875L20.3206 39.5656C19.37 40.5219 18.2608 41 16.9933 41C15.7257 41 14.6166 40.5219 13.6659 39.5656L1.30717 27.1341C0.435723 26.2575 0 25.1419 0 23.7872C0 22.4325 0.435723 21.3168 1.30717 20.4402C2.17862 19.5637 3.28774 19.1254 4.63453 19.1254C5.98131 19.1254 7.09043 19.5637 7.96188 20.4402L16.9933 29.5248Z"
              fill="#252B41" />
          </svg>
        </div>
        <div id="tabtwo" class=" w-[60px] h-[60px] rounded-full inactive ">
          <svg class=" w-[35px] " viewBox="0 0 53 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.9933 29.5248L45.0381 1.31487C45.9096 0.438288 47.0187 0 48.3655 0C49.7123 0 50.8214 0.438288 51.6928 1.31487C52.5643 2.19145 53 3.30709 53 4.6618C53 6.01652 52.5643 7.13217 51.6928 8.00875L20.3206 39.5656C19.37 40.5219 18.2608 41 16.9933 41C15.7257 41 14.6166 40.5219 13.6659 39.5656L1.30717 27.1341C0.435723 26.2575 0 25.1419 0 23.7872C0 22.4325 0.435723 21.3168 1.30717 20.4402C2.17862 19.5637 3.28774 19.1254 4.63453 19.1254C5.98131 19.1254 7.09043 19.5637 7.96188 20.4402L16.9933 29.5248Z"
              fill="#252B41" />
          </svg>
        </div>
        <div id="tabfour" class="  w-[60px] h-[60px] rounded-full inactive">
          <svg class="w-[35px] " viewBox="0 0 53 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.9933 29.5248L45.0381 1.31487C45.9096 0.438288 47.0187 0 48.3655 0C49.7123 0 50.8214 0.438288 51.6928 1.31487C52.5643 2.19145 53 3.30709 53 4.6618C53 6.01652 52.5643 7.13217 51.6928 8.00875L20.3206 39.5656C19.37 40.5219 18.2608 41 16.9933 41C15.7257 41 14.6166 40.5219 13.6659 39.5656L1.30717 27.1341C0.435723 26.2575 0 25.1419 0 23.7872C0 22.4325 0.435723 21.3168 1.30717 20.4402C2.17862 19.5637 3.28774 19.1254 4.63453 19.1254C5.98131 19.1254 7.09043 19.5637 7.96188 20.4402L16.9933 29.5248Z"
              fill="#252B41" />
          </svg>
        </div>
      </div>
      <p class=" text-sm font-medium my-2 ">Check back later to confirm your application status</p>
      <a href="/" class=" flex items-center mt-4">
        <svg class=" cursor-pointer " width="30" height="29" viewBox="0 0 30 29" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.3906 28.1875L1.01563 15.8125C0.828125 15.625 0.695 15.4219 0.61625 15.2031C0.53875 14.9844 0.5 14.75 0.5 14.5C0.5 14.25 0.53875 14.0156 0.61625 13.7969C0.695 13.5781 0.828125 13.375 1.01563 13.1875L13.3906 0.812502C13.7344 0.468752 14.1638 0.288752 14.6788 0.272502C15.195 0.257502 15.6406 0.437502 16.0156 0.812502C16.3906 1.15625 16.5863 1.58563 16.6025 2.10063C16.6175 2.61688 16.4375 3.0625 16.0625 3.4375L6.875 12.625H27.8281C28.3594 12.625 28.805 12.8044 29.165 13.1631C29.5238 13.5231 29.7031 13.9688 29.7031 14.5C29.7031 15.0313 29.5238 15.4763 29.165 15.835C28.805 16.195 28.3594 16.375 27.8281 16.375H6.875L16.0625 25.5625C16.4062 25.9062 16.5863 26.3438 16.6025 26.875C16.6175 27.4063 16.4375 27.8438 16.0625 28.1875C15.7188 28.5625 15.2813 28.75 14.75 28.75C14.2188 28.75 13.7656 28.5625 13.3906 28.1875Z"
            fill="#252B41" />
        </svg>
        <p class=" text-sm ml-3 inter-font font-bold ">Go back to Home</p>
      </a>
    </div>
    <img src="/img/PoliceNew.png" class=" h-screen fixed inset-0 -z-10 object-cover w-full " />
  </div>
</template>

<style scoped>
.inter-font {
  font-family: 'Inter', sans-serif;
}

.hidden-btn {
  display: block;
}

#btn1 {
  display: block;
}

#btn3 {
  display: none;
}

#btn4 {
  display: none;
}

#btn4 {
  display: none;
}

#category {
  display: none;
}

.active {
  /* width: 60px;
            height: 60px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: #252B41;
  color: white;
  /* border-radius: 100%; */
}

.inactive {
  /* width: 60px;
            height: 60px; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #252B41;
  backdrop-filter: blur(5px);
  /* border-radius: 100%; */
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  /* font-size: 24px; */
  background-color: rgba(255, 255, 255, 0.3);
  color: #252B41;
  backdrop-filter: blur(5px);
}

/* Style the active class, and buttons on mouse-over */
.activebtn {
  background-color: #252B41;
  color: white;
  backdrop-filter: blur(0px);
}

.first {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.second {
  display: none;
}
.show-button {
  display: block;
}
</style>
