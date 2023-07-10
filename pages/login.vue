<script setup lang="ts">
import { Route } from '@/types/router';
definePageMeta({ name: Route.LOGIN });
</script>
<template>
	<div class="container bg-accent-navy-dark">
		<form
			action=""
			method="get"
			class="form"
		>
			<h1 class="form__title">Please sign in</h1>
			<Input
				:type="'text'"
				:placeholder="'login'"
				:class="'input-login'"
			/>
			<Input
				:type="'password'"
				:placeholder="'password'"
				:class="'input-login'"
			/>
			<Input
				:type="'submit'"
				:value="'Sign in'"
				:class="'input-button'"
			/>
		</form>
	</div>
</template>
<style scoped>
.container {
	width: 100%;
	min-height: 100vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
}
.form {
	width: 350px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #adb5bd;
}
.form__title {
	margin-bottom: 10px;
	font-weight: 300;
}
</style>
