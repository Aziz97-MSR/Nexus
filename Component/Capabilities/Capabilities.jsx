import useCap from "../../Hooks/useCap"
import Capability from "./Capability"

const Capabilities = () => 
{
    const [cap,setCap] = useCap()

    console.log(cap)

    return(
        <article className="grid grid-cpls-1 md:grid-cols-3 gap-[24px] mt-10 p-[40px]">
            {
                cap?.map(cap=><Capability key={cap.id} product={cap}></Capability>)
            }
        </article>
    )
}

export default Capabilities