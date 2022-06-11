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
import mountains3 from "assets/images/my-images/Orange_Mountains.jpg";

function Projects() {
    return <>
    <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${mountains3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "row-reverse",
          placeItems: "flex-end start",
        }}
      ></MKBox>
    </>;
  }
  
  export default Projects;