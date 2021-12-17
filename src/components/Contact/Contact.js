import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { TextareaAutosize } from "@mui/base";
import "./Contact.css";
import Menubar from "../../Shared/Menubar/Menubar";
import TypewriterComponent from "typewriter-effect";

const Contact = () => {
  return (
    <React.Fragment>
      <Menubar />
      <Box className="contact" style={{ paddingTop: "50px" }} sx={{ my: 5 }}>
        <Container sx={{ color: "white" }}>
          <Grid container spacing={5}>
            <Grid sx={{ mt: "10%" }} item xs={12} md={7}>
              <Box>
                <Box>
                  <Typography sx={{ color: "#ffdd00", my: 2 }} variant="body2">
                    <TypewriterComponent
                      onInit={(typewriter) => {
                        typewriter.typeString("  NEED A CAR RENTAL?").pauseFor(1000).deleteAll().typeString("  NEED A CAR RENTAL?").start();
                      }}
                    />
                  </Typography>{" "}
                  <Typography sx={{ fontWeight: "bold", mb: 3 }} variant="h3">
                    Don't Hesitate To Contact Us
                  </Typography>
                  <Typography variant="p">
                    Huracan has several personalities. The Corsa mode radicalizes absolutely everything (work of the car box, suspensions, direction,
                    sensitivity of the accelerator, sound of the exhaust). The Sport mode, almost as radical as the other, but that leaves the ESP
                    active, while making it more permissive
                  </Typography>
                </Box>
                <Box sx={{ my: 5 }}>
                  <Grid container spacing={5}>
                    <Grid item xs={6} md={6}>
                      <Typography sx={{ fontWeight: "500", mb: 3 }} variant="h5">
                        Khulna Branch
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-map-marker-alt"></i>Sesetan East ST.1919, Khulna City
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-phone-alt"></i>+888 0123456789
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-envelope"></i>amotin68@gmail.com
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-clock"></i>10:00 AM -- 06:00 PM
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography sx={{ fontWeight: "500", mb: 3 }} variant="h5">
                        Dhaka Branch
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-map-marker-alt"></i>Sesetan East ST.1919, Dhaka City
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="fas fa-phone-alt"></i>+888 0123456789
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-envelope"></i>amotin68@gmail.com
                      </Typography>
                      <Typography sx={{ mb: 1, display: "block" }} variant="p">
                        <i style={{ color: "#ffdd00", marginRight: "15px" }} className="far fa-clock"></i>10:00 AM -- 06:00 PM
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ background: "white", boxShadow: "1px 2px 10px rgba(0,0,0,0.1)", p: 3, color: "black" }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: "500" }}>
                    Contact Form
                  </Typography>
                  <Typography variant="p" color="text.secondary">
                    For more information or any booking, our reservation team is available 24/7 by phone +33 (0)4 22 46 15 15 or by email
                    amotin68@gmail.com
                  </Typography>
                </Box>
                <TextField id="outlined-basic" type="text" sx={{ width: 1, my: 1 }} label="Your Name" variant="outlined" />{" "}
                <TextField id="outlined-basic" type="text" sx={{ width: 1, my: 1 }} label="Your Email" variant="outlined" />{" "}
                <TextField id="outlined-basic" type="text" sx={{ width: 1, my: 1 }} label="Phone" variant="outlined" />{" "}
                <TextareaAutosize minRows={3} placeholder="Your Message" style={{ width: "99.5%", border: "1px solid lightgrey" }} />
                <Button type="submit" sx={{ width: 1, background: "#ffdd00", color: "black", mt: 3 }}>
                  SUBMIT
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
