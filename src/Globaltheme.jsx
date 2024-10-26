import { createTheme} from "@mui/material/styles";
export const globalTheme = createTheme({
    components : {
        palette : {
            primary : {
                prime1: {
                    main : "#5078E1",
                },
                prime2 : {
                    main : "yellow",
                }
            },
            secondary : {
                sec1 : {
                    main : "red",
                },
                sec2 : {
                    main : "pink",
                }
            },
        },
        MuiButton :{
            variants : [
                {
                props : {variant : "contained"},
                style : {
                    borderRadius : 8,
                    borderStyle : "solid",
                    backgroundColor : "#5078E1",
                    textTransform : "none",
                    fontFamily:"Nunito Sans",
                    width : "100%",
                    padding : "10px",
                    fontSize : "1rem",
                },
            },
            {
            props : {variant : "outlined"},
            style : {
                backgroundColor : "white",
                color : "black",
                borderColor : "black",
                borderRadius : "10px",
                width : "100%",
                textTransform : "none",
                fontFamily:"Nunito Sans",
            }
        },
            ],
        },
            // styleOverrides: {
            //     root : {
                    
            //     },
            // },
        // },
        MuiTypography: {
            styleOverrides:{
                root:{
                    fontFamily:"Nunito Sans",
                }
            }
        },

    },
});
