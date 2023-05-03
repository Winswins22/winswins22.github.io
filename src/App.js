import BackgroundGradientController from "./components/BackgroundGradientController";
import Navbar from "./components/Navbar";
import PageSpacer from "./components/PageSpacer";

import AboutPage from "./pages/About";
import ExperiencesPage from "./pages/Experiences";
import ProjectsPage from "./pages/Projects";

function App() {
  return (
    <>
      <Navbar> navbar </Navbar> {/* not sure if i can place this navbar here yet ... need to experiment */}

      <PageSpacer>

        <AboutPage />
        <BackgroundGradientController>
            {/* bg-controller */}
            <ExperiencesPage />
            <ProjectsPage />
        </BackgroundGradientController>

      </PageSpacer>
    </>
  );
}

export default App;