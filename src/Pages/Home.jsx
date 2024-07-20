import {
    Banner,
    Footer,
    Cta1,
    Cta2,
    Service,
    Mining,
    Transmission,
    Stats,
} from "../Components/Landing/utils/exports";
import basket1 from '../assets/Landing/bg-img2.png'
import basket2 from '../assets/Landing/bg-img3.png'
import circle from '../assets/Landing/circles.png'

const Home = () => (
    <>
        <Banner />
        <Stats />
        <div>
            <img src={basket1} alt="" className="absolute right-0" />
            <Cta1 />
            <Service />
        </div>
        <div>
            <img src={basket2} alt="" className="absolute left-0" />
            <Mining />
            <Cta2 />
        </div>
        <div>
            <img src={circle} alt="" className="absolute left-0" />
            <Transmission />
            <Footer />
        </div>
    </>
);
export default Home;
