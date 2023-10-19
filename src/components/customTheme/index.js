import { TextField } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

export const customTheme=createTheme({
    palette:{
        primary:{
            main:'#248023'
        },
        secondary:{
            main:'#248023'
        }
    },
    typography:{
        h5:{
            fontSize:'25px'
        }
    },
    
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
          // Name of the rule
          text: {
            // Some CSS
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
        },
        MuiPaper : {
            root: {
                // Your custom styles for MuiCard
                backgroundColor: 'lightgray',
                border: '1px solid gray',
                padding: 30, 
                height: '70vh', 
                maxWidth: 280, 
                margin: "0 auto" 
              },
        }, 
        MuiTextField : {
            root: {
                // Your custom styles for MuiCard
                backgroundColor: 'white',
                border: '1px solid gray',

              },
        }
      },
    
})