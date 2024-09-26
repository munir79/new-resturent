import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner";
import Swipeer from "./Swipeer";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Swipeer></Swipeer>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;