import styled from 'styled-components'


export const FormTicketWraper = styled.div`
        /* height: 672.96px; */
        width: 611px;
        border: 1px solid #dddde2;
        border-radius: 10px;
        box-shadow: 1px 18px 39px 10px rgba(237,237,239,0.68);
        -webkit-box-shadow: 1px 18px 39px 10px rgba(237,237,239,0.68);
        -moz-box-shadow: 1px 18px 39px 10px rgba(237,237,239,0.68); 
        padding: 24px;
     `


export const FormTicketContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`

export const FormTicketHeader = styled.h3`
    color: #482a82;
    padding: 10px;
`

export const FormTicketSecondaryHeader = styled.span`
    font-weight: 800;
    font-size: medium;
    color: #482a82;
`


export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: ${props => props.width || 'auto'};

`

export const Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: ${props => props.margin || '0 10px'};
    width: ${props => props.width || '100%'};
`

export const Grayline = styled.hr`
width: 100%;
height:1.5px;
border-width:0;
color:#e3e7eb;
background-color:#e3e7eb;
`


export const FormInput = styled.input`
    width: 100%;
    margin: 2px 0;
    height: ${props => props.height || '30px'};
    padding: 0 6px;
    border:1.6px solid #d1d7de;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: left;
    vertical-align: top;
    border-radius: 5px;

`

export const FormTextArea = styled.textarea`
    width: 100%;
    margin: 2px 0;
    height: ${props => props.height || '30px'};
    padding: 0 6px;
    border:1.6px solid #d1d7de;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: left;
    vertical-align: top;
    border-radius: 5px;

`

export const GrayHeader = styled.span`
    font-size: medium;
    color: #d2dae0;
`

export const GrayText = styled.span`
    font-size: 12px;
    font-weight: 700;
    color: #c9cacc;
`



export const ButtonStyled = styled.button`
  margin: 15px;
  text-transform: capitalize;
  border-radius: 50px;
  background: #5e7bff;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 12px;
  outline: none;
  border: 0.2px lightgray solid;
  cursor: pointer;
  font-weight: normal;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  &:hover {
    box-shadow: 0px 15px 20px #5e7bff;
    color: #fff;
    transform: translateY(-7px);
  }
`;


export const SelectContainer = styled.select`
    width: 100%;
    margin: 2px 0;
    height: 30px;
    padding: 0 6px;
    border:1.6px solid #d1d7de;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%235d7afe' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
    background-position: calc(100% - 0.75rem) center !important;
    -moz-appearance:none !important;
    -webkit-appearance: none !important; 
    appearance: none !important;
    padding-right: 2rem !important;
`

export const AlertText = styled.span`
  direction: ltr;
  text-align: center;
  margin-top: 24px;
  color: ${({ error }) => (error ? "brown" : "#1d5630")};
  font-size: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ error }) => (error ? "#f8d7da" : "#d3ebdb")};
  border: 0.5px solid ${({ error }) => (error ? "#f08080" : "#008080")};
  border-radius: 8px;
  margin-bottom: 15px;
  width: 100%;
`;
