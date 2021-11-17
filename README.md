## Frontend Project

### Table of content

- [About the Project](#about)
- [Built with](#built)
- [Getting started](#started)
- [Prerequisites](#requisites)
- [Installation](#install)
- [Usage](#usage)
- [App structure](#structure)
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
Within the download you'll find the following directories and files, logically grouped. You'll see something like this:
<p align="left">
  <img src="https://user-images.githubusercontent.com/74012997/142231859-c0b636e1-8de6-4d96-b5e1-0513ac2b7086.png" width="350" title="hover text"/><br/>
  <img src="https://user-images.githubusercontent.com/74012997/142231851-0c6898b0-2863-4218-a51e-12668011058f.png" width="350" alt="accessibility text"/>
</p>

#### The pages folder
* _app.js<br/> 
  Exports by default the MyApp component.
  This is the entry point of the entire application where props are passed to the child compoents in the entire application.
  The fetchReport action is dipatched in the MyApp component when it first mounts, making an API call to retrieve the reports from the json-server.
  The reportWebVitals function in the file, measures the metrics/ performance as experienced by user. These metrics include but not limited to 
  * Time to First Byte (TTFB)
  * First Contentful Paint (FCP)
  * Largest Contentful Paint (LCP)
  * Next.js-hydration
 as indicated and explained in the original docs. [read more](https://nextjs.org/docs/advanced-features/measuring-performance)
 
* _document.js <br/>
  Contains a custom class which extends document, rendering html tags with meta data for search engine optimization.

* index.js<br/>
  The first UI you see when you hit the url (http://localhost:3000). It contains the Project title, author and a button to view reports on the dashboard.
  
 
 #### Dashboard Folder
 * Dashboard.js <br/>
 The default export in this file is the Dashboar function / component.
 Using the useSelector hook from react-redux, this component gets the reports from the redux store and renders it to the user in a readable format.
 Due to inconsistencies in the report data (which means not all data fields are availalble for the entire data), the NotAvailable function is called. This function
 is to return a component indicating the non availbility of a field for a particular report.
 The NotAvailable is exported as secondary function.

   Each report has it's correspnding social data which contains the number of comments, views and stars for each report, the ViewsAndComments comments componet / function
   takes the id and tags of the report and finds the corresponding social for each report. This component returns the number of views, comments, stars and tags for each          report.
   
   Each report on the dashboard can be viewed by clickig on the eye icon on the button left corner of the report

* [id].js <br/>
  When a user decides to view a report by clicking on the eye icon, as indicated above; the default component, Report (in the [id].js file), is rendered. This component displays   detailed information on the report. The report ID is destructured from the context props (cts) of the getInitialProps of the component and an API request is made to fetch   report with the said ID along with it social. The response is then coverted to JSON and returned as props to the Report Component which then renders the data received.
  This report can be edited by clicking on the edit button with a pen icon located at the top right of the page. The edit can be made in a modal which pops up when the edit button  is clicked.
 
 * edit.js <br/>
   The edit.js file exports the edit modal as EditReport
   It takes two props, report and social respectively. The allowed fields for editting are views, tags, stars. descrption and name. 
   The views automatically increased by one on mount. The editted data is the passed as a paramrter to the editReport function imported from redux action folder and dispatched to be saved.  
   The name and description property cannot be empty on save.
   
  * index.js
    Exports the Dashboard component
  
  *   reportsFilter.js <br/>
      This exports the FilterReports function used on the main dashboard for filtering reports. This is intented to act as a search functionality.
 #### footer folder
    The footer.js file exports the footer component. The footer component is currently not in use.
 
 ### loading
     This is an activity indicator created to tell the user of an ongoing activity like saving or loading events.
     It is exported from the loading.js file and import into several components in the app where it is needed.
     
 #### navbar folder
   As the name suggests, it contains the navigation bar exported from the navbar.js file into the _document.js file.
   The navbar component has the nav item dashboard which navigates you to the dashboard on click to view the reports.
   
  
   
   

#### Contributing <div name='contributing'/>
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

Fork the Project
Create your Feature Branch `git checkout -b feature/AmazingFeature`<br/>
Commit your Changes `git commit -m 'Add some AmazingFeature'`<br/>
Push to the Branch `git push origin feature/AmazingFeature` <br/>
Open a Pull Request


#### License <div name='license'/>
Distributed under the MIT License. See LICENSE.txt for more information.

#### Contact <div name='contact'/>
Ben Quarshie - [email](benquarshie2@gmail.com) && [linkedIn] (https://www.linkedin.com/in/ben-quarshie-a1369a100/) <br/>

Project Link :  `git clone https://github.com/Benloco/kysofrontendproject.git`


#### Acknowdledgements <div name='knowledge'/>
* Next.js
* React
* Fontawesome
* Bootstrap
* Redux
* Jest
* React testing Library
* Reduxjs/toolkit
