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
        <router-link class="mr-5" :to="{ name: 'Prices' }">
          {{ $t("nav.Prices") }}
        </router-link>
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

    <div
      id="menuOverlay"
      class="overlay closed d-flex flex-column justify-content-center align-items-center"
    >
      <router-link class="menuLinks" :to="{ name: 'Landing' }">
        {{ $t("nav.Home") }}
      </router-link>
      <router-link class="menuLinks" :to="{ name: 'Prices' }">
        {{ $t("nav.Prices") }}
      </router-link>
      <router-link class="menuLinks" :to="{ name: 'About' }">
        {{ $t("nav.About") }}
      </router-link>
      <router-link class="menuLinks" :to="{ name: 'Contact' }">
        {{ $t("nav.Contact") }}
      </router-link>
      <router-link class="menuLinks" :to="{ name: 'Blog' }">
        {{ $t("nav.Blog") }}
      </router-link>
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
      opened: false,
    };
  },
  methods: {
    onToggle() {
      $("#menuOverlay").toggleClass("closed opened");
    },
  },
};
</script>

<style scoped>
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

.closed {
  visibility: hidden;
}
.opened {
  visibility: visible;
}
.overlay {
  width: 100%;
  height: 100vh;
  position: absolute;
  font-size: 60px;
  top: 0;
  background: rgba(0, 0, 0, 0.89);
}
.overlay a {
  color: white;
}
</style>