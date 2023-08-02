import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRow, IonTabBar, IonTabButton, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import { desktop, home, star } from "ionicons/icons";
import { BookOnlineRounded, Dashboard, DesktopMacRounded, DocumentScannerOutlined, Google, HelpCenter, HelpCenterRounded, MenuRounded, Person2Outlined, Search, SearchOffRounded, SettingsApplications } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { app,auth, firestore } from './firebase';
import {setPersistence, browserSessionPersistence} from "firebase/auth"
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default function Login() {
  
   const signInWithGoogle = async (e) => {
     
     e.preventDefault();
 
     try {
      
       const provider = new GoogleAuthProvider();
       const result = await signInWithPopup(auth, provider);
      console.log(result)
       // Upload user's uid to Firestore
     } catch (error) {
       console.error(error);
    
     } 
   };
 
   const [user] = useAuthState(auth);
   const [user2, setUser2] = useState(null); // Initialize user state as null
   
   // Get the auth object from Firebase
 
   // Update the user state when the auth state changes
   useEffect(() => {
     if (user) {
       setUser2(user);
     } else {
       setUser2(null);
     }
   }, [user]);

   useEffect(() => {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          
        })
        .catch((error) => {
         
        });
    }, [user]);
   
  
  
    return (
       
        <>
<IonHeader>
  <IonToolbar color="primary" >
    <IonGrid>
    <IonRow class="ion-justify-content-center">
  <IonCol sizeXs={7} sizeSm={6} sizeMd={4} sizeLg={3 } >
 </IonCol> 
 </IonRow>
 </IonGrid>
  </IonToolbar>
</IonHeader>

 <IonContent color="primary">
    <IonGrid>
    <IonRow class="ion-justify-content-center">
           
    <IonCol sizeXs={8} sizeSm={8} sizeMd={6} sizeLg={6}>
    {user ? (<>     
        <IonCard mode="ios" color="primary" >
            <IonCardHeader>
           <IonCardSubtitle style={{textAlign: "center", color: "white"}}>
      You are logged in &  will be redirected soon 
           </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
               
            </IonCardContent>
           </IonCard>
               </> ) : (<> 
                <IonCard mode="ios" color="primary" >
            <IonCardHeader>
           <IonCardTitle style={{textAlign: "center", color: "white"}}>
        Sign In
           </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonRow>
            <IonCol sizeXs={12} sizeSm={8} sizeMd={5} sizeLg={6} style={{margin: "auto"}}>
              
            <img id="googlesign" onClick={signInWithGoogle} src={require('../images/btn_google_signin_light_pressed_web@2x.png')}/>
         
            </IonCol>
            </IonRow>
            </IonCardContent>
           </IonCard>
             </>)}
            
        </IonCol>
    </IonRow>
    </IonGrid>
 </IonContent>
     

                
                </>
    )
}
