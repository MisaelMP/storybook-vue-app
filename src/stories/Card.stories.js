import Card from '../components/Card.vue';

export default {
	title: 'Card',
	component: { Card },
	argTypes: {
		backgroundColor: { control: 'color' },
		onClick: {},
	},
};

const Template = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { Card },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: '<card v-bind="args" />',
});

export const Rounded = Template.bind({});
Rounded.args = {
	title: 'Card',
	rounded: true,
};

export const Normal = Template.bind({});
Normal.args = {
	title: 'Card',
};
