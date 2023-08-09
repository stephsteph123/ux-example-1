import React from "react";

import { within, userEvent } from "@storybook/testing-library"; //needed for play function

import { expect } from "@storybook/jest";

import Component from "../components/FilterableProductTable";

export default {
  title: "FilterableProductTable",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const FilterableProductTable = Template.bind({});

export const OnlyAvailable = Template.bind({});
OnlyAvailable.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const onlyShowAvaiableButton = await canvas.getByLabelText(
    "Only show products in stock"
  );

  await userEvent.click(onlyShowAvaiableButton);

  expect(await canvas.getAllByRole('row').length).toBe(7)

};

export const SearchFruit = Template.bind({});
SearchFruit.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const searchInput = await canvas.getByPlaceholderText(
    "Search..."
  );

  await userEvent.click(searchInput);
  await userEvent.keyboard("fruit");
};
