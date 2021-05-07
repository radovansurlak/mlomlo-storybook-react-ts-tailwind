import React from "react";
import { InfoBox } from "../components/InfoBox";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: "InfoBox",
  decorators: [withKnobs],
};

export const Primary = () => {
  return (
    <InfoBox className="mt-64px">
      Kdybyste za sebe postupně seřadili celou flotilu letadel Ryanair, dosáhla
      by až na okraj Mlečné dráhy? Ryanair v roce 2023 představí svou první
      bitevní vesmírnou loď jménem Bestprice!
    </InfoBox>
  );
};


