import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonList, IonNote, IonRow, IonSelect, IonSelectOption, IonTitle } from '@ionic/react';
import axios from 'axios';
import { Skeleton, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { Link, NavLink, Outlet, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { Navbar, Avatar, Dropdown, User } from "@nextui-org/react";
import { Collapse,  Grid, } from "@nextui-org/react";
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { motion } from 'framer-motion'
import "../css/dashboard.css"

function Dashboard() {
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

  const useStyles = createStyles((theme) => ({
    card: {
      height: rem(440),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      color: theme.white,
      lineHeight: 1.2,
      fontSize: rem(32),
      marginTop: theme.spacing.xs,
    },
  
    category: {
      color: theme.white,
      opacity: 0.7,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  }));
  
  
  
  
  const data = [
    {
      image:
        'https://p4.wallpaperbetter.com/wallpaper/556/840/1002/international-finance-centre-hong-kong-wallpaper-preview.jpg',
      title: 'Inovest',
      category: 'Finance web app',
      link: "https://inovest.netlify.app/"
    },
    {
      image:
        'https://img.freepik.com/free-vector/broadcast-telecommunication-isometric-with-shooting-crew-man-giving-interview-vector-illustration_1284-30894.jpg',
      title: 'Newzy',
      category: 'Hacker news web app',
      link: "https://newz-c60cc.web.app/news"
    },
   
  ];
  
  
  
  function Card({image, category, title,link}) {
    const { classes } = useStyles();
    return (
      <Paper shadow="md" p="xl" radius="md" sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
        <div>
          <Text className={classes.category} size="xs">
            {category} 
          </Text>
  
          <Title order={3} className={classes.title}>
           {title}
          </Title>
        </div>
  
        <Button variant="white" color="dark">
          <a href={link}>
          View app 
          </a>
        </Button>
      </Paper>
    );
  }
  
   function CardsCarousel() {
  
    const theme = useMantineTheme();
  
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  
    const slides = data.map(item => (
      <Carousel.Slide key={item.title}>
        <Card 
          image={item.image}
          category={item.category}
          title={item.title} 
          link={item.link}
        />
      </Carousel.Slide>
    ));
  
    return (
    
  
      <Carousel 
      style={{margin:"1vw"}}
        controlsOffset="xs" controlSize={21} withIndicators
        slideSize="50%" 
        breakpoints={[{ maxWidth: 'sm', slideSize: '90%', slideGap: rem(2) }]}
        slideGap="xl" 
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        
  
        
        {slides}
        
      </Carousel>
     
     
     
    );
  
  }
  
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
    <>
    <CardsCarousel/>
  <IonHeader style={{justifyContent:"center",display: "flex"}}>
    <IonButton class="ion-text-wrap ion-justify-center" style={{marginLeft:"auto",marginRight:"auto",fontWeight:"800"}}>
      I also contribute to many open source projects on github (which you can find on the sidebar :))
      </IonButton>
    </IonHeader>
    </>
  );
}

export default Dashboard


