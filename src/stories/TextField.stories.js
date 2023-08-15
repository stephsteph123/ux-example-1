import { ArgTypes } from "@storybook/blocks";
import TextField from "../components/TextField";

export default {
  title: "components/TextField",
  component: TextField,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <TextField {...args} />;

// Input
export const Input = Template.bind({});
