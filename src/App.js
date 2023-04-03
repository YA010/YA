import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonInput, IonNote, IonRow } from '@ionic/react';
import axios from 'axios';
import { Skeleton, TextField } from '@mui/material';

function App() {
  const [cvText, setCvText] = useState('');
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setResponse(false)
      setLoading(true)
      const response = await axios.post('/.netlify/functions/openai', {
        jobtype: 'software developer',
        work: cvText
      });
      console.log(response.data);
      setResponse(response.data.choices[0].text)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <IonGrid>
      <IonRow>
        <IonCol sizeXs="8" style={{marginTop: "10vh", marginLeft: "auto",marginRight: "auto"}}>
          <IonCardTitle id="cardstit" class='card-text' style={{textAlign: "center", fontWeight: "800"}}>
           Copy and paste your previous work experience and education here
          </IonCardTitle>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol sizeXs="12">
          <IonCard mode="ios" color="secondary" id="showcard">
            <IonCardHeader>
              <IonCardTitle class='card-text'>
               
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <TextField
         
          label="Use the following format: "
          placeholder="1.Name of company , Job , Brief description of role"
          multiline
          focused
        
          style={{width: "100%", color:"white"}}
         
          onChange={(e) => setCvText(e.target.value)}
        />
             
             
            </IonCardContent>
          </IonCard>
          <IonRow>
               
               <IonCol sizeXs="6" style={{ marginLeft: "auto",marginRight: "auto"}}>
                 <IonButton color="medium" expand="block" style={{fontWeight: "900"}} onClick={handleSubmit}>
                   Submit
                 </IonButton>
               </IonCol>
             </IonRow>
        </IonCol>
      </IonRow>
      {loading ? (<><IonCol sizeXs="12"  >

<IonCard  mode="ios" color="secondary" id="showcard" >
  <Skeleton>
<IonImg  alt="logo" />
</Skeleton>
<IonCardHeader >
  <Skeleton>
<IonCardTitle class='card-text'> </IonCardTitle>
<IonCardSubtitle></IonCardSubtitle>
<IonCardSubtitle> </IonCardSubtitle>
<IonCardSubtitle> </IonCardSubtitle>
<IonCardSubtitle> </IonCardSubtitle>
</Skeleton>
</IonCardHeader>        
</IonCard>
</IonCol> </> ) : (<> </>)}
      
      {response ? (<> 
        <IonRow>
        <IonCol sizeXs="12">
          <IonCard mode="ios" color="secondary" id="showcard">
            <IonCardHeader>
              <IonCardTitle class='card-text'>
                Your Finished cv
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <IonNote id="cardstit" >{response}</IonNote>
        </IonCardContent>
        </IonCard>
        </IonCol>
        </IonRow></>) :(<> </>)}
     
    </IonGrid>
  );
}

export default App;
