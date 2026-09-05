import Navbar from "../components/Navbar";
import Head from "../components/Head";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceArea from "../components/ServiceArea";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Head />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <Faq />
      <Footer />
    </div>
  );
}
