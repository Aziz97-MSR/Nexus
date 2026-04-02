import { useEffect, useState } from "react"

const useFeatures = () =>
{
    const [features, setFeatures] = useState([])

    useEffect(()=>
        {
        fetch("./Features.json").then(res=>res.json()).then(data=>setFeatures(data))

    },[])

    return [features, setFeatures]
}

export default useFeatures