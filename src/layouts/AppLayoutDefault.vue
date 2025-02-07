<script setup lang="ts">
import Header from './default/Header.vue'
</script>

<template>
	<div class="min-h-screen w-screen font-poppins">
		<Header />
		<main>
			<slot />
		</main>
	</div>
</template>
