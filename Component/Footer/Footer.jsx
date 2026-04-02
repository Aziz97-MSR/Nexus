const Footer = () => {
    return (
        <section className="px-[120px]  bg-[#0F142066]/40">
            <footer className="flex justify-between items-center pt-[80px] pb-[40px]">
                <div className="flex items-center gap-x-[8px]">
                    <div className="bg-[#7C3AED] w-[24px] h-[24px] flex justify-center items-center rounded-[6px]">
                        <img src="../../public/Nav.png"  alt="logo" />
                    </div>
                    <h4 className="text-xl font-semibold">NEXUS</h4>
                </div>
                <div>
                    <p>&copy; 2025 NexusCretive Agency. All right reseved.</p>
                </div>
                <div className="flex justify-evenly gap-6">
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Dribble</p>
                </div>
            </footer>
        </section>
    )
}

export default Footer