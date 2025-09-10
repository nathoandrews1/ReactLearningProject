import ExploreTopBooks from "./Components/ExploreTopBooks";
import Carousel from "./Components/Carousel";
import Heros from "./Components/Heros";
import LibServices from "./Components/LibServices";

export default function HomePage() {
    return (
        <>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibServices />
        </>
    );
}