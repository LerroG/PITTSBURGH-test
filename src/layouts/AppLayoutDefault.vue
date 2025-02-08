<script setup lang="ts">
import Header from './default/Header.vue'
import Footer from './default/Footer.vue'
</script>

<template>
	<div class="min-h-screen w-screen font-poppins flex flex-col">
		<Header />
		<main class="bg-gray-100 flex-1">
			<slot />
		</main>
		<Footer />
	</div>
</template>
