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
import mountains2 from "assets/images/my-images/Black_Mountains.jpg";
import voyage from "assets/images/my-images/voyage_logo.png";
import bain from "assets/images/my-images/bain_logo.png";
import kindeva from "assets/images/my-images/Kindeva_logo.png";
import cornell from "assets/images/my-images/Cornell_logo.png";
import pepsico from "assets/images/my-images/Pepsico_logo.png";
import pg from "assets/images/my-images/Procter_Gamble_logo.png";
import lp from "assets/images/my-images/Logicprep_logo.png";

function WorkExperience() {
    return <>
    <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${mountains2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "row-reverse",
          placeItems: "flex-end start",
        }}
      ></MKBox>
    </>;
  }
  
  export default WorkExperience;