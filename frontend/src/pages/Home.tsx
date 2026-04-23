export default function Home() {
    return (
        <>
            <nav className="bg-background text-on-background font-body-md overflow-x-hidden">
                {/* TopNavBar */}
                <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all duration-200">
                    <div className="flex items-center gap-12">
                        <span className="text-xl font-extrabold tracking-tighter text-slate-900">
                            FileFlow
                        </span>
                        <nav className="hidden md:flex items-center gap-8">
                            <a
                                className="font-body-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1"
                                href="#"
                            >
                                My Files
                            </a>
                            <a
                                className="font-body-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200"
                                href="#"
                            >
                                Recent
                            </a>
                            <a
                                className="font-body-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200"
                                href="#"
                            >
                                Shared
                            </a>
                            <a
                                className="font-body-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200"
                                href="#"
                            >
                                Starred
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/30">
                            <span
                                className="material-symbols-outlined text-outline text-[20px] mr-2"
                                data-icon="search"
                            >
                                search
                            </span>
                            <input
                                className="bg-transparent border-none focus:ring-0 text-body-sm w-48"
                                placeholder="Search files..."
                                type="text"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all active:scale-95">
                                <span className="material-symbols-outlined" data-icon="notifications">
                                    notifications
                                </span>
                            </button>
                            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all active:scale-95">
                                <span className="material-symbols-outlined" data-icon="settings">
                                    settings
                                </span>
                            </button>
                            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20">
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
                <main className="pt-32 pb-xxl">
                    {/* Hero & Upload Section */}
                    <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 space-y-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full">
                                <span
                                    className="material-symbols-outlined text-sm"
                                    data-icon="security"
                                    data-weight="fill"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    security
                                </span>
                                <span className="text-label-md uppercase tracking-wider">
                                    Enterprise-Grade Security
                                </span>
                            </div>
                            <h1 className="font-display text-display text-on-background max-w-md">
                                Securely flow your files across the{" "}
                                <span className="text-primary">digital void.</span>
                            </h1>
                            <p className="font-body-lg text-secondary max-w-lg">
                                Experience the next generation of file sharing. Encrypted, instant,
                                and ephemeral. Designed for those who value absolute digital
                                sovereignty.
                            </p>
                            {/* Download Section Integrated */}
                            <div className="bg-surface-container-lowest p-md rounded-xl border border-slate-200 shadow-sm max-w-md">
                                <label className="block font-label-md text-outline mb-sm">
                                    HAVE A TRANSFER CODE?
                                </label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <span
                                            className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline"
                                            data-icon="key"
                                        >
                                            key
                                        </span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-body-md"
                                            placeholder="Enter 6-digit code"
                                            type="text"
                                        />
                                    </div>
                                    <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-label-md hover:bg-slate-800 transition-all flex items-center gap-2">
                                        Download
                                        <span
                                            className="material-symbols-outlined text-sm"
                                            data-icon="download"
                                        >
                                            download
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            {/* Upload Container */}
                            <div className="relative">
                                {/* Background Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-cyan-400/20 blur-3xl rounded-full opacity-50" />
                                <div className="relative glass-panel rounded-[2rem] p-8 shadow-2xl border border-white/50">
                                    <div className="border-2 border-dashed border-primary/30 rounded-[1.5rem] p-12 flex flex-col items-center justify-center text-center group hover:border-primary/60 transition-all cursor-pointer bg-white/40">
                                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span
                                                className="material-symbols-outlined text-[48px] text-primary"
                                                data-icon="upload_file"
                                            >
                                                upload_file
                                            </span>
                                        </div>
                                        <h3 className="font-h2 text-h2 mb-2">Drag and drop files here</h3>
                                        <p className="font-body-md text-secondary mb-8">
                                            Up to 20GB per transfer. Files are encrypted locally before
                                            upload.
                                        </p>
                                        <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-lg hover:bg-primary-container transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
                                            <span
                                                className="material-symbols-outlined"
                                                data-icon="add_circle"
                                            >
                                                add_circle
                                            </span>
                                            Select Files to Upload
                                        </button>
                                    </div>
                                    {/* Mini Stats/Features row in card */}
                                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200/50">
                                        <div className="text-center">
                                            <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">
                                                Max Size
                                            </p>
                                            <p className="font-h3 text-primary">20 GB</p>
                                        </div>
                                        <div className="text-center border-x border-slate-200/50 px-4">
                                            <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">
                                                Encryption
                                            </p>
                                            <p className="font-h3 text-primary">AES-256</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-bold text-outline uppercase tracking-widest mb-1">
                                                Status
                                            </p>
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                                <p className="font-h3 text-emerald-600">Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Features Section */}
                    <section className="max-w-7xl mx-auto px-8 mt-xxl">
                        <div className="flex flex-col items-center text-center mb-xl">
                            <h2 className="font-h1 text-h1 mb-4">
                                Built for uncompromising privacy
                            </h2>
                            <p className="font-body-lg text-secondary max-w-2xl">
                                We don't just move your files; we protect them with an multi-layered
                                architectural approach to digital security.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="p-lg rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-md group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined" data-icon="encrypted">
                                        encrypted
                                    </span>
                                </div>
                                <h3 className="font-h3 text-h3 mb-sm">End-to-End Encryption</h3>
                                <p className="font-body-sm text-secondary leading-relaxed">
                                    Your files are encrypted on your device before they ever reach our
                                    servers. Only the recipient has the keys.
                                </p>
                            </div>
                            {/* Feature 2 */}
                            <div className="p-lg rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-md group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined" data-icon="timer_auto">
                                        auto_timer
                                    </span>
                                </div>
                                <h3 className="font-h3 text-h3 mb-sm">Auto-Destruct</h3>
                                <p className="font-body-sm text-secondary leading-relaxed">
                                    Set expiry timers for your transfers. Once downloaded or the time is
                                    up, your files are wiped permanently from our infrastructure.
                                </p>
                            </div>
                            {/* Feature 3 */}
                            <div className="p-lg rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-md group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined" data-icon="cloud_off">
                                        cloud_off
                                    </span>
                                </div>
                                <h3 className="font-h3 text-h3 mb-sm">Zero-Knowledge</h3>
                                <p className="font-body-sm text-secondary leading-relaxed">
                                    We cannot see what you share. Our infrastructure is blind by design,
                                    ensuring complete privacy from third parties.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Dynamic Visualization (Asymmetric layout) */}
                    <section className="max-w-7xl mx-auto px-8 mt-xxl relative overflow-hidden">
                        <div className="bg-slate-900 rounded-[3rem] p-xl lg:p-xxl flex flex-col lg:flex-row items-center gap-xl">
                            <div className="flex-1 space-y-lg">
                                <h2 className="font-display text-white text-display leading-tight">
                                    Fast. Secure. <br />
                                    Reliable.
                                </h2>
                                <p className="text-slate-400 text-body-lg">
                                    FileFlow utilizes a global edge network to ensure your transfers are
                                    routed through the fastest path possible, while maintaining
                                    military-grade encryption protocols.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-slate-800 py-2 px-4 rounded-full border border-slate-700">
                                        <span
                                            className="material-symbols-outlined text-primary"
                                            data-icon="bolt"
                                        >
                                            bolt
                                        </span>
                                        <span className="text-white font-label-md">GB/s Speeds</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-800 py-2 px-4 rounded-full border border-slate-700">
                                        <span
                                            className="material-symbols-outlined text-primary"
                                            data-icon="check_circle"
                                        >
                                            check_circle
                                        </span>
                                        <span className="text-white font-label-md">Audit Logs</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full lg:w-auto">
                                <div className="relative bg-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-700">
                                    {/* Simulated File Manager UI */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="material-symbols-outlined text-blue-400"
                                                    data-icon="image"
                                                >
                                                    image
                                                </span>
                                                <span className="text-white text-sm">
                                                    Campaign_Assets.zip
                                                </span>
                                            </div>
                                            <span className="text-slate-500 text-xs">1.2 GB</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="material-symbols-outlined text-amber-400"
                                                    data-icon="description"
                                                >
                                                    description
                                                </span>
                                                <span className="text-white text-sm">Legal_Draft_v4.pdf</span>
                                            </div>
                                            <span className="text-slate-500 text-xs">4.5 MB</span>
                                        </div>
                                        {/* Active Transfer */}
                                        <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className="material-symbols-outlined text-primary"
                                                        data-icon="video_file"
                                                    >
                                                        video_file
                                                    </span>
                                                    <span className="text-white text-sm">
                                                        Product_Demo_Final.mp4
                                                    </span>
                                                </div>
                                                <span className="text-primary text-xs font-bold">82%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary rounded-full"
                                                    style={{ width: "82%" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Glass Decoration Overlay */}
                                    <div className="absolute -top-6 -right-6 w-32 h-32 glass-panel rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-xl border border-white/20">
                                        <span className="text-primary font-bold text-xl">99.9%</span>
                                        <span className="text-[10px] uppercase font-bold text-slate-600">
                                            Uptime
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                {/* Footer */}
                <footer className="bg-slate-50 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-8 py-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                            <div className="space-y-4 max-w-xs">
                                <span className="font-bold text-slate-900 text-xl">FileFlow</span>
                                <p className="text-slate-500 text-body-sm">
                                    FileFlow Inc. Secure digital vault technology for the modern
                                    enterprise.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-8">
                                <div className="space-y-3">
                                    <p className="font-label-md text-slate-900 uppercase">Product</p>
                                    <nav className="flex flex-col gap-2">
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Features
                                        </a>
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Security
                                        </a>
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Business
                                        </a>
                                    </nav>
                                </div>
                                <div className="space-y-3">
                                    <p className="font-label-md text-slate-900 uppercase">Support</p>
                                    <nav className="flex flex-col gap-2">
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Help Center
                                        </a>
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            API Docs
                                        </a>
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Status
                                        </a>
                                    </nav>
                                </div>
                                <div className="space-y-3">
                                    <p className="font-label-md text-slate-900 uppercase">Legal</p>
                                    <nav className="flex flex-col gap-2">
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Terms of Service
                                        </a>
                                        <a
                                            className="text-slate-500 hover:text-blue-600 hover:underline underline-offset-4 text-xs transition-all"
                                            href="#"
                                        >
                                            Cookies
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4">
                            <span className="font-['Plus_Jakarta_Sans'] text-xs text-slate-500">
                                © 2024 FileFlow Inc. Secure digital vault technology.
                            </span>
                            <div className="flex gap-6">
                                <a
                                    className="text-slate-400 hover:text-slate-900 transition-colors"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined" data-icon="public">
                                        public
                                    </span>
                                </a>
                                <a
                                    className="text-slate-400 hover:text-slate-900 transition-colors"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined" data-icon="share">
                                        share
                                    </span>
                                </a>
                                <a
                                    className="text-slate-400 hover:text-slate-900 transition-colors"
                                    href="#"
                                >
                                    <span
                                        className="material-symbols-outlined"
                                        data-icon="alternate_email"
                                    >
                                        alternate_email
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* FAB (Suppressed on Landing per rule: Contextual FAB Suppression) */}
            </nav>

        </>
    )
}
