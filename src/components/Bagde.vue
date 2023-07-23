<script setup>
import { reactive } from 'vue'
import tags from '@/content/tags'
const {selectTag} = defineProps(['selectTag'])

const state = reactive({ tag: -1 })

const select = (index) => {
    state.tag = index
    selectTag(tags[index] || null)
}
</script>

<template>
    <div class="tag-container scroll-container">
        <div :class="{ active: state.tag == -1 }" class="tag" @click="() => select(-1)">TODAS</div>
        <div :class="{ active: state.tag == index }" class="tag" v-for="(tag, index) in tags" :key="tag" @click="() => select(index)">
            {{tag.toUpperCase()}}
        </div>
    </div>
</template>

<style scoped>

.tag-container {
    font-size: 12px;
    user-select: none;
}

.tag-container .tag:first-child {
    border-radius: 5px 0px 0px 5px;
}

.tag-container .tag:last-child {
    border-radius: 0px 5px 5px 0px;
}

.tag-container .tag {
    background-color: var(--secondary-color);
    color: var(--tertiary-color);
    padding: 6px;
    border: 1px solid #c7ffe9;
    cursor: pointer;
    user-select: none;
}

.tag-container .tag.active {
    border: 2px solid var(--primary-color);
}

.tag-container .tag:hover {
    opacity: 0.9;
}

div.scroll-container {
  overflow: auto;
  white-space: nowrap;
}

div.scroll-container .tag {
  display: inline-block;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
  width: 8px;
  background-color: #f0f0f0;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #cdcdcd;
  height: 8px;
  width: 8px;
  border-radius: 3px;
}
</style>