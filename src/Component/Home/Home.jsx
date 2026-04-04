import Descriptions from "./Description"
import Margin from "./Margin"
import Title from "./Title"

const Home = () =>
{
    return(
        <section className="mt-20 mb-10 ">
            <Margin></Margin>
            <Title></Title>
            <Descriptions></Descriptions>
        </section>
    )
}

export default Home