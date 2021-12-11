import React from "react";
import { Heading } from "../components";
import { theme } from "../theme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Typography/Heading",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: "number", max: 6, min: 1 },
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: "night",
          value: theme.colors.bgTint1.value,
        },
        {
          name: "day",
          value: theme.colors.white.value,
        },
      ],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Heading {...args} />;

export const Size1 = Template.bind({});

Size1.args = {
  size: "1",
  children: "The quick brown fox jumps over the lazy dog",
};

export const Size2 = Template.bind({});

Size2.args = {
  size: "2",
  children: "The quick brown fox jumps over the lazy dog",
};

export const Size3 = Template.bind({});

Size3.args = {
  size: "3",
  children: "The quick brown fox jumps over the lazy dog",
};

export const Size4 = Template.bind({});

Size4.args = {
  size: "4",
  children: "The quick brown fox jumps over the lazy dog",
};
export const Size5 = Template.bind({});

Size5.args = {
  size: "5",
  children: "The quick brown fox jumps over the lazy dog",
};

export const Size6 = Template.bind({});

Size6.args = {
  size: "6",
  children: "The quick brown fox jumps over the lazy dog",
};

export const Size7 = Template.bind({});

Size7.args = {
  size: "7",
  children: "The quick brown fox jumps over the lazy dog",
};

export const Size8 = Template.bind({});

Size8.args = {
  size: "8",
  children: "The quick brown fox jumps over the lazy dog",
};

export const Size9 = Template.bind({});

Size9.args = {
  size: "9",
  children: "The quick brown fox jumps over the lazy dog",
};
