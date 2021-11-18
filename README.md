## Frontend Project

### Table of content

- [About the Project](#about)
- [Built with](#built)
- [Getting started](#started)
- [Prerequisites](#requisites)
- [Installation](#install)
- [Usage](#usage)
- [App structure](#structure)<br/>
   -[Pages](#pages)<br/>
   -[dashboard](#dashboard)<br/>
   -[redux](#redux)<br/>
   -[mocks](#mocks)<br/>
   -[tests](#test)<br/>
- [Responsiveness](#responsive)
- [challenges](#challenges)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknoqledgements](#knowledge)


#### About the project <div name='about'/>
***
This a responsive frontend project which renders data fetched from a json-server API. The data fetched are random reports stored in a json format. 

#### Built with <div name='built'/>
***
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

* Next.js
* React
* Redux
* Boostrap

#### Getting started <div name='started'/>
To get a local copy up and running follow these simple example steps.

#### Prerequites <div name='requisites'/>
Make sure to have the lastest version of node installed on your device. To install the lastest version of node, run
* npm
  ```
   npm install npm@latest -g
  ```
  
#### Installation <div name='install'/>
1. Clone the repo either by downloading a zip form github to your local environment or with git clone (the recommended way).
    ```
      git clone https://github.com/Benloco/kysofrontendproject.git
    ```
  
2. Install NPM packages (dependencies). run
   ```
    npm install
   ```
   

#### Usage <div name='usage'/>
##### Available Scripts
* To run the app in development mode.
   ```
    npm run dev
   ```
Open http://localhost:3000 to view it in the browser. The default on which the app runs is 3000. This can however be changed.

* To run all tests
   ```
    npm run test
   ```
   This runs the tests in an automated watch mode
   
* To start the json-server, run
   ```
    npm run jsonserver
   ```
   The json server is set to run on port 8000 in watch mode. The set port can be changed in package.json
   
* To run the app in production mode
   ```
    npm run start
   ```
 * Run to build from production
   ```
   npm run build
   ```
 
#### App Structure<div name='structure'/>
 ***
Within the download you'll find the following directories and files, logically grouped. You'll see something like this:
<p align="left">
  <img src="https://user-images.githubusercontent.com/74012997/142231859-c0b636e1-8de6-4d96-b5e1-0513ac2b7086.png" width="350" title="directory tree"/><br/>
  <img src="https://user-images.githubusercontent.com/74012997/142231851-0c6898b0-2863-4218-a51e-12668011058f.png" width="350" alt="accessibility text"/>
</p>

#### pages folder <a id='pages'/>
* pages/ _app.js<br/> 
  Exports by default the MyApp component.
  This is the entry point of the entire application where props are passed to the child compoents in the entire application.
  The fetchReport action is dipatched in the MyApp component when it first mounts, making an API call to retrieve the reports from the json-server.
  The reportWebVitals function in the file, measures the metrics/ performance as experienced by user. These metrics include but not limited to 
  * Time to First Byte (TTFB)
  * First Contentful Paint (FCP)
  * Largest Contentful Paint (LCP)
  * Next.js-hydration
 as indicated and explained in the original docs. [read more](https://nextjs.org/docs/advanced-features/measuring-performance)
 
* pages/ _document.js <br/>
  Contains a custom class which extends document, rendering html tags with meta data for search engine optimization.

* pages/ index.js<br/>
  The first UI you encounter when you hit the url (http://localhost:3000). It displays the Project title, author and a button to view reports on the dashboard.<br/>
  
  <img src="https://user-images.githubusercontent.com/74012997/142455505-e01ee6e7-03df-48a4-b636-d814a880b571.png" title="index page"/>
  
 
 #### Dashboard Folder <a id='dashboard'>
 *  dashboard/ dashboard.js <br/>
 The default export in this file is the Dashboar function / component.
 Using the useSelector hook from react-redux, this component gets the reports from the redux store and renders it to the user in a readable format.
 Due to inconsistencies in the report data (which means not all data fields are availalble for the entire data), the NotAvailable function is called. This function
 is to return a component indicating the non availbility of a field for a particular report.
 The NotAvailable is exported as secondary function.

   Each report has it's correspnding social data which contains the number of comments, views and stars for each report, the ViewsAndComments comments componet / function
   takes the id and tags of the report and finds the corresponding social for each report. This component returns the number of views, comments, stars and tags for each          report.
   
   Each report on the dashboard can be viewed in detail by clicking on the eye icon at the buttom left corner of the report as show below.<br/>
  
  <img src="https://user-images.githubusercontent.com/74012997/142454633-83dbfc72-49e2-46f9-9472-4af498867825.jpg" title="Report Dashboard"/><br/>

* dashboard/ [id].js <br/>
  When a user decides to view a report by clicking on the eye icon, as indicated above; the default component, Report (in the [id].js file), is rendered. This component displays   detailed information on the report. The report ID is destructured from the context props (cts) of the getInitialProps of the component and an API request is made to fetch   report with the said ID along with it social. The response is then coverted to JSON and returned as props to the Report Component which then renders the data received.
  This report can be edited by clicking on the edit button with a pen icon located at the top right of the page. The edit can be made in a modal which pops up when the edit button  is clicked as shown in the image below.<br/>
  
  <img src="https://user-images.githubusercontent.com/74012997/142458487-528c3f53-2ab0-4d7b-9a97-ca6d78cc4ac1.jpg" title="edit page"/>
 
 * dashboard/ edit.js <br/>
   The edit.js file exports the edit modal as EditReport
   It takes two props, report and social respectively. The allowed fields for editting are views, tags, stars. descrption and name. 
   The views automatically increased by one on mount. The editted data is the passed as a paramrter to the editReport function imported from redux action folder and dispatched to be saved.  
   The name and description property cannot be empty on save.
  
   <img src="https://user-images.githubusercontent.com/74012997/142458733-6994bc2a-c22b-48ef-8986-bc9f0cc6249c.png" title="edit modal"/>
  
  * dashboard/ index.js
    Exports the Dashboard component
  
  *  dashboard/ reportsFilter.js <br/>
      This exports the FilterReports function used on the main dashboard for filtering reports. This is intented to act as a search functionality making it easier for user to find specific reports. The filter only checks for the title and description of each report an returns the best matches on keypress and text change.
  
  <img src="https://user-images.githubusercontent.com/74012997/142456993-8e3a6940-7e52-4c66-852b-6a10cee1e340.jpg" title="reports filter"/>
      
 #### footer folder
 The footer.js file exports the footer component. The footer component is currently not in use.
 
 #### loading
 This is an activity indicator created to tell the user of an ongoing activity like saving or loading events.
 It is exported from the loading.js file and import into several components in the app where it is needed.
     
 #### navbar folder
   As the name suggests, it contains the navigation bar exported from the navbar.js file into the _document.js file.
   The navbar component has the nav item dashboard which navigates you to the dashboard on click to view the reports.
 
 #### redux <a id='redux'/>
 * redux/actions<br/>
     The various redux actions describing the events that happened in the application for getting both the reports and socials are implemented in the reportActions.js and socialActions.js.<br/> 
     It contains the action files. It used to trigger action to update the redux state
 * redux/rctions /reportsActions.js <br/>
       getReports() - this disptaches the fetched data (reports) to the reducer.<br/>
       loadReport() - mimics the loading action before the data is recieved to the store.<br/>
       failedReports() -  only gets executed when there's an error in fetching the data from the API.<br/>
       fetchReports()- This is dipatched from the _app.js file.<br/>
       savingEditedReports() - <br/>
       editReportFailed()- gets called when there's an error whilst saving the edited report <br/>
       editReports() - makes the API PUT request to save the editted reports. It is dispatched from the edit.js file.
       
 * redux/actions/ socialActions.js<br/>
       getSocials() - this disptaches the fetched data (socials) to the reducer. <br/> 
       loadSocials() - mimics the loading action before the data is recieved to the store.<br/>
       failedSocials() -  only gets executed when there's an error in fetching the data from the API.<br/>
       fetchSocials() - This function is disptached when the fetchReports() begins to execute.<br/>
       savingEditedSocial() - <br/>
       editSocialFailed() - gets called when there's an error whilst saving the edited social <br/>
       editSaved() - returns a boolean indicating the successful save of the data.<br/>
       
  * redux /constants<br/>
     These are the various action types expecting to take place in the process of retreiving and saving data.<br/>
     It contains the actionTypes which will be used to configure reducer & actions.
     
  * redux /reducers<br/>
    These are pure functions that take an actions and the previous states of the application and returns the new state.
    The action describes what happened and it is the reducer's job to return the new state based on that action which is returned fron the various actions in the actions folder.<br/>
    It contains the reducers files, each file will have default export of function and will have various switch cases to update the redux state.
    
  * redux/store <br/>
    The Redux store is the application state stored as objects. Whenever the store is updated, it will update the components subscribed to it. The store has the responsibility of storing, reading, and updating state.<br/> It contain the create store function which returns a store object.
    
 #### __tests__ <a id='test'>
  All tests run on the various compnents are contained in this folder.<br/>
 <img src="https://user-images.githubusercontent.com/74012997/142452728-abd1761e-0a06-4df3-a241-40f63dc9d893.png" width="350" title="all tests passed"/><br/>
 #### __mocks__ <a id='mocks'>
  All mock (data, functions and API mocks) used in the running the tests can be found in this folder.
 #### test.utils.js
 It containa a method to render the jest component file
This function is required since we need to add top wrapper component of next-router, redux & styled-components. Without adding this wrapper component, test cases will not run.
   
 #### Responsiveness<a id='responsive'/>
   ***
   The application is designed for mobile devices (phones, ipad pro, etc), deskstops and notebooks.<br/>
   
   <p float="left">
   <img src="https://user-images.githubusercontent.com/74012997/142468747-44d18226-4c95-47f0-a7de-d9e4e2d805c0.png" title="view on iPad Pro" height='552' width="500"/>
   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

   <img src="https://user-images.githubusercontent.com/74012997/142468767-a31f3a3c-8d98-4774-ba0e-94709605c9f7.png" title="view on iPhone X" width="300" />
   </p>
   <br/>
   
#### Challenges <div name='challenges'/>
   ***

#### Contributing <div name='contributing'/>
   ***
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch `git checkout -b feature/AmazingFeature`<br/>
Commit your Changes `git commit -m 'Add some AmazingFeature'`<br/>
Push to the Branch `git push origin feature/AmazingFeature` <br/>
Open a Pull Request


#### License <div name='license'/>
   ***
Distributed under the MIT License. See LICENSE.txt for more information.

#### Contact <div name='contact'/>
   ***
Ben Quarshie - [email](benquarshie2@gmail.com) && [linkedIn](https://www.linkedin.com/in/ben-quarshie-a1369a100/) <br/>

Project Link :  `git clone https://github.com/Benloco/kysofrontendproject.git`


#### Acknowdledgements <div name='knowledge'/>
   ***
* Next.js
* React
* Fontawesome
* Bootstrap
* Redux
* Jest
* React testing Library
* Reduxjs/toolkit
