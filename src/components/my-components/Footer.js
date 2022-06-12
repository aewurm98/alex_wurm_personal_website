// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// other react components
import { Link as LinkS, animateScroll as scroll } from "react-scroll";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// font-awesome icons
const InstagramIcon = <i className="fab fa-instagram" />;
const TwitterIcon = <i className="fab fa-twitter" />;
const LinkedInIcon = <i class="fa-brands fa-linkedin"></i>;
const GitHubIcon = <i class="fa-brands fa-github"></i>;

function Footer({ company, links, socials, light }) {
  const { href, name } = company;

  const year = new Date().getFullYear();

  //   const renderLinks = links.map((link) => (
  //     <MKTypography
  //       key={link.name}
  //       component={Link}
  //       href={link.href}
  //       variant="body2"
  //       color={light ? "white" : "secondary"}
  //       fontWeight="regular"
  //     >
  //       {link.name}
  //     </MKTypography>
  //   ));

  //   const renderSocials = socials.map((social) => (
  //     <MKTypography
  //       key={social.link}
  //       component={Link}
  //       href={social.link}
  //       variant="body2"
  //       color={light ? "white" : "secondary"}
  //       fontWeight="regular"
  //     >
  //       {social.icon}
  //     </MKTypography>
  //   ));

  return (
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
            {/* {renderLinks} TODO: Replace with actual links for scrolling*/}
            <MKTypography
              variant="body2"
              color={light ? "white" : "secondary"}
              fontWeight="regular"
            >
              <LinkS
                to="about"
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
            >
              <LinkS
                to="work-experience"
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
            >
              <LinkS
                to="projects"
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
            >
              <LinkS
                to="learn-more"
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
            {/* {renderSocials} TODO: Replace with actual social icons as in Hero Section*/}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year}{" "}
            <MKTypography
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              <LinkS
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={0}
              >
                Alex Wurm
              </LinkS>
            </MKTypography>
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

Footer.defaultProps = {
  company: { href: "/", name: "Alex Wurm" },
  links: [
    { href: "about", name: "About" },
    { href: "work-experience", name: "Work Experience" },
    { href: "projects", name: "Projects" },
    { href: "learn-more", name: "Learn More" },
  ],
  socials: [
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com/awurm98/",
    },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: "https://twitter.com/aewurm98",
    },
    {
      icon: <LinkedInIcon fontSize="small" />,
      link: "https://www.linkedin.com/in/alex-wurm/",
    },
    {
      icon: <GitHubIcon fontSize="small" />,
      link: "https://github.com/aewurm98",
    },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default Footer;
