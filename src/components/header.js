import {IonList,IonItem, IonButton, IonHeader, IonImg, IonMenu, IonMenuButton, IonToolbar, IonSearchbar, IonRouterLink, IonGrid, IonPopover, IonLabel, IonRadioGroup, IonRadio, IonRow, IonCol, IonChip, IonCardSubtitle, IonTitle, IonMenuToggle } from "@ionic/react";
import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Unstable_Grid2';

import { Link } from "react-router-dom";
import { MenuBook, MenuOpenOutlined, MenuRounded } from "@mui/icons-material";
import { Container } from "@mui/material";

export default function Header(){
    return (
       
        <>
    <IonHeader mode="ios" color="light" style={{display: "flex", justifyContent: "flex-end"}}>
 
  <IonMenuToggle >
            <IonButton color="medium" > <MenuRounded/></IonButton>
          </IonMenuToggle>
         
</IonHeader>
                
                </>
    )
}