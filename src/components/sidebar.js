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
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default function Sidebar() {
   const history = useHistory();

   const handleDashboardClick = () => {
     history.push('/dashboard');
   };
   const profile = () => {
      history.push('/profile');
    };
    
    const learn = () => {
      history.push('/learn');
    };
    const help = () => {
      history.push('/help');
    };
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
    
    <IonMenu contentId="main" id="mena" >
<IonHeader>
  <IonToolbar color="primary" >
  <IonCol sizeXs={5} sizeSm={4} sizeMd={3} sizeLg={3 } >
     <img id="logo" fill="#p4420"   src={require('../images/CCAI white.png')} />
 </IonCol> 
  </IonToolbar>
</IonHeader>

         <IonRow color="primary">
            <IonCol>
           <IonRow>
          <IonButton id="dashboard"   onClick={handleDashboardClick}>
             <IonLabel style={{fontWeight: "800"}} id="dash"> <DesktopMacRounded/> Dashboard</IonLabel>
          </IonButton>
          </IonRow>
          <IonRow>
          <IonButton id="profile" tab="profile" onClick={profile}>
             <IonLabel style={{fontWeight: "800"}}> <Person2Outlined/>Profile</IonLabel>
          </IonButton>
         </IonRow>
         <IonRow>
          <IonButton id="learn" tab="learn" onClick={learn}>
             <IonLabel style={{fontWeight: "800"}}> <BookOnlineRounded/>Learn a skill</IonLabel>
          </IonButton>
          </IonRow>
          <IonRow>
          <IonButton id="signout" tab="signout"  onClick={() => signOut(auth)}>
             <IonLabel style={{fontWeight: "800"}}> <BookOnlineRounded/>Sign Out </IonLabel>
          </IonButton>
        </IonRow>
        <IonRow>
          <IonButton id="help" tab="help" onClick={help}>
             <IonLabel style={{fontWeight: "800 "}}> <HelpCenterRounded/> Help center</IonLabel>
          </IonButton>
          </IonRow>
          </IonCol> </IonRow> 
         
         
      
</IonMenu>
     

                
                </>
    )
}
