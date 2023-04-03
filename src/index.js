// Import required modules and components

import React,{ Suspense } from 'react';
import './index.css';
import { IonApp, IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, IonIcon,  IonRouterOutlet,  IonTabs, IonImg, IonRoute, IonTabBar, IonTabButton, IonPage, IonLabel, IonButton } from '@ionic/react';
import { calendar, personCircle, informationCircle } from 'ionicons/icons';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {  map, desktop,searchCircle } from 'ionicons/icons';
import { createRoot } from 'react-dom/client';
import { IonReactRouter } from '@ionic/react-router';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import App from './App';
import Button from 'react-bootstrap/Button';
import { Grid } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
// custom function to enable dark theme replace if you think yours is better
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
toggleDarkTheme(prefersDark.matches);


// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
  document.body.classList.toggle('dark', shouldAdd);
 
}


// main function being rendered
function RenderApp() {
 
 return (
  <IonReactRouter>
  <IonApp>
    <IonPage id="main">
      <IonHeader fixed mode="ios">
        
         
     
           
           
            <Navbar className="justify-content-end" collapseOnSelect expand="md" id="navhead" variant="light">
            <Grid id="contents" container spacing={0}  > 
                 
                 <Grid  xs={5} sm={4} md={3} lg={3 } direction="row">
    <img id="logo" fill="#p4420" slot="start" src={require('./careerscamplogo.png')} />
   
</Grid> 
<Navbar.Toggle style={{marginLeft: "auto", marginRight: "2vw"}} className="justify-content-end" aria-controls={`offcanvasNavbar-expand-md`} />
 
</Grid>
           <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav style={{alignItems: "center"}} className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" style={{fontWeight: "900", color: "black"}}>About</Nav.Link>
                  <Nav.Link href="#action2" style={{fontWeight: "900", color: "black"}}>Contact</Nav.Link>
              
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        
        
      </IonHeader>
      <IonContent color="light">
        <Route path="/dashboard" component={App} exact={true} />
        <Route path="/" render={() => <Redirect to="/dashboard" />} exact={true} />
      </IonContent>
    </IonPage>
  </IonApp>
</IonReactRouter>

);

}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RenderApp />);