 import {
  ButtonProps as MuiButtonProps,
} from '@mui/material';
import { CustomButton } from './styles';
 
export interface ButtonProps extends MuiButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <CustomButton {...rest}>{label}</CustomButton>;
};