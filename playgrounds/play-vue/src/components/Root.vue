<template>
  <div class="content">
    <div class="icon-content">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <h1>🎉🎉 YUI UI Playground 🎉🎉</h1>
  </div>

</template>

<style scoped>
.content {
  height: 46rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-content {
  display: flex;
}

h1 {
  font-weight: 450;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
