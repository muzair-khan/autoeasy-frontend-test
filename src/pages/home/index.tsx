import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Banner, MuiContainer } from "../../components";
import PlusImage from "../../assets/images/plus.png";
import { useState } from "react";

const Home = (): JSX.Element => {
  const [sectionOneData] = useState<{ title: string }[]>([
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat ipsum ac turpis placerat elementum. Cras quis mi in velit ullamcorper fermentum vel vitae ipsum. Morbi mi nulla, gravida eget ullamcorper condimentum, congue id eros. Suspendisse potenti. Aenean quam urna, mattis a neque et, accumsan commodo nunc.",
    },
  ]);
  const [sectionThreeData] = useState<{ title: string }[]>([
    {
      title:
        "Donec ut ligula pretium nisl tempor dictum. Nam consequat convallis quam. Sed a elit tellus. Duis scelerisque, justo non vehicula aliquet, orci metus laoreet libero, commodo commodo ex lorem ac dui. Pellentesque vel tincidunt quam, eget dapibus neque. Vestibulum congue lacinia est. Curabitur sit amet tempus erat.",
    },
  ]);
  const [sectionTwoData] = useState<{ title: string }[]>([
    { title: "Proin nulla orci, sodales tincidunt ipsum id" },
    { title: "Proin nulla orci, sodales tincidunt ipsum id" },
    { title: "Proin nulla orci, sodales tincidunt ipsum id" },
    {
      title:
        "Proin nulla orci, sodales tincidunt ipsum id commodo fringilla magna.",
    },
    { title: "Proin nulla orci, sodales tincidunt ipsum id" },
  ]);

  return (
    <Box sx={{ py: 2 }}>
      <MuiContainer>
        <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
          Example App
        </Typography>
      </MuiContainer>
      <Banner />
      <MuiContainer>
        <>
          <Grid container spacing={2} sx={{ py: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" fontWeight={"bold"}>
                Title Section 1
              </Typography>
              {sectionOneData?.map(
                (item: { title: string }, secTwoindex: number): JSX.Element => {
                  return (
                    <Typography
                      variant="h6"
                      sx={{ display: "flex", alignItems: "center" }}
                      key={`secOne#${secTwoindex}`}
                    >
                      {item.title}
                    </Typography>
                  );
                }
              )}
            </Grid>
            <Box
              sx={{
                background: "#000",
                height: "1px",
                width: "100%",
                margin: "31px 15px 0px 31px",
                display: {md: 'none', sm: "block", xs: 'block'}
              }}
            />
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" fontWeight={"bold"}>
                Title Section 2
              </Typography>
              {sectionTwoData?.map(
                (item: { title: string }, secTwoindex: number): JSX.Element => {
                  return (
                    <Typography
                      variant="subtitle1"
                      sx={{ display: "flex", alignItems: "center" }}
                      key={`secTwo#${secTwoindex}`}
                    >
                      <IconButton>
                        <img src={PlusImage} width="18px" alt="" />
                      </IconButton>
                      {item.title}
                    </Typography>
                  );
                }
              )}
            </Grid>
            <Box
              sx={{
                background: "#000",
                height: "1px",
                width: "100%",
                margin: "31px 15px 0px 31px",
              }}
            />
            <Grid item xs={12}>
              <Typography variant="h4" fontWeight={"bold"} textAlign={{ md: "center", sm: "left", xs: "left" }}>
                Title Section 3
              </Typography>
              {sectionThreeData?.map(
                (
                  item: { title: string },
                  secThreeindex: number
                ): JSX.Element => {
                  return (
                    <Typography
                      variant="h6"
                      sx={{ display: "flex", alignItems: "center" }}
                      key={`secOne#${secThreeindex}`}
                    >
                      {item.title}
                    </Typography>
                  );
                }
              )}
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                textTransform: "initial",
                background: "#414bb2",
                width: { md: 230, sm: "100%", xs: "100%" },
              }}
            >
              Primary Button
            </Button>
          </Box>
        </>
      </MuiContainer>
    </Box>
  );
};

export default Home;
