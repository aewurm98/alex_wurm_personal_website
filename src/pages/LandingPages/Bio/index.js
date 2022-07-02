// React components
import { BrowserView, MobileView } from "react-device-detect";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { spacing } from "@mui/system";

// MUIKit2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// My Components
import ButtonMailTo from "components/my-components/ButtonMailTo";

// Images
import mountains1 from "assets/images/my-images/Blue_Mountains.jpg";

//TODO: Update BrowserView to be responsive to size changes
function Bio() {
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
              backgroundImage: `url(${mountains1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.75,
            }}
          ></MKBox>
          <MKBox
            position="relative"
            minheight="80vh"
            width="60%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={5}
          >
            <MKTypography
              variant="body1"
              color="dark"
              fontWeight="regular"
              my={3}
            >
              “Alex is equally proactive, creative, and motivated - he is
              unafraid to take on new tasks, even if that means him learning a
              new software. Overall, Alex is an excellent and thoughtful
              communicator and problem solver.”
            </MKTypography>
            <MKTypography
              variant="body2"
              color="dark"
              fontWeight="regular"
              fontStyle="italic"
              my={3}
            >
              ⎯ Lindsay Tanne, Founder & CEO @ LogicPrep Education
            </MKTypography>
          </MKBox>
          <MKBox
            position="relative"
            minheight="80vh"
            width="40%"
            display="flex"
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
              mx: 2,
            }}
          >
            <MKBox
              display="flex"
              alginItems="start"
              justifyContent="space-between"
              flex={1}
            >
              <MKTypography variant="h4">👋 Hey there</MKTypography>
            </MKBox>
            <MKBox
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="start"
              flex={12}
            >
              <MKTypography
                variant="body1"
                color="secondary"
                fontWeight="regular"
                my={3}
              >
                I am a software product leader with a background in engineering
                and management consulting.
              </MKTypography>
              <MKTypography
                variant="body1"
                color="secondary"
                fontWeight="regular"
                my={3}
              >
                My primary skills include consumer discovery, data analytics &
                insights, product design, and go-to-market strategy from concept
                through scale.
              </MKTypography>
              {/* TODO: Implement mailto: hyperlink here */}
              <MKTypography
                variant="body1"
                color="secondary"
                fontWeight="regular"
                my={3}
              >
                You can reach me at <u>aewurm98@gmail.com</u> for the most
                updated version of my full resume.

              <ButtonMailTo label="aewurm98@gmail.com" mailto="mailto:aewurm98@gmail.com" />

              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
      </BrowserView>

      <MobileView>
        <MKBox
          minHeight="100vh"
          width="100%"
          position="relative"
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
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
              backgroundImage: `url(${mountains1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.75,
            }}
          ></MKBox>
          <MKBox
            position="relative"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={3}
          >
            <MKTypography
              variant="body1"
              color="light"
              fontWeight="regular"
              my={3}
            >
              “Alex is equally proactive, creative, and motivated - he is
              unafraid to take on new tasks, even if that means him learning a
              new software. Overall, Alex is an excellent and thoughtful
              communicator and problem solver.”
            </MKTypography>
            <MKTypography
              variant="body2"
              color="light"
              fontWeight="regular"
              fontStyle="italic"
              my={3}
            >
              ⎯ Lindsay Tanne, Founder & CEO @ LogicPrep Education
            </MKTypography>
          </MKBox>
          <MKBox
            position="relative"
            width="100%"
            display="flex"
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
              mx: 2,
            }}
          >
            <MKBox
              display="flex"
              alginItems="start"
              justifyContent="space-between"
              flex={1}
            >
              <MKTypography variant="h4">👋 Hey there</MKTypography>
            </MKBox>
            <MKBox
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="start"
              flex={12}
            >
              <MKTypography
                variant="body1"
                color="secondary"
                fontWeight="regular"
                my={3}
              >
                I am a software product leader with a background in engineering
                and management consulting.
              </MKTypography>
              <MKTypography
                variant="body1"
                color="secondary"
                fontWeight="regular"
                my={3}
              >
                My primary skills include consumer discovery, data analytics &
                insights, product design, and go-to-market strategy from concept
                through scale.
              </MKTypography>
              {/* TODO: Implement mailto: hyperlink here */}
              <MKTypography
                variant="body1"
                color="secondary"
                fontWeight="regular"
                my={3}
              >
                You can reach me at <u>aewurm98@gmail.com</u> for the most
                updated version of my full resume.
              </MKTypography>
            </MKBox>
          </MKBox>
        </MKBox>
      </MobileView>
    </>
  );
}

export default Bio;
