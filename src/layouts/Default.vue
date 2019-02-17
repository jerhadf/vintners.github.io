<template>
  <div class="columns is-centered">
    <header class="column is-half">
      <strong>
        <g-link :to="{ name: 'home' }">{{ $static.metaData.siteName }}</g-link>
      </strong>
    </header>
    <slot/>
  </div>
</template>

<script>
import LayoutNavigation from '@/components/LayoutNavigation';
import LayoutFooter from '@/components/LayoutFooter';

export default {
  components: {
    LayoutNavigation,
    LayoutFooter
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-size: 16px;
  color: #2c3e50
}


@media screen and (max-width: 768px) {
  body {
    margin:0 20px !important;
  }
}

::selection {
    color: white;
    background: #FF4E46;
}

h1 {
    margin-top: 20px !important;
    /* font-size: 1.95rem !important; */
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
}
</style>
