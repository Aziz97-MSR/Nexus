const Descriptions = () => {
    return (
        <article className="max-width-[600px]">
            <p className=" text-center font-[400]">
                <span className="block">
                    A creative agency designing digital experiences for
                </span>
                <span className="block">
                    tomorrow.
                    We blend high-end asthetics with
                </span>
                <span className="block">
                    powerfull strategy to
                    craft legendary digital
                </span> products.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-[16px] mt-10 mb-5 ">
                <button className="bg-[#7C3AED] py-[16px] px-[32px] rounded-[16px] w-[200px] text-white font-[600]">View Projects <i class="fa-solid fa-arrow-right"></i></button>
                <button className="py-[16px] px-[32px] rounded-[16px] w-[200px] font-[600]">Our Expertise </button>
            </div>
        </article>
    )
}

export default Descriptions

