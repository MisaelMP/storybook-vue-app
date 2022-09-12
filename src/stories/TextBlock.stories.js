import TextBlock from '../components/TextBlock.vue';

export default {
	title: 'TextBlock',
	component: { TextBlock },
	argTypes: {
		msg: 'String',
		color: { control: 'color' },
	},
};

const Template = (args) => ({
	// Components used in your story `template` are defined in the `components` object
	components: { TextBlock },
	// The story's `args` need to be mapped into the template through the `setup()` method
	setup() {
		return { args };
	},
	// And then the `args` are bound to your component with `v-bind="args"`
	template: '<TextBlock msg="hello" v-bind="args" />',
});

export const Base = Template.bind({});
Base.args = {
	msg: 'storybook cunt!',
};

