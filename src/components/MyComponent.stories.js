import MyComponent from './MyComponent';

export default {
  title: 'Example/My Component',
  component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {};
