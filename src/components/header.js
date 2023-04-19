import {IonList,IonItem, IonButton, IonHeader, IonImg, IonMenu, IonMenuButton, IonToolbar, IonSearchbar, IonRouterLink, IonGrid, IonPopover, IonLabel, IonRadioGroup, IonRadio, IonRow, IonCol, IonChip, IonCardSubtitle, IonTitle, IonMenuToggle, IonCard, IonCardTitle } from "@ionic/react";
import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Unstable_Grid2';

import { Link } from "react-router-dom";
import { MenuBook, MenuOpenOutlined, MenuRounded } from "@mui/icons-material";
import { Avatar, Container } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function Header(){
  const [user, loading, error] = useAuthState(auth);
    return (
       
        <>
    <IonHeader mode="ios" color="light" >
     <Container>
     <IonRow> 
 {user ? (<> 
  <IonCol sizeXs="5" style={{display: "flex", alignItems:"center"}}> <Avatar  variant="rounded">
<img src={user.photoURL}/>
</Avatar> <IonCardSubtitle> Welcome, {user.displayName}!</IonCardSubtitle>
</IonCol> </>) :(<> </>)}
 <IonCol sizeXs="2" offset="5" >
  <IonMenuToggle >
            <IonButton color="medium" > <MenuRounded/></IonButton>
          </IonMenuToggle>
          </IonCol>
          </IonRow>
          </Container>
</IonHeader>
                
                </>
    )
}