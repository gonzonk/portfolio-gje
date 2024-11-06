---
layout: doc
---

<script setup>
  import {data as project} from './project/project.data';
  import { withBase } from 'vitepress';
</script>

# Project

<ul v-if="project.length > 0">
  <li v-for="p of project">
    <a :href="withBase(p.url)">{{ p.frontmatter.title }}</a>
  </li>
</ul>
<p v-else>
  Nothing here yet!
</p>