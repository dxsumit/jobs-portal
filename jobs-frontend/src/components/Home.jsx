
import Navbar from "./navbar";
import PageTitle from "./PageTitle";
import ImageSection from "./ImageSection";
import Values from "./Values";
import JobSection from "./jobSection";
import Footer from "./footer";
import GoToTop from "./GoToTop";

const Home = () => {
    return (
        <>
            <Navbar />
            <PageTitle />
            <ImageSection />
            <Values />
            <JobSection />
            <Footer />
            <GoToTop />
        </>
    )
} 

export default Home;