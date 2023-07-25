<script setup>
    const { sources } = defineProps(['sources'])

</script>

<template>
    <section v-if="sources && sources.length > 0" class="sources-container">
      <h2>📕📖 Fontes</h2>
      <ol>
          <li v-for="(source, index) in sources" :key="index">
            <a class="link" :href="source.url">{{ source.title && source.title.substring(0, 150) }} <small>[{{source.url.substring(0, 100)}}]</small></a>
            <p class="comment">{{ source.comment }}</p>
          </li>
      </ol>

      <p class="warning">Algum problema com as fontes? Clique no botão CONTATAR no rodapé e me avise! 😉</p>
    </section>
</template>

<style scoped>

.sources-container {
  font-family: 'Times New Roman', Times, serif;
  margin-block: 2rem;
  padding: 1.25rem 2rem;
  background-color: #f8f8f8;
  color: #333;
}

.sources-container :is(h1, h2, h3, h4, h5, h6){
  font-size: 1.1em;
  font-weight: 300;
  margin-bottom: 1rem;
}

.sources-container ol {
  margin-inline: 2rem;
}

.sources-container .comment {
  margin: .5rem 1rem;
}

.sources-container ol li {
  margin: 0;
  padding: 0;
  line-height: 1.2em;
  font-size: .8em;
}

.sources-container .warning {
  font-size: 10px;
  font-family: var(--main-font);
}
</style>