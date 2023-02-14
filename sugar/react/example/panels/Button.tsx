import { PanelBody, PanelHeading, PanelRoot } from "./Panel";
import {
  ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS,
  Button,
  ButtonWithIcon,
  IconOnlyButton,
} from "../../src";
import { getButtonDisplayValue } from "../utils";
import { Checkmark } from "../Checkmark";

export const ButtonsPanel = () => (
  <PanelRoot>
    <PanelHeading>Buttons</PanelHeading>
    <PanelBody>
      {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
        <Button
          className="whitespace-nowrap"
          color={color}
          variant={variant}
          key={`button-color-${color}-variant-${variant}`}
        >
          {getButtonDisplayValue(color, variant)}
        </Button>
      ))}
    </PanelBody>
  </PanelRoot>
);

export const ButtonsWithIconsPanel = () => (
  <PanelRoot>
    <PanelHeading>Buttons with Icons</PanelHeading>
    <PanelBody>
      {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
        <ButtonWithIcon
          className="whitespace-nowrap"
          color={color}
          variant={variant}
          key={`button-color-${color}-variant-${variant}`}
        >
          <Checkmark />
          {getButtonDisplayValue(color, variant)}
        </ButtonWithIcon>
      ))}
    </PanelBody>
  </PanelRoot>
);

export const IconOnlyButtonsPanel = () => (
  <PanelRoot>
    <PanelHeading>Icon Only Buttons</PanelHeading>
    <PanelBody>
      {ALL_POSSIBLE_COLOR_VARIANTS_COMBINATIONS.map(({ color, variant }) => (
        <IconOnlyButton
          color={color}
          variant={variant}
          key={`button-color-${color}-variant-${variant}`}
          title={getButtonDisplayValue(color, variant)}
        >
          <Checkmark />
        </IconOnlyButton>
      ))}
    </PanelBody>
  </PanelRoot>
);