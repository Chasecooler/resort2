import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
export default function Home() {
    return (
        <>
        <Hero>
        <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $399">
<Link to='./rooms' className="btn-primary"> Our Rooms</Link>
        </Banner>
    </Hero>
    <Services />
    <FeaturedRooms/>>
    </>
    );
}
// return <Hero hero="defaultHero" />; ... not needed, already defined
// const Home = () => {
//     return (
//         <div>
//             Hello from home page.
//         </div>
//     )
// }

// export default Home
