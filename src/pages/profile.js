import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import moment from 'moment/moment';
import { app,auth, firestore } from '../components/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export default function Profile () {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
  
       {user ? (<> 
       
       <IonGrid>
        
       <IonRow>
        <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">

      <IonCardHeader id="amo">
      <Avatar  variant="rounded">
<img src={user.photoURL}/>
</Avatar>
      
        
      </IonCardHeader>
      <IonCardContent>
      <IonCardTitle id="title">{user.displayName}</IonCardTitle>
      <IonCardSubtitle id="subtitle">@{user.email}</IonCardSubtitle>
        <IonCardSubtitle id="subtitle">joined {moment(user.metadata.creationTime).fromNow()}</IonCardSubtitle>
     
      <IonButton onClick={() => signOut(auth)}>Log out</IonButton>
      </IonCardContent>
    </IonCard>
    </IonCol>

    <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">
      <IonCardHeader id="amo">
    
        <IonCardTitle id="title">Previous Searches </IonCardTitle>
        
      </IonCardHeader>
     <IonCardContent>
     <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>First Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          First Content
        </div>
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Second Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Second Content
        </div>
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Third Accordion</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          Third Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
     </IonCardContent>
    </IonCard>
    </IonCol>
    <IonCol sizeXs='12'>
<IonCard mode="ios" color="secondary" id="showcard">
      <IonCardHeader id="amo">
    
        <IonCardTitle id="title">Job Applications</IonCardTitle>
        
      </IonCardHeader>
     
    </IonCard>
    </IonCol>
    </IonRow>
    </IonGrid>
    </> ) :(<>
        <Grid spacing={2} xs={12} sm={6} md={4} lg={3 } direction="column">
<IonCard mode="ios" color="secondary" id="showcard">
      <IonCardHeader id="amo">
     

        <IonCardTitle id="title">Dont be sneaky , make sure to sign in </IonCardTitle>
       
       
        
      </IonCardHeader>
    </IonCard>
    </Grid>
     </> )}
         
   
        
</>
    )
}
