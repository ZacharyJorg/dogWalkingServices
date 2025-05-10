import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import PictureCarrossel from "./components/PictureCarrossel";
import ContactInfo from "./components/ContactInfo";
import AboutMe from "./components/AboutMe";
import Reviews from "./components/Reviews";
import Rates from "./components/Rates";

function App() {
  const aboutMeRef = useRef(null);
  const reviewsRef = useRef(null);
  const ratesRef = useRef(null);
  const contactRef = useRef(null);
  //work on the dropdown menu to scroll into view using the ref

  const handleScroll = (sectionId) => {
    if(sectionId == 'about'){
      aboutMeRef.current.scrollIntoView({behavior : 'smooth'})
    } else if (sectionId == 'reviews') {
      reviewsRef.current.scrollIntoView({behavior: 'smooth'})
    } else if(sectionId == 'rates'){
      ratesRef.current.scrollIntoView({behavior : 'smooth'})
    } else {
      contactRef.current.scrollIntoView({behavior : 'smooth'})
    }

  } 

  return (
    <div>
      <Header onSectionSelect={handleScroll} />
      <PictureCarrossel />
      <AboutMe ref={aboutMeRef} />
      <Reviews ref={reviewsRef} />
      <Rates ref={ratesRef} />
      <ContactInfo ref={contactRef} />
    </div>
  );
}

export default App;
