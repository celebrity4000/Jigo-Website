import Banner from "../components/banner";
import OurProducts from "../components/OurProducts";
import HeaderText from "../components/HeaderText";
import Aboutus from "../components/About";
import VideoSection from "../components/VideoSection";
import Divder from "../components/Divder";
import ChooseUs from '../components/ChooseUs';

function home() {
  return (
    <div>
      
      <Banner />
      <Divder />
      <HeaderText first={'OUR'} sec={'PRODUCTS'} />
      <OurProducts/>
      <Divder />
      <HeaderText first={'ABOUT'} sec={'US'} />
      <Aboutus />
      <Divder />
      <HeaderText first={'WHY'} sec={'CHOOSE US'}/>
      <ChooseUs />
      
      <VideoSection />
     
    </div>
  );
}

export default home;