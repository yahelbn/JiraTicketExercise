import styled from 'styled-components'
import { SiJirasoftware } from 'react-icons/si'
import { CgMonday } from 'react-icons/cg'
import { AiOutlineSlack } from 'react-icons/ai'


export const ButtonIconWrapper =styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const ButtonIconContainer = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    cursor: pointer;
`

export const ButtonIconText = styled.span`
    padding: 5px;
    color: ${props => props.active || '#c3cdd5'};

`
export const JiraIcon =styled(SiJirasoftware)`
    font-size: 20px;
    color: ${props => props.active ? '#1d85ff' : '#c3cdd5'};
`

export const MondayIcon =styled(CgMonday)`
    font-size: 20px;
    color: ${props => props.active ? '#1d85ff' : '#c3cdd5'};
`

export const SlackIcon =styled(AiOutlineSlack)`
    font-size: 20px;
    color: ${props => props.active ? '#1d85ff' : '#c3cdd5'};
`