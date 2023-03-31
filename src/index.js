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
import { Grid } from '@mui/material';



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
        <Grid id="contents" container spacing={0}>
          <IonToolbar mode="ios" color="primary">
            <Grid xs={5} sm={4} md={3} lg={3}>
              
            </Grid>
            {document.body.classList.contains("dark") ? (
              <>
                <IonButton mode="ios" color="medium" slot="end" onClick={() => toggleDarkTheme()}>
                  <DarkModeRoundedIcon />
                </IonButton>
              </>
            ) : (
              <>
              </>
            )}
          </IonToolbar>
        </Grid>
        <IonTabBar color="medium" style={{ border: "0" }}>
          <IonTabButton id="home" tab="home" href="/dashboard">
            <IonIcon icon={desktop} />
            <IonLabel>Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton id="Search" tab="search" href="/search">
            <IonIcon icon={searchCircle} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton id="profile" tab="profile" href="/profile">
            <IonIcon icon={personCircle} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
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