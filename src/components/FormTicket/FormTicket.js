import React, {useState, useEffect} from 'react';
import {FiEdit} from 'react-icons/fi'
import axios from 'axios'

import { runMock } from '../../Mock/Mock'

//Const and Jsons
import {jiraInterface, providers, messages} from '../../Global/constants'

//Components
import {FormTicketContainer,  FormTicketWraper, Row ,FormTicketHeader, Column, FormTicketSecondaryHeader, Grayline, FormInput, GrayHeader, GrayText, ButtonStyled, AlertText, FormTextArea} from './FormTicketElements'
import Stepper from '../Stepper/Stepper'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

//Styles
import {SelectContainer} from './FormTicketElements'

//Validate 
import Joi from 'joi'


function FormTicket() {
  runMock(axios)
  const [active, setActive] = useState(1);
  const [jiraData, setJiraData] = useState({
    ...jiraInterface,
  });
  const [projects, setProjects] = useState(undefined)
  const [issueType, setIssueType] = useState(undefined)
  const [message, setMessage] = useState(undefined);
  const [error, setError] = useState(false);

  //Run any time the user chose new provider 
  useEffect(() => {
    axios
  .get("/providers", { params: { provider: providers[active] } })
  .then(function (response) {
    setProjects(response.data.projects)
    setJiraData({
      ...jiraData,
      project: response.data.projects[0].value,
      title: providers[active]
    });
  });
  }, [active])


//Run any time project is set
  useEffect(() => {
    getIssueType(jiraData.project);
  }, [jiraData.project])

 
  /**
   * @param projectname
   * The Project name selected then set the issuetype array and set the jiraData 
   * */
  const getIssueType = (projectname) => {
    axios
    .get("/issuetype", { params: { projectname: projectname } })
    .then(function (response) {
      setIssueType(response.data.issuetype)
      setJiraData({
        ...jiraData,
        issueType: response.data.issuetype[0].value,
        title: providers[active]
      });
    });
  }



const renderOptions = (optionsArr) => {
  return optionsArr.map((option,index) => (
    <option key={index} value={option.value}>{option.label}</option>
  ))
} 

const schema = Joi.object({
  title: Joi.string()
    .required()
    .error(new Error(messages.errorProvider)),

  project: Joi.string().required().error(new Error(messages.errorProject)),
  issueType: Joi.string().required().error(new Error(messages.errorissueType)),
  summary: Joi.string().required().error(new Error(messages.errorSummary)),
  description: Joi.string()
    .required()
    .error(new Error(messages.errorDesctiption)),
});


//Validate and notificate to the user.
const createTicket = async() =>{
  setError(false)
  setMessage(`Success! You have created your ticket in ${jiraData.title} , \n Project name: ${jiraData.project} and issue-type: ${jiraData.issueType}`)
try {
     await schema.validateAsync({
        title: jiraData.title,
        project: jiraData.project,
        issueType: jiraData.issueType,
        summary: jiraData.summary,
        description: jiraData.description,
        });
      } 
      catch (e) {
        setError(true);
        setMessage(e.message);
      }  
}


  return (
    <FormTicketWraper>
        <FormTicketContainer>
          <Row>
            <FiEdit color={'482a82'} size={18}/>
            <FormTicketHeader>Create Ticket</FormTicketHeader>
          </Row>      
          <Stepper/>
         <ButtonIcon setActive={setActive} active={active}/>

          <Row width={'100%'}>
            {projects && <Column width={'60%'}>
              <FormTicketSecondaryHeader>Project</FormTicketSecondaryHeader>
              <Grayline/>
              <SelectContainer 
                value={jiraData.project === "" ? "none" : jiraData.project}
                onChange={(event) => {
                  setJiraData({
                    ...jiraData,
                    project: event.target.value,
                  });
                }}
              >
               {renderOptions(projects)}
              </SelectContainer>
            </Column>}
           {issueType && <Column width={'40%'}>
          
              <FormTicketSecondaryHeader>Issue Type</FormTicketSecondaryHeader>
              <Grayline/>
              <SelectContainer 
                value={jiraData.issueType === "" ? "none" : jiraData.issueType}
                onChange={(event) => {
                  setJiraData({
                    ...jiraData,
                    issueType: event.target.value,
                    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting , Lorem Ipsum is simply dummy text of the printing and typesetting."
                  });
                }}
              >
               {renderOptions(issueType)}

              </SelectContainer>
            </Column>}
          </Row>
          <Row width={'100%'}>
            <Column width={'100%'}>
                <FormTicketSecondaryHeader style={{marginTop:'30px'}}>Summary</FormTicketSecondaryHeader>
                <Grayline/>
                <FormInput type="search" placeholder="Add your summary..."
                value={jiraData.summary || ""}
                onChange={(e) => {
                  setJiraData({
                    ...jiraData,
                    summary: e.target.value});
                }}
                />
              </Column>
          </Row>
          <Row width={'100%'}>
            <Column width={'100%'}>
                <FormTicketSecondaryHeader style={{marginTop:'30px'}}>Description</FormTicketSecondaryHeader>
                <Grayline/>
                <FormTextArea type="search" placeholder="Add your description..." height={"154px"}
                value={jiraData.description || ""}
                onChange={(e) => {
                  setJiraData({
                    ...jiraData,
                    description: e.target.value});
                }}
                />
                <Column style={{alignItems:"flex-end"}} margin={"0px"}><GrayText>Max 250 letters</GrayText></Column>
              </Column>
          </Row>

          <GrayHeader style={{marginTop: '25px'}}>Reporter :Seemplicity</GrayHeader>
          <Grayline/>
          <Column style={{alignItems:"flex-end"}} margin={"0px"}><ButtonStyled onClick={()=>createTicket()}>Create a Ticket</ButtonStyled></Column> 
          {message && <AlertText error={error}>{message}</AlertText>}

         </FormTicketContainer>
    </FormTicketWraper>
  );
}

export default FormTicket;