import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonList, IonNote, IonRow, IonSelect, IonSelectOption } from '@ionic/react';
import axios from 'axios';
import { Skeleton, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
function App() {
  const [cvText, setCvText] = useState('');
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState('');

  
  const handleSubmit = async () => {
    try {
      
     
      setResponse(false)
      setLoading(true)
      const response = await axios.post('/.netlify/functions/openai', {
        jobtype: logs,
        work: cvText
      });
      console.log(response.data);
      setResponse(response.data.choices[0].text)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00000', // change primary color here
      },
    },
  });
  const handleChange = (event) => {
    setCvText(event.target.value);
  };
  
  const color1 = blueGrey[500]
  const CustomTextField = styled(TextField)({
    width: '100%',
    primary: {
      main: '#00000',
    },
    '&.Mui-focused': {
      color: 'rgb(99, 99, 99) !important' , // set label color when focused
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#676767',  // change border color here
      },
      '&:hover fieldset': {
        borderColor: '#676767',  // change border color on hover here
      },
      '&.Mui-focused fieldset': {
        borderColor: '#808080',  // change border color when focused here
      },
    
    },
    '& .MuiInputBase-root': {
      color: '#808080',
    },
   
    
  });
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
            <ThemeProvider theme={theme}>
           <TextField
      label="Use the following format: "
      placeholder="1.Name of company , Job , Brief description of role"
  
     
      color = "primary"
      variant="outlined"
      value={cvText}
      fullWidth
      onChange={handleChange}
    />
    
             </ThemeProvider>
             
            </IonCardContent>
          </IonCard>
          <IonRow style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
          <IonList >
        <IonItem >
          <IonSelect
            aria-label="job type"
            color="warning"
            placeholder="Select job type"
            onIonChange={(e) =>  setLogs(e.detail.value)}
            onIonCancel={() => console.log("done")}
            onIonDismiss={() => console.log("right")}
          >
            <IonSelectOption color="primary" value="Hospitality">Hospitality</IonSelectOption>
            <IonSelectOption value="Software engineer">Software engineer</IonSelectOption>
            <IonSelectOption value="Data developer">Data developer</IonSelectOption>
            <IonSelectOption value="Front End Developer">Front End Developer</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonList>
               <IonCol sizeXs="6" >
                 <IonButton  disabled={logs === "" || cvText === ''} color="medium" expand="block" style={{fontWeight: "900"}} onClick={handleSubmit}>
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
