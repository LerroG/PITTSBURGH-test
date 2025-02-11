<script setup lang="ts">
import GooglePlayBadge from '@/components/icons/GooglePlayBadge.vue'
import SendEmail from '@/components/icons/SendEmail.vue'
</script>

<template>
	<footer class="w-full bg-black h-[440px] text-text">
		<div class="flex justify-between h-[375px] px-[135px] pt-[80px]">
			<div class="flex flex-col">
				<div class="heading-24PX-bold mb-6">Exclusive</div>
				<div class="title-20PX-medium mb-6">Subscribe</div>
				<div class="title-16PX-regular mb-4">Get 10% off your first order</div>
				<div class="relative w-[217px]">
					<input
						class="title-16PX-regular text-text/40 pl-4 w-full h-12 pr-4 bg-none border-2 border-text rounded-sm focus:outline-1 focus:outline-gray-600"
						placeholder="Enter your email"
						type="email"
					/>
					<SendEmail
						class="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
					/>
				</div>
			</div>
			<div class="flex flex-col">
				<div class="title-20PX-medium mb-6">Support</div>
				<div class="title-16PX-regular mb-4">
					111 Bijoy sarani, Dhaka, <br />
					DH 1515, Bangladesh.
				</div>
				<div class="title-16PX-regular mb-4">exclusive@gmail.com</div>
				<div class="title-16PX-regular">+88015-88888-9999</div>
			</div>
			<div class="flex flex-col">
				<div class="title-20PX-medium mb-6">Account</div>
				<div class="title-16PX-regular mb-4">My Account</div>
				<div class="title-16PX-regular mb-4">Login / Register</div>
				<div class="title-16PX-regular mb-4">Cart</div>
				<div class="title-16PX-regular mb-4">Wishlist</div>
				<div class="title-16PX-regular">Shop</div>
			</div>
			<div class="flex flex-col">
				<div class="title-20PX-medium mb-6">Quick Link</div>
				<div class="title-16PX-regular mb-4">Privacy Policy</div>
				<div class="title-16PX-regular mb-4">Terms Of Use</div>
				<div class="title-16PX-regular mb-4">FAQ</div>
				<div class="title-16PX-regular">Contact</div>
			</div>
			<div class="flex flex-col">
				<div class="title-20PX-medium mb-6">Download App</div>
				<div class="title-12PX-medium opacity-40 mb-2">
					Save $3 with App New User Only
				</div>
				<div class="flex gap-2">
					<img class="w-20 h-20" src="/Qr Code.png" alt="Qr Code" />
					<div class="flex flex-col gap-2.5 w-full">
						<img src="/download-google-play.png" alt="Download Google Play" />
						<img src="/download-appstore.png" alt="Download Appstore" />
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex justify-center items-center h-[65px] border-t border-t-primary/40 title-16PX-regular text-primary/40"
		>
			&copy; Copyright Rimel 2022. All right reserved
		</div>
	</footer>
</template>
