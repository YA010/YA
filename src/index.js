// Import required modules and components

import React,{ Suspense } from 'react';
import './index.css';
import { IonApp, IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, IonIcon,  IonRouterOutlet,  IonTabs, IonImg, IonRoute, IonTabBar, IonTabButton, IonPage, IonLabel, IonButton, IonMenuToggle } from '@ionic/react';
import { calendar, personCircle, informationCircle } from 'ionicons/icons';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {  map, desktop,searchCircle } from 'ionicons/icons';
import { createRoot } from 'react-dom/client';
import { IonReactRouter } from '@ionic/react-router';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import Dashboard from './pages/dashboard';
import Button from 'react-bootstrap/Button';
import { Grid } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Profile from './pages/profile';
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
  
    <IonSplitPane when="lg" mode="ios" id="sidemenu" contentId="main">
   
     <Sidebar/>
      
      <IonPage id="main">
     
   <Header/>
      <IonContent color="light">
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/learn" component={Dashboard} exact={true} />
        <Route path="/help" component={Dashboard} exact={true} />
        <Route path="/" render={() => <Redirect to="/dashboard" />} exact={true} />
      </IonContent>
     
    </IonPage>
    </IonSplitPane>
  </IonApp>
</IonReactRouter>

);

}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RenderApp />);