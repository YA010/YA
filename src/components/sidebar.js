import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRow, IonTabBar, IonTabButton, IonThumbnail, IonTitle, IonToolbar } from "@ionic/react";
import { desktop, home, star } from "ionicons/icons";
import { BookOnlineRounded, Dashboard, DesktopMacRounded, DocumentScannerOutlined, HelpCenter, HelpCenterRounded, MenuRounded, Search, SearchOffRounded, SettingsApplications } from "@mui/icons-material";
import { Divider } from "@mui/material";
export default function Sidebar(){
    return (
       
        <>
    
    <IonMenu contentId="main" >
<IonHeader>
  <IonToolbar color="primary" >
  <IonCol sizeXs={5} sizeSm={4} sizeMd={3} sizeLg={3 } >
     <img id="logo" fill="#p4420"   src={require('../CCAI.png')} />
 </IonCol> 
  </IonToolbar>
</IonHeader>
<IonContent color="primary">
 <IonTabBar mode="ios"  color="primary" style={{alignItems: "center",
   height:"-webkit-fill-available", display: "flex", flexDirection: "column", overflow: "none"}}>
 
          <IonTabButton id="dashboard" tab="dashboard" href="/dashboard">
             <IonLabel style={{fontWeight: "800"}}> <DesktopMacRounded/> Dashboard</IonLabel>
          </IonTabButton>
          <IonTabButton id="searches" tab="searches" href="/searches">
             <IonLabel style={{fontWeight: "800 "}}> <SearchOffRounded/> Previous Searches</IonLabel>
          </IonTabButton>
          <IonTabButton id="applications" tab="applications" href="/applications">
             <IonLabel style={{fontWeight: "800 "}}> <DocumentScannerOutlined/> Job applications</IonLabel>
          </IonTabButton>
          <IonTabButton id="learn" tab="learn" href="/learn">
             <IonLabel style={{fontWeight: "800"}}> <BookOnlineRounded/>Learn a skill</IonLabel>
          </IonTabButton>
         
          <IonTabButton id="help" tab="help" href="/help">
             <IonLabel style={{fontWeight: "800 "}}> <HelpCenterRounded/> Help center</IonLabel>
          </IonTabButton>
          
         
    
          </IonTabBar>  
          </IonContent>
</IonMenu>
     

                
                </>
    )
}