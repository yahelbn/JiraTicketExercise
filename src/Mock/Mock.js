
import MockAdapter from "axios-mock-adapter";


export const runMock = (axios) => {
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)



//Provider -> Projects 
mock.onGet("/providers", { params: { provider: "Jira" } }).reply(200, {
    projects: [
    { label:"Platform A" , value: "Platform A"},
    { label:"Platform B" , value: "Platform B"},
    { label:"Platform C" , value: "Platform C"}],
  });


  mock.onGet("/providers", { params: { provider: "Slack" } }).reply(200, {
    projects: [
        { label:"Private Chat" , value: "Private Chat"},
        { label:"Confrence" , value: "Confrence"},
        { label:"Weekly" , value: "Weekly"}],
  });


  mock.onGet("/providers", { params: { provider: "Monday" } }).reply(200, {
    projects: [
        { label:"Task 1" , value: "Task 1"},
        { label:"Task 2" , value: "Task 2"},
        { label:"Task 3" , value: "Task 3"}],
  });



//Projects -> Issue Type


mock.onGet("/issuetype", { params: { projectname: "Platform A" } }).reply(200, {
    issuetype: [
        { label:"Task" , value: "Task"},
        { label:"Bug" , value: "Bug"},
        { label:"Story" , value: "Story"}],
  });

  mock.onGet("/issuetype", { params: { projectname: "Platform B" } }).reply(200, {
    issuetype: [
        { label:"Task" , value: "Task"},
        { label:"Bug" , value: "Bug"},
        { label:"Story" , value: "Story"}],
  });

  mock.onGet("/issuetype", { params: { projectname: "Weekly" } }).reply(200, {
    issuetype: [
        { label:"Task" , value: "Task"},
        { label:"Bug" , value: "Bug"},
        { label:"Story" , value: "Story"}],
  });


  mock.onGet("/issuetype", { params: { projectname: "Task 1" } }).reply(200, {
    issuetype: [
        { label:"Task" , value: "Task"},
        { label:"Bug" , value: "Bug"},
        { label:"Story" , value: "Story"}],
  });

  mock.onGet("/issuetype", { params: { projectname: "Task 2" } }).reply(200, {
    issuetype: [
        { label:"Task" , value: "Task"},
        { label:"Bug" , value: "Bug"},
        { label:"Story" , value: "Story"}],
  });

  mock.onGet("/issuetype", { params: { projectname: "Task 3" } }).reply(200, {
    issuetype: [
        { label:"Task" , value: "Task"},
        { label:"Bug" , value: "Bug"},
        { label:"Story" , value: "Story"}],
  });


}