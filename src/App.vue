<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
</script>

<template>
	<AppLayout>
		<RouterView v-slot="{ Component }">
			<Transition mode="out-in">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</AppLayout>
</template>

<style scoped>
@reference "@/style.css";

.v-enter-active,
.v-leave-active {
	@apply transition-all duration-300;
}

.v-enter-from {
	@apply opacity-0 translate-x-10;
}

.v-leave-to {
	@apply opacity-0 -translate-x-10;
}
</style>
