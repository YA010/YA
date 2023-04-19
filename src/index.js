// Import required modules and components

import React,{ Suspense, useEffect, useState } from 'react';
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
import { app,auth, firestore } from './components/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Login from './components/login';
import { useHistory } from 'react-router-dom';
// custom function to enable dark theme replace if you think yours is better

// Add or remove the "dark" class based on if the media query matches
function AuthenticationWrapper({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      return; // Wait until Firebase authentication is complete
    }
  
    if (!user) {
      if (history.location.pathname !== '/login') {
        history.push('/login');
      }
    } else {
      if (history.location.pathname === '/login') {
        history.push('/dashboard');
      }
    }
  }, [user, loading, history]);

  return children;
}



// main function being rendered
function RenderApp() {
  
  const [user, loading, error] = useAuthState(auth);
 return (
  
  <IonReactRouter>
    <AuthenticationWrapper>
  <IonApp>
  
  {user ? (<>
   
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
    </> ) : (<> 
  
  <IonPage id="main">
  <Route path="/login" component={Login} exact={true} />
 

  
</IonPage>

    
    </> )}
   
  </IonApp>
  </AuthenticationWrapper>
</IonReactRouter>

);

}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RenderApp />);