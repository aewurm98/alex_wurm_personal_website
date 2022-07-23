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

// My components
import BigCard from "components/my-components/BigCard";
import SmallCard from "components/my-components/SmallCard";

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

          {/* Big Cards Section */}
          <BigCard
            company="voyage"
            logo={voyage}
            url="https://www.voyagesms.com/"
            time="Current"
            titles="Technical Product & GTM Strategy Manager | Head of Growth Strategy & GM of LiveRecover"
            bullet1="Managed CPaaS provider transition; saving ~$250K/yr"
            bullet2="Founded data ops team to refactor codebase and stand up headless BI system"
            bullet3="Responsible for ~$1M/year P&L for acquired LiveRecover business"
          ></BigCard>
          <BigCard
            company="bain"
            logo={bain}
            url="https://www.bain.com/"
            time="2020 - 2022"
            titles="Associate Consultant | Senior Associate Consultant"
            bullet1="Led multiple B2B SaaS diligences >$100M ARR (incl. acquisitions of Cloudera, Boomi)"
            bullet2="Created agile innovation playbook for Fortune 100 CPG leader; reduced launch timeline by 60%"
            bullet3="Led $200M procurement process with direct report; achieved ~30% inflation mitigation"
          ></BigCard>

          {/* Small Cards Section */}
          <MKBox
            position="relative"
            width="100%"
            display="grid"
            gridAutoFlow="column"
            flex={1}
            justifyContent="start"
            overflow="visible"
            mx="auto"
            my={3}
            gap={1}
          >
            <SmallCard
              company="kindeva"
              logo={kindeva}
              url="https://www.kindevadd.com/"
              time="2020"
              first={true}
              position="relative"
              height="100%"
              overflow="visible"
            ></SmallCard>
            <SmallCard
              company="cornell"
              logo={cornell}
              url="https://www.cornell.edu/"
              time="2020"
              position="absolute"
              height="100%"
              overflow="visible"
            ></SmallCard>
            <SmallCard
              company="pepsico"
              logo={pepsico}
              url="https://www.pepsico.com/"
              time="2019"
              position="absolute"
              height="100%"
              overflow="visible"
            ></SmallCard>
            <SmallCard
              company="p&g"
              logo={pg}
              url="https://us.pg.com/"
              time="2018"
              position="absolute"
              height="100%"
              overflow="visible"
            ></SmallCard>
            <SmallCard
              company="logicprep"
              logo={lp}
              url="https://www.logicprep.com/"
              time="2017"
              last={true}
              position="absolute"
              height="100%"
              overflow="visible"
            ></SmallCard>
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

          {/* Big Cards Section */}
          <BigCard
            company="voyage"
            logo={voyage}
            url="https://www.voyagesms.com/"
            time="Current"
            titles="Technical Product & GTM Strategy Manager"
            title1="Technical Product & GTM Strategy Manager |"
            title2="Head of Growth Strategy & GM of LiveRecover"
            bullet1="Managed CPaaS provider transition; saving ~$250K/yr"
            bullet2="Founded data ops team to refactor codebase and stand up headless BI system"
            bullet3="Responsible for ~$1M/year P&L for acquired LiveRecover business"
          ></BigCard>
          <BigCard
            company="bain"
            logo={bain}
            url="https://www.bain.com/"
            time="2020 - 2022"
            titles="Associate Consultant | Senior Associate Consultant"
            title1="Associate Consultant |"
            title2="Senior Associate Consultant"
            bullet1="Led multiple B2B SaaS diligences >$100M ARR (incl. acquisitions of Cloudera, Boomi)"
            bullet2="Created agile innovation playbook for Fortune 100 CPG leader; reduced launch timeline by 60%"
            bullet3="Led $200M procurement process with direct report; achieved ~30% inflation mitigation"
          ></BigCard>

          {/* Small Cards Section */}
          <MKBox
            position="relative"
            width="100%"
            display="grid"
            gridAutoFlow="row"
            flex={1}
            alignItems="start"
            overflow="visible"
            mx="auto"
          >
            <MKBox
              position="relative"
              width="100%"
              display="grid"
              gridAutoFlow="column"
              overflow="visible"
              gap={1}
            >
              <SmallCard
                company="kindeva"
                logo={kindeva}
                url="https://www.kindevadd.com/"
                time="2020"
                first={true}
                position="relative"
                height="100%"
                overflow="visible"
              ></SmallCard>
              <SmallCard
                company="cornell"
                logo={cornell}
                url="https://www.cornell.edu/"
                time="2020"
                position="absolute"
                height="100%"
                overflow="visible"
              ></SmallCard>
            </MKBox>
            <MKBox
              position="relative"
              width="100%"
              display="grid"
              gridAutoFlow="column"
              overflow="visible"
              gap={1}
            >
              <SmallCard
                company="pepsico"
                logo={pepsico}
                url="https://www.pepsico.com/"
                time="2019"
                position="absolute"
                height="100%"
                overflow="visible"
              ></SmallCard>
              <SmallCard
                company="p&g"
                logo={pg}
                url="https://us.pg.com/"
                time="2018"
                position="absolute"
                height="100%"
                overflow="visible"
              ></SmallCard>
              <SmallCard
                company="logicprep"
                logo={lp}
                url="https://www.logicprep.com/"
                time="2017"
                last={true}
                position="absolute"
                height="100%"
                overflow="visible"
              ></SmallCard>
            </MKBox>
          </MKBox>
        </MKBox>
      </MobileView>
    </>
  );
}

export default WorkExperience;
