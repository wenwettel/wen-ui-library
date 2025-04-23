import { SingleValue } from "react-select";
import { SelectStyle } from "../commons/SelectStyle";

type countryOption = {
  value: string;
  label: string;
  flag: React.FC;
}

export type Size =  "small" | "medium" | "large" | "full";

export interface CountrySelectProps {
  countries: countryOption[],
  defaultValue: countryOption,
  isDisabled:boolean,
  onChange?: (selectedOption: SingleValue<countryOption>) => void;
  size?:Size
}

export const CountrySelect: React.FC<CountrySelectProps> = ({countries, defaultValue,isDisabled, onChange, size='small'}) => {

  const customOptionLabel = (option: any) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <option.flag style={{ width: 24, height: 16, marginRight: 10 }} />
      {option.label}
    </div>
  );
  return (
    <SelectStyle
      options={countries}
      formatOptionLabel={customOptionLabel}
      defaultValue={defaultValue}
      classNamePrefix="customSelect"
      isDisabled={isDisabled}
      onChange={onChange}
      $size={size}
    />
  )
}

export default CountrySelect