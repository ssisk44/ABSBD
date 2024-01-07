import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepPurple,indigo,blue } from '@mui/material/colors';

function createCustomTheme(){
	let Theme = createTheme({
		palette: {
			primary: {
				main: blue[500]
			},
			secondary: {
				main: deepPurple[500]
			},
			tertiary: {
				main: indigo[500]
			}
		},
	});

	// Responsive Font Size Object Variants -> h1,h2,h3,h4,h5,h6,subtitle1,subtitle2,body1,body2,button,caption,overline
	Theme = responsiveFontSizes(Theme);


	return Theme;
}

const Theme = createCustomTheme();
 
export default Theme;