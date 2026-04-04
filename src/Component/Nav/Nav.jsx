const Nav = () => {
    return (
        <section className="max-w-[1200px] mx-auto w-full py-[16px] px-[32px] rounded-[16px] bg-[#0F142066]/40 mb-10">
            <article className="flex justify-between items-center">
                <div className="flex gap-x-[8px] items-center">
                    <div className=" flex items-center justify-center bg-[#7C3AED] w-[32px] h-[32px]  rounded-[6px]">
                        <img src="../../public/Nav.png" alt="logo"/>
                    </div>
                    <h4 className="text-xl font-semibold">Nexus</h4>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-[32px] md:gap-x-[32px]">
                    <p>Work</p>
                    <p>Studio</p>
                    <p className="">Service</p>
                    <p>Insights</p>
                </div>
                <div>
                    <button className="border-[1px] border-solid border-white px-[24px] py-[12px]"> Let's Talk</button>
                </div>
            </article>
        </section>
    )
}

export default Nav