<template>
	<button
		type="button"
		class="btn"
		@click="onClick"
		:disabled="disabled"
		:style="style"
	>
		{{ label }}
	</button>
</template>

<script lang="ts">
	import { reactive, computed } from 'vue';

	export default {
		name: 'buttonItem',

		props: {
			label: {
				type: String,
				default: 'Button',
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
			color: {
				type: String,
				default: '#000',
			},
		},

		emits: ['click'],

		setup(props: any, { emit }: any) {
			props = reactive(props);
			return {
				style: computed(() => ({
					backgroundColor: props.backgroundColor,
					color: props.color,
					borderRadius: props.rounded ? '3rem' : '0px',
				})),
				onClick() {
					emit('clicked');
				},
			};
		},
	};
</script>

<style scoped>
	.btn {
		font-weight: 400;
		border: 0;
		padding: 2px;
		cursor: pointer;
		display: inline-block;
		padding: 10px 16px;
		line-height: 1;
	}
</style>