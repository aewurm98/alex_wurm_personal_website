// React components
import { BrowserView, MobileView } from "react-device-detect";

// MUIKit2 Components
import MKBox from "components/MKBox";

// My components
import ProjectCard from "components/my-components/ProjectCard";

// Images
import mountains3 from "assets/images/my-images/Orange_Mountains.jpg";
import kaytoo from "assets/images/my-images/kaytoo_mockups.png";
import nba from "assets/images/my-images/nba_players_stock_photo.jpeg";
import comingsoon from "assets/images/my-images/coming_soon.png";

function Projects() {
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
              backgroundImage: `url(${mountains3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.75,
            }}
          ></MKBox>
          <MKBox
            position="relative"
            width="100%"
            display="grid"
            gridAutoFlow="row"
            flex={1}
            justifyContent="start"
            overflow="visible"
            mx={3}
            my={5}
            gap={1}
          >
            {/* First Row of Cards */}
            <MKBox
              position="relative"
              width="100%"
              display="grid"
              gridAutoFlow="column"
              overflow="visible"
              gap={3}
              my="auto"
            >
              <ProjectCard
                projname="kaytoo"
                bgimg={kaytoo}
                url="https://kaytoo-app.com/"
                txt="Kaytoo, Inc."
                groupcount={2}
                position="relative"
                height="100%"
                overflow="visible"
              ></ProjectCard>
              <ProjectCard
                projname="nba-stats"
                bgimg={nba}
                url="https://github.com/aewurm98"
                txt="NBA Stats in Python"
                groupcount={2}
                position="relative"
                height="100%"
                overflow="visible"
              ></ProjectCard>
            </MKBox>
            {/* Second Row of Cards */}
            <MKBox
              position="relative"
              width="100%"
              display="grid"
              gridAutoFlow="column"
              overflow="visible"
              gap={3}
              my={5}
            >
              <ProjectCard
                projname="ar-basketball"
                bgimg={comingsoon}
                url="https://github.com/aewurm98"
                txt="AR Basketball App"
                groupcount={2}
                position="relative"
                height="100%"
                overflow="visible"
              ></ProjectCard>
              <ProjectCard
                projname="nlp"
                bgimg={comingsoon}
                url="https://github.com/aewurm98"
                txt="GPT-3-chatbot"
                groupcount={2}
                position="relative"
                height="100%"
                overflow="visible"
              ></ProjectCard>
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
              backgroundImage: `url(${mountains3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.75,
            }}
          ></MKBox>
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
            <ProjectCard
              projname="kaytoo"
              bgimg={kaytoo}
              url="https://kaytoo-app.com/"
              txt="Kaytoo, Inc."
              groupcount={2}
              position="relative"
              height="100%"
              overflow="visible"
            ></ProjectCard>
            <ProjectCard
              projname="nba-stats"
              bgimg={nba}
              url="https://github.com/aewurm98"
              txt="NBA Stats in Python"
              groupcount={2}
              position="relative"
              height="100%"
              overflow="visible"
            ></ProjectCard>
            <ProjectCard
              projname="ar-basketball"
              bgimg={comingsoon}
              url="https://github.com/aewurm98"
              txt="AR Basketball App"
              groupcount={2}
              position="relative"
              height="100%"
              overflow="visible"
            ></ProjectCard>
            <ProjectCard
              projname="nlp"
              bgimg={comingsoon}
              url="https://github.com/aewurm98"
              txt="GPT-3-chatbot"
              groupcount={2}
              position="relative"
              height="100%"
              overflow="visible"
            ></ProjectCard>
          </MKBox>
        </MKBox>
      </MobileView>
    </>
  );
}

export default Projects;
