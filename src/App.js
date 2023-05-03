import BackgroundGradientController from "./components/BackgroundGradientController";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";

import AboutPage from "./pages/About";
import ExperiencesPage from "./pages/Experiences";
import ProjectsPage from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar> navbar </Navbar> {/* not sure if i can place this navbar here yet ... need to experiment */}
      <PageWrapper>
        <AboutPage> </AboutPage>
        <BackgroundGradientController>
            bg-controller
            <ExperiencesPage> </ExperiencesPage>
            <ProjectsPage> </ProjectsPage>
        </BackgroundGradientController>
      </PageWrapper>
    </>
  );
}

export default App;