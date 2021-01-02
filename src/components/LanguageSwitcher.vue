<template>
  <div>
    <ul class="d-flex">
      <li id="en" @click="setLocale('en')">English |</li>
      <li id="bg" @click="setLocale('bg')">Български |</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  mounted() {
    if (this.$router.history.current.path.includes("/en/")) {
      document.getElementById("en").style.display = "none";
      document.getElementById("bg").style.display = "inline";
    } else {
      document.getElementById("en").style.display = "inline";
      document.getElementById("bg").style.display = "none";
    }
  },
  methods: {
    setLocale: function (locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });

      if (locale === "en") {
        document.getElementById("bg").style.display = "inline";
        document.getElementById("en").style.display = "none";
      } else {
        document.getElementById("en").style.display = "inline";
        document.getElementById("bg").style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
ul li {
  margin-right: 1rem;
  cursor: pointer;

  transition: 0.2s ease-in-out;
}
</style>
