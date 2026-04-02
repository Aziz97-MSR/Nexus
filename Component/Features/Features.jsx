import useFeatures from "../../Hooks/useFeatures"
import Feature from "./Feature"

const Features = () =>
{
    const [features, setFeatures] = useFeatures()

    console.log(features);
    

    return(
        <article className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
            {
                features?.map(feature=><Feature key={feature.id} product={feature}></Feature>)
            }
        </article>
    )
}

export default Features