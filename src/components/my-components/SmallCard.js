import React from "react";

// React components
import { BrowserView, MobileView } from "react-device-detect";

// @mui material components
import Link from "@mui/material/Link";

// MUIKit2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function SmallCard({ company, logo, url, time, first, last, ...rest}) {

  return (
    <>
      <BrowserView>
        <MKBox
          position="relative"
          display="flex"
          height="100%"
          width="100%"
          flexDirection="column"
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
          }}
        >
            <Link
              href={url}
              height="100%"
              // Change divisor # based on # of small cards included
              maxWidth={window.innerWidth/5}
              target="_blank"
              flex={3}
              sx={{ cursor: "pointer", userSelect: "none" }}
              position="relative"
            >
              <img
                src={logo}
                alt={company}
                style={{
                  objectFit: "contain",
                  height:"100%",
                  width:"100%"
                }}
              />
            </Link>
            <MKBox
              width="100%"
              height="10%"
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
                position: "absolute",
                bottom: "-10%",
                left: "10%",
                borderLeft: "2px solid dark",
                borderRight: "2px solid dark",
                borderTop: "2px solid dark",
                borderBottom: "2px solid dark",
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
          </MKBox>
      </BrowserView>

      <MobileView></MobileView>
    </>
  );
}

SmallCard.defaultProps = {
    first: false,
    last: false
  };

export default SmallCard;
