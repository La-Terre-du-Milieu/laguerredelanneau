<template>
	<div class="container">
		Redirecting to Discord
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Login extends Vue {
	head() {
		return {
			meta: [
				{
					hid: "redirect",
					"http-equiv": "refresh",
					content: "2;url=https://discord.com/api/oauth2/authorize?client_id=850400078354841640&redirect_uri=https%3A%2F%2Fgda.ascor.ml%2Foauth&response_type=code&scope=identify%20guilds"
				}
			],
		};
	}
}
</script>

<style lang="scss" scoped>
</style>
