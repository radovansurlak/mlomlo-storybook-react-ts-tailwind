import React from "react";
import { Box } from "../components/Box";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "Box",
  decorators: [withKnobs],
};

export const Primary = () => {
  return (
    <Box
      className="min-w-500"
      backgroundImage="https://source.unsplash.com/random/500x500"
      logo="https://pbs.twimg.com/profile_images/1364505393515425794/JyZwb6_r.jpg"
      from="Praha (PRG)"
      to="Dubaj"
      icon="/img/airplane.svg"
      labelText="od 600 Kč"
    />
  );
};
