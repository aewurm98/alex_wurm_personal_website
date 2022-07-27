// React components
import { BrowserView, MobileView } from "react-device-detect";

// MUIKit2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Images
import mountains4 from "assets/images/my-images/Turquoise_Mountains.jpg";
import alex from "assets/images/my-images/alex_in_mountains.jpeg";

function LearnMore() {
  return (
    <>
      <BrowserView>
        <MKBox
          minHeight="100vh"
          width="100%"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={1}
          sx={{
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
          <MKBox
            position="relative"
            width="100%"
            display="flex"
            flex={1}
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
            overflow="visible"
            p={1}
            sx={{
              borderLeft: "2px solid #ffffff",
              borderRight: "2px solid #ffffff",
              borderTop: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
              mx: 2,
            }}
          >
            <MKBox
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="start"
              gap={3}
              p={1}
              flex={1}
              overflow="visible"
            >
              <MKTypography variant="h4">
                📚 Want to hear more about what I'm up to?
              </MKTypography>
              <MKButton
                sx={{ width: "100%" }}
                flex={1}
                position="relative"
                variant="contained"
                color="dark"
                to="#"
                onClick={(e) => {
                  window.open(
                    "mailto:aewurm98@gmail.com?subject=Inquiring%20from%20your%20website"
                  );
                  e.preventDefault();
                }}
              >
                Send me an email
              </MKButton>
              <MKButton
                sx={{ width: "100%" }}
                flex={1}
                position="relative"
                variant="contained"
                color="dark"
                to="#"
                onClick={(e) => {
                  window.open("https://alexwurm.substack.com/");
                  e.preventDefault();
                }}
              >
                Check out my Substack!
              </MKButton>
            </MKBox>
            <MKBox height="100%" flex={3} p={1} position="relative">
              <img
                src={alex}
                alt="alex"
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                }}
              />
            </MKBox>
          </MKBox>
        </MKBox>
      </BrowserView>

      <MobileView>
        <MKBox
          minHeight="80vh"
          width="100%"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={1}
          sx={{
            p: 3,
          }}
        >
          <MKBox
            position="absolute"
            minHeight="80vh"
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
          <MKBox
            position="relative"
            width="100%"
            display="flex"
            flex={1}
            flexDirection="column"
            borderRadius="xl"
            bgColor="white"
            shadow="xl"
            overflow="visible"
            p={1}
            sx={{
              borderLeft: "2px solid #ffffff",
              borderRight: "2px solid #ffffff",
              borderTop: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
              mx: 2,
            }}
          >
            <MKBox
              position="relative"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="start"
              gap={3}
              p={1}
              flex={1}
              overflow="visible"
            >
              <MKTypography variant="h4">
                📚 Want to hear more about what I'm up to?
              </MKTypography>
              <MKButton
                sx={{ width: "100%" }}
                flex={1}
                position="relative"
                variant="contained"
                color="dark"
                to="#"
                onClick={(e) => {
                  window.open(
                    "mailto:aewurm98@gmail.com?subject=Inquiring%20from%20your%20website"
                  );
                  e.preventDefault();
                }}
              >
                Send me an email
              </MKButton>
              <MKButton
                sx={{ width: "100%" }}
                flex={1}
                position="relative"
                variant="contained"
                color="dark"
                to="#"
                onClick={(e) => {
                  window.open("https://alexwurm.substack.com/");
                  e.preventDefault();
                }}
              >
                Check out my Substack!
              </MKButton>
            </MKBox>
            <MKBox height="100%" flex={3} p={1} position="relative">
              <img
                src={alex}
                alt="alex"
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                }}
              />
            </MKBox>
          </MKBox>
        </MKBox>
      </MobileView>
    </>
  );
}

export default LearnMore;
