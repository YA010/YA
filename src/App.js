// Import required modules and components
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { IonApp, IonPage, IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar, IonIcon,  IonRouterOutlet,  IonTabs, IonImg, IonRoute, IonTabBar, IonTabButton, IonLabel, IonGrid, IonRow, IonCol, IonCard, IonBackButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton } from '@ionic/react';
import { calendar, personCircle, informationCircle, map, desktop, searchCircle } from 'ionicons/icons';
import { createRoot } from 'react-dom/client';
import { IonReactRouter } from '@ionic/react-router';

// Import components to render 

// Import CSS files
import '@ionic/react/css/core.css';
import './index.css';
import './App.css';
import { TextField } from '@mui/material';

function App() {
  return (
   
    <IonGrid >
       
    <IonRow>
      <IonCol sizeXs="12" style={{marginTop: "10vh"}}>
    
<IonCardTitle id="cardstit" class='card-text' style={{textAlign: "center", fontWeight: "800"}}>Generate a custom cv </IonCardTitle>

      </IonCol>
      </IonRow>
      <IonRow>
          <IonCol sizeXs="12" >
         
          <IonCard  mode="ios" color="secondary" id="showcard" >
        
     <IonCardHeader >
   
 <IonCardTitle class='card-text'>Paste in your cv here </IonCardTitle>

</IonCardHeader>
     <IonCardContent>
    
     <TextField
          id="standard-textarea"
          label="Cv Here"
          placeholder="finish"
          multiline
          focused
          color='primary'
          style={{width: "100%", color:"white"}}
          variant="standard"
     
        />
        <IonRow >
        <IonCol sizeXs="6" >
       <IonButton color="medium" expand="block">Preview</IonButton>
       </IonCol>
       <IonCol sizeXs="6" >
       <IonButton color="medium" expand="block">Submit</IonButton>
       </IonCol>
       </IonRow>
                  </IonCardContent>
                  
   </IonCard>
          </IonCol>
          </IonRow>
  </IonGrid>
 
  );
}

export default App;
