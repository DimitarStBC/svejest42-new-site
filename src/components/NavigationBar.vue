<template>
  <div>
    <div
      class="customNavigation d-flex justify-content-between align-items-center"
    >
      <div class="leftNavigation">
        <router-link :to="{ name: 'Landing' }">
          <img src="../assets/svejest-logo.jpg" alt="Svejest42" />
        </router-link>
      </div>
      <div class="rightNavigation d-flex">
        <LanguageSwitcher class="mr-3" />
        <a href="#prices" class="mr-5">
          {{ $t("nav.Prices") }}
        </a>
        <tasty-burger-button
          :type="buttonType"
          :active="isActive"
          :size="size"
          :color="color"
          :active-color="activeColor"
          v-on:toggle="onToggle"
          class="mr-5 zi"
        />
      </div>
    </div>

    <div id="menuOverlay" class="overlay closed">
      <div
        class="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
      >
        <router-link
          @click.native="changeOverlayHome"
          class="menuLinks"
          :to="{ name: 'Landing' }"
        >
          {{ $t("nav.Home") }}
        </router-link>
        <router-link
          @click.native="changeOverlayAbout"
          class="menuLinks"
          :to="{ name: 'About' }"
        >
          {{ $t("nav.About") }}
        </router-link>
        <router-link
          @click.native="changeOverlayContact"
          class="menuLinks"
          :to="{ name: 'Contact' }"
        >
          {{ $t("nav.Contact") }}
        </router-link>
        <router-link
          @click.native="changeOverlayBlog"
          class="menuLinks"
          :to="{ name: 'Blog' }"
        >
          {{ $t("nav.Blog") }}
        </router-link>
        <div class="bgImage"></div>
      </div>
      <div class="text">
        <h1 id="navPointer">{{ $t("nav.menu") }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher";
import { TastyBurgerButton } from "vue-tasty-burgers";
import $ from "jquery";

export default {
  name: "NavigationBar",
  components: {
    LanguageSwitcher,
    "tasty-burger-button": TastyBurgerButton,
  },

  data() {
    return {
      buttonType: "elastic",
      isActive: false,
      size: "s",
      color: "black",
      activeColor: "white",
    };
  },

  methods: {
    onToggle() {
      $("#menuOverlay").toggleClass("closed opened");
      setTimeout(() => {
        let buttons = document.getElementsByClassName("menuLinks");
        let length = buttons.length;
        for (let i = 0; i < length; i++) {
          buttons[i].style.opacity = 1;
        }
        document.getElementById("navPointer").innerText = this.$t("nav.menu");
      }, 800);
      console.log(this.isActive + " on toggle");
    },
    changeOverlayHome() {
      this.isActive = false;
      let buttons = document.getElementsByClassName("menuLinks");
      let length = buttons.length;
      for (let i = 0; i < length; i++) {
        buttons[i].style.opacity = 0;
      }
      document.getElementById("navPointer").innerText = this.$t("nav.Home");
      setTimeout(() => {
        this.onToggle();
      }, 800);
      console.log(this.isActive + " in the end of home");
    },
    changeOverlayAbout() {
      let buttons = document.getElementsByClassName("menuLinks");
      let length = buttons.length;
      for (let i = 0; i < length; i++) {
        buttons[i].style.opacity = 0;
      }
      document.getElementById("navPointer").innerText = this.$t("nav.About");
      setTimeout(() => {
        this.onToggle();
      }, 800);
    },
    changeOverlayContact() {
      let buttons = document.getElementsByClassName("menuLinks");
      let length = buttons.length;
      for (let i = 0; i < length; i++) {
        buttons[i].style.opacity = 0;
      }
      document.getElementById("navPointer").innerText = this.$t("nav.Contact");
      setTimeout(() => {
        this.onToggle();
      }, 800);
    },
    changeOverlayBlog() {
      let buttons = document.getElementsByClassName("menuLinks");
      let length = buttons.length;
      for (let i = 0; i < length; i++) {
        buttons[i].style.opacity = 0;
      }
      document.getElementById("navPointer").innerText = this.$t("nav.Blog");
      setTimeout(() => {
        this.onToggle();
      }, 800);
    },
  },
};
</script>

<style scoped>
.menuLinks:nth-child(1):hover ~ .bgImage {
  background: linear-gradient(
      to bottom,
      rgba(31, 31, 31, 0.9) 0%,
      rgba(32, 32, 32, 0.9) 100%
    ),
    url("../assets/landing.jpg") no-repeat;
  background-size: cover;
}
.menuLinks {
  z-index: 2;
}
.customNavigation {
  width: 100%;
  height: 80px;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
}
.leftNavigation {
  width: 150px;
}
.rightNavigation a {
  color: rgb(36, 36, 36);
}
.zi {
  z-index: 2;
}
.bgImage {
  width: 100%;
  z-index: 0;
  height: 100vh;
  position: absolute;
}
.closed {
  height: 0vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  font-size: 60px;
  bottom: 0;
  transition: 0.5s ease;
  /* background: rgba(0, 0, 0, 0.89); */
}
.opened {
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  font-size: 60px;
  bottom: 0;

  transition: 0.5s ease;
  background: rgba(0, 0, 0, 0.89);
}
.overlay a {
  color: white;
}
.text {
  position: absolute;
  bottom: 35px;
  left: 35px;
  color: rgb(75, 75, 75);
}
</style>