import { useEffect, useState } from "react"

const useCap = () =>
{
    const [cap, setCap] = useState([])

    useEffect(()=>
        {
            fetch('./cap.json').then(res=>res.json()).then(data=>setCap(data))
        },[])

        return([cap, setCap])
}

export default useCap