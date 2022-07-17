// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// other react components
import { Link as LinkS } from "react-scroll";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { BrowserView, MobileView } from "react-device-detect";

// font-awesome icons
const InstagramIcon = <i className="fab fa-instagram" />;
const TwitterIcon = <i className="fab fa-twitter" />;
const LinkedInIcon = <i class="fa-brands fa-linkedin"></i>;
const GitHubIcon = <i class="fa-brands fa-github"></i>;

// Routes
const routeHome = "home";
const routeAbout = "about";
const routeWorkExperience = "work-experience";
const routeProjects = "projects";
const routeLearnMore = "learn-more";

function Footer({ company, links, socials, light }) {
  const year = new Date().getFullYear();

  return (
    <>
      <BrowserView>
        <MKBox component="footer" py={6}>
          <Grid container justifyContent="center">
            <Grid item xs={10} lg={8}>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                spacing={{ xs: 2, lg: 3, xl: 6 }}
                mb={3}
              >
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeAbout}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    About
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeWorkExperience}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Work Experience
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeProjects}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Projects
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeLearnMore}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Learn More
                  </LinkS>
                </MKTypography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Stack
                display="flex"
                direction="row"
                justifyContent="center"
                spacing={3}
                mt={1}
                mb={3}
              >
                <Link
                  href="https://www.instagram.com/awurm98/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {InstagramIcon}
                </Link>
                <Link
                  href="https://twitter.com/aewurm98/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {TwitterIcon}
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alex-wurm/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {LinkedInIcon}
                </Link>
                <Link
                  href="https://github.com/aewurm98/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {GitHubIcon}
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
              <MKTypography
                variant="body2"
                color={light ? "white" : "secondary"}
                display="grid"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <LinkS
                  to={routeHome}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={0}
                >
                  Copyright &copy; {year} Alex Wurm
                </LinkS>
                <Link
                  href="https://github.com/aewurm98/"
                  sx={{
                    cursor: "pointer",
                    userSelect: "none",
                    fontSize: "small",
                  }}
                >
                  Made with React 18
                </Link>
              </MKTypography>
            </Grid>
          </Grid>
        </MKBox>
      </BrowserView>

      <MobileView>
        <MKBox component="footer" py={6}>
          <Grid container justifyContent="center">
            <Grid item xs={10} lg={8}>
              <Stack
                direction="column"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                spacing={{ xs: 2, lg: 3, xl: 6 }}
                mb={3}
              >
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeAbout}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    About
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeWorkExperience}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Work Experience
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeProjects}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Projects
                  </LinkS>
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color={light ? "white" : "secondary"}
                  fontWeight="regular"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  <LinkS
                    to={routeLearnMore}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={0}
                  >
                    Learn More
                  </LinkS>
                </MKTypography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Stack
                display="flex"
                direction="row"
                justifyContent="center"
                spacing={3}
                mt={1}
                mb={3}
              >
                <Link
                  href="https://www.instagram.com/awurm98/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {InstagramIcon}
                </Link>
                <Link
                  href="https://twitter.com/aewurm98/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {TwitterIcon}
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alex-wurm/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {LinkedInIcon}
                </Link>
                <Link
                  href="https://github.com/aewurm98/"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                >
                  {GitHubIcon}
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
              <MKTypography
                variant="body2"
                color={light ? "white" : "secondary"}
                display="grid"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <LinkS
                  to={routeHome}
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={0}
                >
                  Copyright &copy; {year} Alex Wurm
                </LinkS>
                <Link
                  href="https://github.com/aewurm98/"
                  sx={{
                    cursor: "pointer",
                    userSelect: "none",
                    fontSize: "small",
                  }}
                >
                  Made with React 18
                </Link>
              </MKTypography>
            </Grid>
          </Grid>
        </MKBox>
      </MobileView>
    </>
  );
}

export default Footer;
