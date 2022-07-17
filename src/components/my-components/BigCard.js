import React from "react";

// React components
import { BrowserView, MobileView } from "react-device-detect";

// @mui material components
import Link from "@mui/material/Link";

// MUIKit2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BigCard({
  company,
  logo,
  url,
  time,
  titles,
  title1,
  title2,
  bullet1,
  bullet2,
  bullet3,
  ...rest
}) {
  return (
    <>
      {/* TODO: Make responsive to screen resizing so text doesn't get cut off */}

      <BrowserView>
        <MKBox
          position="relative"
          width="100%"
          display="flex"
          flex={1}
          flexDirection="row"
          borderRadius="xl"
          bgColor="white"
          shadow="xl"
          overflow="visible"
          p={3}
          sx={{
            borderLeft: "2px solid #ffffff",
            borderRight: "2px solid #ffffff",
            borderTop: "2px solid #ffffff",
            borderBottom: "2px solid #ffffff",
            my: 1,
          }}
        >
          <MKBox
            flex={1}
            display="flex"
            flexDirection="column"
            position="relative"
            overflow="visible"
            sx={{
              fontSize: "md",
            }}
          >
            <MKBox
              display="flex"
              flexDirection="row"
              flex={1}
              borderRadius="xl"
              bgColor="dark"
              alignItems="center"
              justifyContent="center"
              shadow="xl"
              overflow="auto"
              p={3}
              sx={{
                width: {
                  xs: "180%",
                  sm: "140%",
                  md: "100%",
                  lg: "90%",
                  xl: "80%",
                },
                height: "10%",
                position: "absolute",
                top: "-25%",
                left: "0%",
                borderLeft: "2px solid dark",
                borderRight: "2px solid dark",
                borderTop: "2px solid dark",
                borderBottom: "2px solid dark",
                mx: 2,
                my: 1,
              }}
            >
              <MKTypography
                color="white"
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                    lg: "18px",
                    xl: "20px",
                  },
                }}
              >
                {time}
              </MKTypography>
            </MKBox>
            <Link
              href={url}
              target="_blank"
              flex={5}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              <img
                src={logo}
                alt={company}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Link>
          </MKBox>
          <MKBox flex={3} p={3} mx={2} display="flex" flexDirection="column">
            <MKTypography
              flex={1}
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                },
              }}
            >
              {titles}
            </MKTypography>
            <MKTypography
              flex={2}
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="space-between"
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                },
              }}
            >
              <li>{bullet1}</li>
              <li>{bullet2}</li>
              <li>{bullet3}</li>
            </MKTypography>
          </MKBox>
        </MKBox>
      </BrowserView>

      <MobileView>
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
          p={2}
          sx={{
            borderLeft: "2px solid #ffffff",
            borderRight: "2px solid #ffffff",
            borderTop: "2px solid #ffffff",
            borderBottom: "2px solid #ffffff",
            my: 2,
          }}
        >
          <MKBox
            flex={1}
            display="flex"
            flexDirection="column"
            position="relative"
            overflow="visible"
            sx={{
              fontSize: "md",
            }}
          >
            <MKBox
              display="flex"
              flexDirection="row"
              flex={1}
              borderRadius="xl"
              bgColor="dark"
              alignItems="center"
              justifyContent="center"
              shadow="xl"
              overflow="visible"
              p={2}
              sx={{
                width: {
                  xs: "50%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
                height: "10%",
                position: "absolute",
                top: "-35px",
                left: "25%",
                borderLeft: "2px solid dark",
                borderRight: "2px solid dark",
                borderTop: "2px solid dark",
                borderBottom: "2px solid dark",
                my: 0,
              }}
            >
              <MKTypography
                color="white"
                fontWeight="bold"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "12px",
                    md: "12px",
                    lg: "12px",
                    xl: "12px",
                  },
                }}
              >
                {time}
              </MKTypography>
            </MKBox>
            <Link
              href={url}
              target="_blank"
              flex={4}
              sx={{ cursor: "pointer", userSelect: "none" }}
            >
              <img
                src={logo}
                alt={company}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Link>
          </MKBox>
          <MKBox flex={1} p={2} mx={2} display="flex" flexDirection="column">
            <MKTypography
              flex={1}
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "12px",
                  md: "12px",
                  lg: "12px",
                  xl: "12px",
                },
              }}
            >
              {title1} <br/>
              {title2}
            </MKTypography>
            <MKTypography
              flex={2}
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="space-between"
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "12px",
                  md: "12px",
                  lg: "12px",
                  xl: "12px",
                },
              }}
            >
              <li>{bullet1}</li>
              <li>{bullet2}</li>
              <li>{bullet3}</li>
            </MKTypography>
          </MKBox>
        </MKBox>
      </MobileView>
    </>
  );
}

export default BigCard;
