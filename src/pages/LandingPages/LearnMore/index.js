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
import mountains4 from "assets/images/my-images/Turquoise_Mountains.jpg";

//TODO: Update BrowserView to be responsive to size changes
function LearnMore() {
  return (
    <>
      <BrowserView>
        <MKBox
          minHeight="100vh"
          width="100%"
          position="relative"
          sx={{
            display: "flex",
            flexDirection: "row",
            placeItems: "center end",
            p: 3,
          }}
        >
          <MKBox
            position="absolute"
            minHeight="100vh"
            width="100%"
            top={0}
            left={0}
            right={0}
            bottom={0}
            sx={{
              backgroundImage: `url(${mountains4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.75,
            }}
          ></MKBox>
        </MKBox>
      </BrowserView>

      <MobileView>
        <MKBox
          minHeight="100vh"
          width="100%"
          position="relative"
          sx={{
            display: "flex",
            flexDirection: "row",
            placeItems: "center end",
            p: 3,
          }}
        >
          <MKBox
            position="absolute"
            minHeight="100vh"
            width="100%"
            top={0}
            left={0}
            right={0}
            bottom={0}
            sx={{
              backgroundImage: `url(${mountains4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.75,
            }}
          ></MKBox>
        </MKBox>
      </MobileView>
    </>
  );
}

export default LearnMore;
