import { ArgTypes } from "@storybook/blocks"
import Button from "../components/Button"

export default {
  title: 'components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick'}},
}

const Template = args => <Button {...args}/>

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md"
}
export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg"
}
export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm"
}
export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adjfdlskjfjsdkljfdjskfjklsdjflk",
  size: "sm"
}