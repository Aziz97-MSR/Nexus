import { useEffect, useState } from "react"

const Test = () => {
    const [section, setSection] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/hero').then(res => res.json()).then(data => setSection(data))
    }, [])

    console.log(section);

    const handleAddIcon = () => {
        fetch('http://localhost:8000/addinghome',
            {
                method: 'PUT',
                headers:
                {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({newBtn: "Our Best Offer"})
            }
        ).then(res=>res.json()).then(data=>console.log(data))
    }

    return (
        <div>
            <button className="bg-[#fdfd]" onClick={handleAddIcon}>ADD icon</button>
        </div>
    )
}

export default Test