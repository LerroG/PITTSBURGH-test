<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'
import WishlistIcon from '@/components/icons/WishlistIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'

const locales = [
	{
		title: 'English',
		value: 'en'
	},
	{
		title: 'Русский',
		value: 'ru'
	},
	{
		title: "O'zbek",
		value: 'uz'
	}
]
</script>

<template>
	<header class="w-full">
		<div class="flex justify-center items-center bg-black h-12 w-full">
			<div class="flex justify-between w-[860px]">
				<div class="text-text">
					<span class="title-14PX-regular mr-3"
						>Summer Sale For All Swim Suits And Free Express Delivery - OFF
						50%!</span
					>
					<span class="title-14PX-semibold underline">ShopNow</span>
				</div>
				<div class="text-text">
					<select id="language" name="language">
						<option
							class="text-black"
							v-for="locale in locales"
							:key="locale.value"
							:value="locale.value"
						>
							{{ locale.title }}
						</option>
					</select>
				</div>
			</div>
		</div>

		<div class="flex justify-center h-24 border-b border-black/30">
			<nav
				class="h-full w-[1170px] text-text-2 pt-10 flex items-start justify-between"
			>
				<RouterLink class="flex h-10 items-end heading-24PX-bold" to="/">
					Exclusive
				</RouterLink>

				<div class="flex gap-12 h-10 items-end title-16PX-regular">
					<RouterLink class="underline" to="/"> Home </RouterLink>
					<RouterLink to="/contact"> Contact </RouterLink>
					<RouterLink to="/about"> About </RouterLink>
					<RouterLink to="/signup"> Sign up </RouterLink>
				</div>

				<div class="flex items-center">
					<div class="relative mr-6">
						<input
							class="title-14PX-regular text-text-2/50 pl-5 pr-4 h-10 w-60 bg-gray-100 rounded-lg focus:outline-1 focus:outline-gray-600"
							placeholder="What are you looking for?"
							type="text"
						/>
						<SearchIcon
							class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
						/>
					</div>
					<button
						class="flex justify-center items-center rounded-lg cursor-pointer hover:bg-gray-100 h-10 w-10 mr-4"
					>
						<WishlistIcon class="w-5 h-5" />
					</button>
					<button
						class="flex justify-center items-center rounded-lg cursor-pointer hover:bg-gray-100 h-10 w-10"
					>
						<CartIcon class="w-5 h-5" />
					</button>
				</div>
			</nav>
		</div>
	</header>
</template>
