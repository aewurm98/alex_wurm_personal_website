// React components
import { BrowserView, MobileView } from "react-device-detect";
// import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { spacing } from "@mui/system";
import Link from "@mui/material/Link";

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

//TODO: Update BrowserView to be responsive to size changes
function WorkExperience() {
  return (
    <>
      <BrowserView>
        <MKBox
          minHeight="100vh"
          width="100%"
          position="relative"
          sx={{
            display: "flex",
            flexDirection: "column",
            placeItems: "center",
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
              backgroundImage: `url(${mountains2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.75,
            }}
          ></MKBox>
          <MKBox
            position="relative"
            width="100%"
            display="flex"
            flex={1}
            flexDirection="row"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
            overflow="auto"
            p={3}
            sx={{
              borderLeft: "2px solid #ffffff",
              borderRight: "2px solid #ffffff",
              borderTop: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
              mx: 2,
              my: 1,
            }}
          >
            <MKBox
              flex={1}
              sx={{
                fontSize: "md",
              }}
            >
              <Link
                href = "https://www.voyagesms.com/"
                target = "_blank"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <img
                  src={voyage}
                  alt="voyage"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </MKBox>
            <MKBox flex={4} p={3} mx={2} display="flex" flexDirection="column">
              <MKTypography flex={1} fontWeight="bold">
                Positions
              </MKTypography>
              <MKTypography
                flex={2}
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="space-between"
              >
                <li>Voyage 1</li>
                <li>Voyage 2</li>
                <li>Voyage 3</li>
              </MKTypography>
            </MKBox>
          </MKBox>
          <MKBox
            position="relative"
            width="100%"
            display="flex"
            flex={1}
            flexDirection="row"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
            overflow="auto"
            p={3}
            sx={{
              borderLeft: "2px solid #ffffff",
              borderRight: "2px solid #ffffff",
              borderTop: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
              mx: 2,
              my: 1,
            }}
          >
            <MKBox
              flex={1}
              sx={{
                fontSize: "md",
              }}
            >
              <Link
                href="https://www.bain.com/"
                target = "_blank"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <img
                  src={bain}
                  alt="bain"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Link>
            </MKBox>
            <MKBox flex={4} p={3} mx={2} display="flex" flexDirection="column">
              <MKTypography flex={1} fontWeight="bold">
                Positions
              </MKTypography>
              <MKTypography
                flex={2}
                display="flex"
                flexDirection="column"
                alignItems="start"
                justifyContent="space-between"
              >
                <li>Bain 1</li>
                <li>Bain 2</li>
                <li>Bain 3</li>
              </MKTypography>
            </MKBox>
          </MKBox>
          <MKBox
            position="relative"
            width="100%"
            display="flex"
            flex={1}
            flexDirection="row"
            justifyContent="space-between"
            mx={2}
            my={1}
          >
            <MKBox
              position="relative"
              display="flex"
              flex={1}
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              overflow="auto"
              p={3}
              sx={{
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #ffffff",
                borderTop: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                mr: 1,
              }}
            ></MKBox>
            <MKBox
              position="relative"
              display="flex"
              flex={1}
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              overflow="auto"
              p={3}
              sx={{
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #ffffff",
                borderTop: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                mx: 1,
              }}
            ></MKBox>
            <MKBox
              position="relative"
              display="flex"
              flex={1}
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              overflow="auto"
              p={3}
              sx={{
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #ffffff",
                borderTop: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                mx: 1,
              }}
            ></MKBox>
            <MKBox
              position="relative"
              display="flex"
              flex={1}
              flexDirection="column"
              borderRadius="xl"
              bgColor="white"
              shadow="xl"
              overflow="auto"
              p={3}
              sx={{
                borderLeft: "2px solid #ffffff",
                borderRight: "2px solid #ffffff",
                borderTop: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                ml: 1,
              }}
            ></MKBox>
          </MKBox>
        </MKBox>
      </BrowserView>

      <MobileView></MobileView>
    </>
  );
}

export default WorkExperience;
