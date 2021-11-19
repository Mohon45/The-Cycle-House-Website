import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { List, ListItem, Typography } from '@mui/material';
;

const footerBg = {
    background: `url(https://i.ibb.co/jRVLZLP/footer-pattern.png)`
}
const iconPadding = {
    marginRight: '10px'
}
const linkStyle = {
    textDecoration: 'none',
    color: 'white'
}
const icon = {
    color: '#3b5a9a'
}
const downloadImg = {
    width: '100%'
}



const Footer = () => {
    return (
        <Box style={footerBg} sx={{ flexGrow: 1, color: 'white', pb: 3}}>
            <Grid container spacing={2} sx={{pt: 5}}>
                <Grid item xs={6} sm={6} md={3}>
                    <h2>Our Mobile App</h2>
                    <h4>Download the Cycle House</h4>
                    <img style={downloadImg} src="https://i.ibb.co/Y7nkJdt/App-Store-footer.png" alt="" />
                    <img style={downloadImg} src="https://i.ibb.co/8B9S3C5/Google-Play-footer.png" alt="" />
                </Grid>

                <Grid item xs={6} sm={6} md={3}>
                    <img src="https://i.ibb.co/P62gwDX/logo-1.png" alt="" />
                    <Typography sx={{fontWeight: 'bold'}}>
                        Cycle House
                    </Typography>
                    <List sx={{pb: 0}}>
                        <ListItem>
                            <i style={iconPadding} className="fas fa-map-marker-alt"></i>  1200 Shaheb Bazar, Rajshahi
                        </ListItem>
                        <ListItem>
                            <i style={iconPadding} className="fas fa-phone-alt"></i> 01755555555
                        </ListItem>
                        <ListItem>
                            <i style={iconPadding} className="fas fa-envelope"></i>info@cyclehouse.com
                        </ListItem>
                    </List>
                </Grid>
                <Grid  sx={{textAlign: 'left'}} item xs={6} sm={6} md={3}>
                    <h2>UseFull Links</h2>
                    <List sx={{pb: 0}}>
                        <ListItem>
                            <a style={linkStyle} href="/">
                                <i className="fas fa-angle-double-right"></i> Home
                            </a>
                        </ListItem>
                        <ListItem>
                            <a style={linkStyle} href="/">
                                <i className="fas fa-angle-double-right"></i> About Us
                            </a>
                        </ListItem>
                        <ListItem>
                            <a style={linkStyle} href="/">
                                <i className="fas fa-angle-double-right"></i> Services
                            </a>
                        </ListItem>
                        <ListItem>
                            <a style={linkStyle} href="/">
                                <i className="fas fa-angle-double-right"></i> Gallery
                            </a>
                        </ListItem>
                        <ListItem>
                            <a style={linkStyle} href="/">
                                <i className="fas fa-angle-double-right"></i> Blog
                            </a>
                        </ListItem>
                        <ListItem>
                            <a style={linkStyle} href="/">
                                <i className="fas fa-angle-double-right"></i> FAQ
                            </a>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6} sm={6} md={3}>
                    <h2>Social Link</h2>
                    <a href="/" style={icon}>
                        <i className="fab fa-facebook-square fa-3x"></i>
                    </a> <br />
                    <a href="/" style={icon}>
                        <i className="fab fa-twitter-square fa-3x"></i>
                    </a> <br />
                    <a href="/" style={icon}>
                    <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                </Grid>
                
            </Grid>
            <p style={{textAlign: "center"}}>&copy;Copyright-2021 Junior Developer. Developed by <span className="footer-intro">Md.Mohon</span></p>
        </Box>
    );
};

export default Footer;