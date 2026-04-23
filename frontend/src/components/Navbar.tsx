export default function Navbar() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 !bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all duration-200">
                <div className="flex items-center gap-12">
                    <span className="!text-xl font-extrabold tracking-tighter !text-slate-900">
                        FileFlow
                    </span>
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            className="font-body-sm font-medium !text-blue-600 border-b-2 border-blue-600 pb-1"
                            href="#"
                        >
                            My Files
                        </a>
                        <a
                            className="font-body-sm font-medium !text-slate-500 hover:!text-slate-900 transition-all duration-200"
                            href="#"
                        >
                            Recent
                        </a>
                        <a
                            className="font-body-sm font-medium !text-slate-500 hover:!text-slate-900 transition-all duration-200"
                            href="#"
                        >
                            Shared
                        </a>
                        <a
                            className="font-body-sm font-medium !text-slate-500 hover:!text-slate-900 transition-all duration-200"
                            href="#"
                        >
                            Starred
                        </a>
                    </nav>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center !bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
                        <span
                            className="material-symbols-outlined !text-outline !text-[20px] mr-2"
                            data-icon="search"
                        >
                            search
                        </span>
                        <input
                            className="!bg-transparent border-none focus:ring-0 !text-body-sm w-48"
                            placeholder="Search files..."
                            type="text"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 !text-slate-500 hover:!bg-slate-50 rounded-full transition-all active:scale-95">
                            <span className="material-symbols-outlined" data-icon="notifications">
                                notifications
                            </span>
                        </button>
                        <button className="p-2 !text-slate-500 hover:!bg-slate-50 rounded-full transition-all active:scale-95">
                            <span className="material-symbols-outlined" data-icon="settings">
                                settings
                            </span>
                        </button>
                        <button className="!bg-primary !text-on-primary px-6 py-2 rounded-full font-label-md hover:!bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20">
                            Upload
                        </button>
                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary/10">
                            <img
                                alt="User profile"
                                data-alt="professional portrait of a creative professional with a friendly expression, soft studio lighting, clean background"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw0Q1RtCax0DUX7kldiZBghCReJaInPFBmhYLeS7WSwlpFvQeUoLtwPv_Dzi5IH8xET9-sWR4sCuzvVL2A9NKiQRRtQlZnYhdtCOTjEmB1ghm-j5FM3kbM_jImv9TW6Bbh1nIqBneh35pwlOuTHdlXF0Z4F5krMOKFfkbqQ3IpTCv1IYRHX8_6nGh8WISeFh3oCmn9ECGRxX9mDPJ4rmiTDUO3pDv3OyFO1Ud_tPW4rXYv4FuLOiKRfELv4ugrwDK4-F4wPOJDkQ"
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
