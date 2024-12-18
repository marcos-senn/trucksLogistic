import "./App.css";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import ContactInfo from "./components/NewContactInfo";
import NewHero from "./components/NewHero";
import OurMision from "./components/OurMision";
import OurServices from "./components/OurServices"
import WhyUs from "./components/WhyUs";
import Toast from "./components/Toast"

function App() {
    return (
        <>
            <NewHero></NewHero>
            <Toast></Toast>
            <OurMision></OurMision>
            <OurServices></OurServices>
            <OurTeam></OurTeam>
            <WhyUs></WhyUs>
            <ContactInfo></ContactInfo>
            <Footer></Footer>
        </>
    );
}

export default App;
