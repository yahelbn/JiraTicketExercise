import React from 'react';

//Components
import { ButtonIconContainer, ButtonIconText , ButtonIconWrapper} from './ButtonIconElements'
import { Row } from '../FormTicket/FormTicketElements'

//Icons 
import { JiraIcon, SlackIcon , MondayIcon} from './ButtonIconElements'


//Global consts
import {providers} from '../../Global/constants'

function ButtonIcon({active, setActive}) {


  return (
    <ButtonIconWrapper>
      <Row>
        <ButtonIconContainer onClick={()=>{setActive(1)}}>
              <JiraIcon active={active===1}/>
              <ButtonIconText active={active===1}>{providers[1]}</ButtonIconText>
        </ButtonIconContainer>
       
        <ButtonIconContainer onClick={()=>{setActive(2)}}>
              <SlackIcon active={active===2}/>
              <ButtonIconText active={active===2}>{providers[2]}</ButtonIconText>
        </ButtonIconContainer>
       
        <ButtonIconContainer onClick={()=>{setActive(3)}}>
              <MondayIcon active={active===3}/>
              <ButtonIconText active={active===3}>{providers[3]}</ButtonIconText>
        </ButtonIconContainer>
       </Row>
    </ButtonIconWrapper>
  );
}

export default ButtonIcon;