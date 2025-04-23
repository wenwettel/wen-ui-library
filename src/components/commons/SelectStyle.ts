import styled from 'styled-components'
import Select, { Props as SelectProps } from 'react-select';
import { Size } from '../CountrySelect/CountrySelect';

interface StyledSelectProps extends SelectProps<any> {
  $size?: Size;
}

const sizeMap = {
  small: "120px",
  medium: "200px",
  large: "280px",
  full: "100%",
};

const SelectStyle: React.ComponentType<StyledSelectProps> = styled(Select)<StyledSelectProps>`
  width: ${({ $size }) => ($size ? sizeMap[$size] : "200px")};
  .customSelect__control {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #D0D0D0;
    border-radius: 10px;
    opacity: 1;
    width: 100%;
    text-align: left;
    font: normal normal 400 14px/21px var(--font-open-sans);
    letter-spacing: 1.8%;
    color: #5a5a5a;
    box-shadow: 0px 0px 2.55px rgba(0, 0, 0, 0.15);
    height: 40px;
    padding: 0 8px; // Ajusta el padding para centrar el contenido

    &:hover {
        border-color: #D0D0D0 !important;
        cursor: pointer;
    }

}

.customSelect__placeholder {
    color: #d0d0d0; 
    font-size: 14px; 
    font-family: var(--font-open-sans);
}

.customSelect__control-disabled {
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;
}

//apertura del select
.customSelect__control.customSelect__control--is-focused.customSelect__control--menu-is-open,
.customSelect__control.customSelect__control--is-focused {
    box-shadow: 0 0 0 1px #0097a9;
    border: 1px solid #0097a9;
}


&.select-error {
.customSelect__control {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #b7202E;
    opacity: 1;
    width: 100%;
    text-align: left;
    letter-spacing: 1.8%;
    color: #5a5a5a;
    box-shadow: 0 0 0 1px #b7202E;
    border-right-width: 1px;

    &:hover {
        border-color: #b7202E !important
    }

    &:focus {
        border: 1px solid #b7202E ;
    }
}

.customSelect__control--is-focused.customSelect__control--menu-is-open,
.customSelect__control.customSelect__control--is-focused {
    box-shadow: 0 0 0 1px #b7202E ;
    border: 1px solid #b7202E
}
}



.customSelect__indicator-separator {
    display: none;
}
// Estilo del menú desplegable
.customSelect__menu {
    z-index: 100;
}
.customSelect__option{
    cursor: pointer;
}

.component-menu{
    max-height: 180px;
    overflow-x: auto;
}

`


export { SelectStyle }

