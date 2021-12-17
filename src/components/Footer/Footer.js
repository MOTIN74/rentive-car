import React from "react";
import { Button, CardMedia, Container, Grid, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FooterContact from "../FooterContact/FooterContact";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <FooterContact />
      <Box className="child" sx={{ background: "#0A0A0A" }} style={{ padding: "130px 0 30px 0" }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={8} md={3}>
                <Box>
                  {" "}
                  <CardMedia component="img" sx={{ width: "150px" }} image="https://i.ibb.co/PxLTsjB/logo-rentive-fix-white.png" alt="Paella dish" />
                </Box>
                <Typography variant="p" sx={{ color: "white", display: "block", my: 2 }}>
                  Everything works in harmony and flexibility so that crossing a city is not a test for nerves.
                </Typography>
              
                <i className="fab fa-facebook-f footer-icon"></i>
                <i className="fab fa-twitter footer-icon"></i>
                <i className="fab fa-instagram footer-icon"></i>
                <i className="fab fa-linkedin-in footer-icon"></i>
              </Grid>
              <Grid item xs={4} sm={8} md={3} sx={{ color: "white" }}>
                <Typography variant="h4">Quick Links</Typography>

                <List>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary=" Home" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary=" About" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary=" Contact" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary="Team" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary=" Reservation" />
                  </ListItem>
                </List>
              </Grid>{" "}
              <Grid item xs={4} sm={8} md={3} sx={{ color: "white" }}>
                <Typography variant="h4">Useful Links</Typography>

                <List>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i>{" "}
                    <ListItemText primary=" Privacy policy" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i>{" "}
                    <ListItemText primary=" Terms and conditions" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary=" Declaimer" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary=" Support" />
                  </ListItem>
                  <ListItem>
                    <i style={{ color: "#ffdd00", marginRight: "3px" }} className="fas fa-chevron-right"></i> <ListItemText primary=" FAQ" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4} sm={8} md={3} sx={{ color: "white" }}>
                <Typography variant="h4">Subscribe Our Newsletter</Typography>
                <Typography variant="p" sx={{ color: "white", display: "block", my: 2 }}>
                  Everything works in harmony and flexibility so that crossing a city is not a test for nerves.
                </Typography>
                <Box>
                  <TextField id="outlined-basic" sx={{ background: "white" }} variant="outlined" size="small" placeholder="Your Email" />{" "}
                  <Button style={{ background: "#ffdd00" }} sx={{ color: "black", mt: 2, py: 1, px: 3, display: "block" }}>
                    SUBSCRIBE
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <hr />
          <Typography variant="p" sx={{ color: "white", mt: 3 }}>
            Copyright &copy; 2021 Rentive By KHAN. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
