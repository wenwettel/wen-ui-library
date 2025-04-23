import styled from "styled-components"
import Button from '@mui/material/Button';

const CustomButton= styled(Button)`
&.MuiButtonBase-root.MuiButton-root{
     height: 40px;
     text-transform: none;
     font-weight: 600;
     font-size: 15px;
     line-height: 19.2px;
}
`

export {CustomButton}