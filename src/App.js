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
        jobtype: 'software developer at facebook',
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
        <IonCol sizeXs="12" style={{marginTop: "10vh"}}>
          <IonCardTitle id="cardstit" class='card-text' style={{textAlign: "center", fontWeight: "800"}}>
            Generate a custom cv 
          </IonCardTitle>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol sizeXs="12">
          <IonCard mode="ios" color="secondary" id="showcard">
            <IonCardHeader>
              <IonCardTitle class='card-text'>
                Paste in your cv here 
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <TextField
          id="standard-textarea"
          label="Cv Here"
          placeholder="finish"
          multiline
          focused
          color='primary'
          style={{width: "100%", color:"var(--ion-color-light)"}}
          variant="standard"
          onChange={(e) => setCvText(e.target.value)}
        />
             
              <IonRow>
                <IonCol sizeXs="6">
                  <IonButton color="medium" expand="block">
                    Preview
                  </IonButton>
                </IonCol>
                <IonCol sizeXs="6">
                  <IonButton color="medium" expand="block" onClick={handleSubmit}>
                    Submit
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
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
<IonCardSubtitle>Symbol:</IonCardSubtitle>
<IonCardSubtitle>Exchange: </IonCardSubtitle>
<IonCardSubtitle>Industry: </IonCardSubtitle>
<IonCardSubtitle>Market Cap: </IonCardSubtitle>
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
