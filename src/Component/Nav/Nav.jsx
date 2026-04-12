const Nav = () => {
    return (
        <section className="max-w-[1200px] mx-auto w-full py-[16px] px-[12px] md:px-[32px] rounded-[16px] bg-[#0F142066]/40 mb-10 navContainer">
            <article className="collapse-title navbar">

                <div className="navbar-start flex gap-x-[8px] sm:mx-auto items-center">
                    <div className=" flex items-center justify-center bg-[#7C3AED] w-[32px] h-[32px]  rounded-[6px]">
                        <img src="../../public/Nav.png" alt="logo" />
                    </div>
                    <h4 className="text-xl font-semibold">Nexus</h4>
                </div>
                <div className="navbar-center  md:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu bg-[#19183B] menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><p>Work</p></li>
                            <li><p>Studio</p></li>
                            <li><p className="">Service</p></li>
                            <li><p>Insights</p></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex md:items-center md:justify-center md:gap-x-[32px]">
                    <p>Work</p>
                    <p>Studio</p>
                    <p className="">Service</p>
                    <p>Insights</p>

                </div>


                <div className="navbar-end">
                    <button className="border-[1px] border-solid border-white px-[24px] py-[12px] rounded-[16px]"> Let's Talk</button>
                </div>
            </article>
        </section>
    )
}

export default Nav