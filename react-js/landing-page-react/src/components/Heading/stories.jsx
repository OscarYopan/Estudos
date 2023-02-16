import { Heading } from '.';
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
@@ -19,7 +17,7 @@ export default {
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
@@ -29,5 +27,5 @@ Light.parameters = {

Dark.args = {
  children: 'O texto está claro',
  light: true,
  colorDark: false,
};