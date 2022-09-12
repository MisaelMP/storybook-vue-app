<template>
	<div class="card" :disabled="disabled" :style="style">
		{{ title }}
	</div>
</template>

<script lang="ts">
	import { reactive, computed } from 'vue';

	export default {
		name: 'cardItem',

		props: {
			title: {
				type: String,
				default: 'Title',
				required: true,
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			rounded: {
				type: Boolean,
				default: false,
			},
			backgroundColor: {
				type: String,
				default: '#efcccf',
			},
		},

		emits: ['click'],

		setup(props: any, { emit }: any) {
			props = reactive(props);
			return {
				style: computed(() => ({
					backgroundColor: props.backgroundColor,
					borderRadius: props.rounded ? '3em' : '0px',
				})),
				onClick() {
					emit('clicked');
				},
			};
		},
	};
</script>

<style scoped>
	.card {
		border: 0;
		text-align: left;
		padding: 15px;
		width: 200px;
		height: 100px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
	}
</style>
