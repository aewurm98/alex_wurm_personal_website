// React components
import { BrowserView, MobileView } from "react-device-detect";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { spacing } from "@mui/system";

// MUIKit2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import alex from "assets/images/my-images/Alex_Nature_Zoom.png";
import bgi from "assets/images/my-images/Abstract_Lines.jpg";

// TODO: Go back into Default Navbar and figure out how to add back functionality to collapse entire navbar after making a selection or clicking out
// Home page. It works when I click the 'X' icon, so look through code to find and replicate that behavior.
function HeroSection() {
  return (
    <>
      <BrowserView>
        <MKBox
          minHeight="100vh"
          width="100%"
          sx={{
            backgroundImage: `url(${bgi})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "row-reverse",
            placeItems: "flex-end start",
          }}
        >
          <MKBox
            minHeight="100vh"
            width="100%"
            sx={{
              backgroundImage: `url(${alex})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              overflow: "visible !important",
              display: "grid",
              placeItems: "flex-end flex-end",
            }}
          ></MKBox>

          <Stack
            direction="column"
            alignItems={{
              xs: "flex-start",
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-start",
              xl: "flex-start",
            }}
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            }}
            // spacing not needed with flex fill
            // spacing={{ xs: 28, sm: 40, md: 44, lg: 28, xl: 40 }}
            minHeight="100vh"
            width="100%"
            overflow="visible"
          >
            <MKBox
              flex={1}
              width="100%"
              mt={12}
              sx={{
                display: "grid",
                flexDirection: "column",
                placeItems: "start start",
              }}
            >
              <Container>
                <Grid
                  container
                  item
                  xs={12}
                  md={10}
                  lg={8}
                  justifyContent="start"
                  alignItems="start"
                  flexDirection="column"
                  sx={{ mx: "0", textAlign: "left" }}
                >
                  <MKTypography
                    variant="h2"
                    color="white"
                    mt={1}
                    mb={1}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                    })}
                  >
                    Ex-Consultant
                  </MKTypography>
                  <MKTypography
                    variant="h2"
                    color="white"
                    mt={1}
                    mb={1}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                    })}
                  >
                    Product Manager
                  </MKTypography>
                  <MKTypography
                    variant="h2"
                    color="white"
                    mt={1}
                    mb={1}
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                    })}
                  >
                    Entrepreneur
                  </MKTypography>
                </Grid>
              </Container>
            </MKBox>

            <MKBox
              Flex={1}
              width="100%"
              sx={{
                display: "grid",
                flexDirection: "column",
                placeItems: "end start",
              }}
            >
              <Container>
                <Grid
                  container
                  item
                  xs={12}
                  md={10}
                  lg={8}
                  justifyContent="start"
                  alignItems="start"
                  flexDirection="column"
                  sx={{ mx: "0", textAlign: "left" }}
                >
                  <MKBox
                    display="flex"
                    justifyContent="normal"
                    alignItems="center"
                    bgColor="#dee1e3"
                    minhHeight="10vh"
                    Width="100%"
                    borderRadius="md"
                  >
                    <MKTypography
                      component="a"
                      variant="h4"
                      color="black"
                      href="https://www.instagram.com/awurm98/"
                      ml={1}
                      mr={3}
                    >
                      <i className="fab fa-instagram" />
                    </MKTypography>
                    <MKTypography
                      component="a"
                      variant="h4"
                      color="black"
                      href="https://twitter.com/aewurm98/"
                      mr={3}
                    >
                      <i className="fab fa-twitter" />
                    </MKTypography>
                    <MKTypography
                      component="a"
                      variant="h4"
                      color="black"
                      href="https://www.linkedin.com/in/alex-wurm/"
                      mr={3}
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </MKTypography>
                    <MKTypography
                      component="a"
                      variant="h4"
                      color="black"
                      href="https://github.com/aewurm98/"
                      mr={1}
                    >
                      <i class="fa-brands fa-github"></i>
                    </MKTypography>
                  </MKBox>
                </Grid>
              </Container>
            </MKBox>
          </Stack>
        </MKBox>
      </BrowserView>

      <MobileView>
        <MKBox
          minHeight="100vh"
          width="100%"
          sx={{
            backgroundImage: `url(${bgi})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "row-reverse",
            placeItems: "flex-end start",
          }}
        >
          <MKBox
            minHeight="100vh"
            width="100%"
            sx={{
              backgroundImage: `url(${alex})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              overflow: "visible !important",
              display: "grid",
              placeItems: "flex-end flex-end",
            }}
          >
            <Stack
              direction="column"
              alignItems={{
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-start",
                xl: "flex-start",
              }}
              justifyContent={{
                xs: "center",
                sm: "center",
                md: "center",
                lg: "center",
                xl: "center",
              }}
              spacing={{ xs: 28, sm: 40, md: 44, lg: 28, xl: 40 }}
              minHeight="100vh"
              width="100%"
              overflow="visible"
            >
              <MKBox
                flex={1}
                width="100%"
                mt={12}
                sx={{
                  display: "grid",
                  flexDirection: "column",
                  placeItems: "start start",
                }}
              >
                <Container>
                  <Grid
                    container
                    item
                    xs={12}
                    md={10}
                    lg={8}
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    sx={{ mx: "0", textAlign: "left" }}
                  >
                    <MKTypography
                      variant="h2"
                      color="white"
                      mt={1}
                      mb={1}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                      })}
                    >
                      Ex-Consultant
                    </MKTypography>
                    <MKTypography
                      variant="h2"
                      color="white"
                      mt={1}
                      mb={1}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                      })}
                    >
                      Product Manager
                    </MKTypography>
                    <MKTypography
                      variant="h2"
                      color="white"
                      mt={1}
                      mb={1}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                      })}
                    >
                      Entrepreneur
                    </MKTypography>
                  </Grid>
                </Container>
              </MKBox>

              <MKBox
                Flex={1}
                width="100%"
                sx={{
                  display: "grid",
                  flexDirection: "column",
                  placeItems: "end start",
                }}
              >
                <Container>
                  <Grid
                    container
                    item
                    xs={12}
                    md={10}
                    lg={8}
                    justifyContent="start"
                    alignItems="start"
                    flexDirection="column"
                    sx={{ mx: "0", textAlign: "left" }}
                  >
                    <MKBox
                      display="flex"
                      justifyContent="normal"
                      alignItems="center"
                      bgColor="#dee1e3"
                      minhHeight="10vh"
                      Width="100%"
                      borderRadius="md"
                    >
                      <MKTypography
                        component="a"
                        variant="h4"
                        color="black"
                        href="https://www.instagram.com/awurm98/"
                        ml={1}
                        mr={3}
                      >
                        <i className="fab fa-instagram" />
                      </MKTypography>
                      <MKTypography
                        component="a"
                        variant="h4"
                        color="black"
                        href="https://www.linkedin.com/in/alex-wurm/"
                        mr={3}
                      >
                        <i class="fa-brands fa-linkedin"></i>
                      </MKTypography>
                      <MKTypography
                        component="a"
                        variant="h4"
                        color="black"
                        href="https://github.com/aewurm98"
                        mr={1}
                      >
                        <i class="fa-brands fa-github"></i>
                      </MKTypography>
                    </MKBox>
                  </Grid>
                </Container>
              </MKBox>
            </Stack>
          </MKBox>
        </MKBox>
      </MobileView>
    </>
  );
}

export default HeroSection;
