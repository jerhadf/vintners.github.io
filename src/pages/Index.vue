<template>
  <Layout>
    <div class="content">

      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <h1 class="title is-2">Hi, I’m Jeremy.</h1>
            <g-image alt="Example image" src="../img/favicon.png" width="135" />
            
            <h1>Hello, world!</h1>
          
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
            </p>

            <p class="home-links">
              <a href="https://gridsome.org/docs" target="_blank" rel="noopener">Gridsome Docs</a>
              <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
            </p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Welcome to my website",
    meta: [
      { name: "author", content: "Jeremy Hadfield" }
    ]
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
