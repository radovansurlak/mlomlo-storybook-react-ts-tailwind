import React from "react";
import { ButtonPrimary } from "../components/ButtonPrimary";
import { Button } from "../components/Button";
import { ButtonSecondary } from "../components/ButtonSecondary";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const Gradient = () => {
  return <Button text={"Odeslat dotaz"} />;
};

export const Primary = () => {
  return <ButtonPrimary className="mt-10">Odeslat dotaz</ButtonPrimary>;
};

export const Secondary = () => {
  return <ButtonSecondary>Pridejte dotaz</ButtonSecondary>;
};
