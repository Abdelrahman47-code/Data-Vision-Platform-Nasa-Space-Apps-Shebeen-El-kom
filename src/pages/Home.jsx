import "../assets/css/homePage.css";
import Hero from "../components/Hero";
import TopSearchers from "../components/TopSearchers";
import TopDatasets from "../components/TopDatasets";
import SuggestedSection from "../components/SuggestedSection";

const Home = () => {
  return (
    <section>
      <Hero />
      <TopDatasets />
      <TopSearchers />
      <SuggestedSection />
    </section>
  );
};
export default Home;
