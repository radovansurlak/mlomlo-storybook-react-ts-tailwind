import React from "react";
import { ArrowButton } from "../components/ArrowButton";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "ArrowButton",
  decorators: [withKnobs],
};

export const Primary = () => {
  return <ArrowButton className="mt-10" text="Najdi levné letenky" />;
};
