import { ArgTypes } from "@storybook/blocks";
import Button from "../components/Button";
import { within, userEvent } from "@storybook/testing-library"; //needed for play function
import { expect } from "@storybook/jest";

export default {
  title: "components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

// Large Button
export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

// Small Button
export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

// // Test Cases
// Hover Test Case
export const Hover = Template.bind({});
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(await within(canvasElement).getByText("click me"));
  const button = await canvas.getByText("click me");
};

