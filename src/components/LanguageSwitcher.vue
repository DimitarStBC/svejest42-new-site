<template>
  <div>
    <ul>
      <li @click="setLocale('en')">EN</li>
      <li @click="setLocale('bg')">BG</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  methods: {
    setLocale: function (locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>


