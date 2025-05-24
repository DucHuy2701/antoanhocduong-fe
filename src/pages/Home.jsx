import Partners from "../components/Partner";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Value from "../components/Value";
import VerticalTabs from "../components/VerticalTabs";
import VideoLoop from "../components/VideoLoop";

function Home() {
  return (
    <>
      <Hero />
      <VideoLoop />
      <VerticalTabs />
      <Banner />
      <Value />
      <Partners />
    </>
  );
}

export default Home;
