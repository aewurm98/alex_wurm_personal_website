import React from "react";

// React components
import { BrowserView, MobileView } from "react-device-detect";

// @mui material components
import Link from "@mui/material/Link";

// MUIKit2 Components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";


function BigCard({company, logo, url, time, titles, bullet1, bullet2, bullet3, ...rest}) {

return (
<>

<BrowserView></BrowserView>

<MobileView></MobileView>

</>
);

} 

export default BigCard;