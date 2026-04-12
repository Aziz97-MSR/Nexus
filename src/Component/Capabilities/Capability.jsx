const Capability = (props) => {
    const { product } = props
    const { title, description, icon } = product
    return (
        <div className="radius-[10px] p-[40px] service">
            <div className="flex bg-[#7C3AED33] w-[64px] h-[64px] rounded-[16px] items-center mb-5">
                <img className="mx-auto" src={icon} alt="icon" />
            </div>
            <div className="">
                <h3 className="text-xl font-semibold mb-5">{title}</h3>
                <p className="font-normal">{description}</p>
            </div>
        </div>
    )
}

export default Capability