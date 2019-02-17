<template>
  <div class="navbar-end is-hidden-mobile is-hidden-tablet-only">
    <a v-for="social in accounts" :href="social.href" :key="social.name" class="navbar-item" target="_blank">
      <i :class="'fab fa-'+social.name"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        { name: "twitter", href: "http://twitter.com/lifeneoned" },
        { name: "github", href: "https://github.com/vintners/" },
        { name: "instagram", href: "https://www.instagram.com/jeremy_hadfield/" },
        { name: "linkedin", href: "https://www.linkedin.com/in/jeremy-hadfield-d/" }
      ]
    };
  },
  computed: {
    shuffle() {
      return this.accounts.sort(() => 0.5 - Math.random() );
    }
  }
};
</script>