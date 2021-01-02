<template>
  <div>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ name: 'Landing' }">
          <img src="../assets/logo.png" alt="Svejest42" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item href="#"> Home </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'About' }">
          About
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#"> About </b-navbar-item>
          <b-navbar-item href="#"> Contact </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <LanguageSwitcher />
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher";

export default {
  name: "NavigationBar",
  components: {
    LanguageSwitcher,
  },
};
</script>