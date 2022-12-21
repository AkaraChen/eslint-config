<template>
    <div>Type</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<script setup>
JSON.stringify({test: 1});
let a = 3;
for (let index = 0; index <= 10; index += 1) {
    a = index;
}
Number.parseInt('' + a, 10);
</script>

<script lang="ts">
let app = 1;
const app: number = 1;
</script>
