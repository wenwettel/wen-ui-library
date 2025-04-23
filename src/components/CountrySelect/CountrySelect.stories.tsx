
import { Meta, StoryObj } from "@storybook/react";
import { AR, UY, PY } from "country-flag-icons/react/3x2";
import CountrySelect, { CountrySelectProps } from "./CountrySelect";

const meta: Meta<CountrySelectProps> = {
  title: "Components/CountrySelect",
  component: CountrySelect,
  argTypes: {
    countries: {
      description: "Lista de países disponibles para seleccionar.",
      control: { type: 'object' },
    },
    defaultValue: {
      description: "País seleccionado por defecto.",
      control: { type: 'object' },
    },
    isDisabled: {
      description: "Desactiva el select.",
      control: { type: 'boolean' },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large", "full"],
      description: "Tamaño del select.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Un componente select para elegir países, cada uno con su bandera. Usualmente se usa junto a `country-flag-icons` para renderizar la bandera correspondiente.",
      },
    },
  },
}
export default meta


export const Default: StoryObj<CountrySelectProps> = {
  args: {
    countries: [
      { value: "AR", label: "AR", flag: AR },
      { value: "UY", label: "UY", flag: UY },
      { value: "PY", label: "PY", flag: PY },
    ],
    defaultValue: { value: "AR", label: "AR", flag: AR },
    isDisabled: false,
    size: 'small'
  }
}
