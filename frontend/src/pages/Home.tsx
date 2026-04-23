import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <>
            <div className="!bg-background !text-on-background font-body-md overflow-x-hidden">
                {/* TopNavBar */}
                <Navbar />
                <main className="pt-32 pb-xxl">
                    {/* Hero & Upload Section */}
                    <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 space-y-lg">
                            <div className="inline-flex items-center gap-2 px-3 py-1 !bg-primary/10 !text-primary rounded-full">
                                <span
                                    className="material-symbols-outlined !text-sm"
                                    data-icon="security"
                                    data-weight="fill"
                                    style={{ fontVariationSettings: '"FILL" 1' }}
                                >
                                    security
                                </span>
                                <span className="!text-label-md uppercase tracking-wider">
                                    Enterprise-Grade Security
                                </span>
                            </div>
                            <h1 className="font-display !text-display !text-on-background max-w-md">
                                Securely flow your files across the{" "}
                                <span className="!text-primary">digital void.</span>
                            </h1>
                            <p className="font-body-lg !text-secondary max-w-lg">
                                Experience the next generation of file sharing. Encrypted, instant,
                                and ephemeral. Designed for those who value absolute digital
                                sovereignty.
                            </p>
                            {/* Download Section Integrated */}
                            <div className="!bg-surface-container-lowest p-md rounded-xl border border-slate-200 shadow-sm max-w-md">
                                <label className="block font-label-md !text-outline mb-sm">
                                    HAVE A TRANSFER CODE?
                                </label>
                                <div className="flex gap-2">
                                    <div className="relative flex-1">
                                        <span
                                            className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined !text-outline"
                                            data-icon="key"
                                        >
                                            key
                                        </span>
                                        <input
                                            className="w-full pl-10 pr-4 py-3 !bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none font-body-md"
                                            placeholder="Enter 6-digit code"
                                            type="text"
                                        />
                                    </div>
                                    <button className="!bg-slate-900 !text-white px-6 py-3 rounded-lg font-label-md hover:!bg-slate-800 transition-all flex items-center gap-2">
                                        Download
                                        <span
                                            className="material-symbols-outlined !text-sm"
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
                                <div className="absolute -inset-4 !bg-gradient-to-tr from-primary/20 to-cyan-400/20 blur-3xl rounded-full opacity-50" />
                                <div className="relative glass-panel rounded-[2rem] p-8 shadow-2xl border border-white/50">
                                    <div className="border-2 border-dashed border-primary/30 rounded-[1.5rem] p-12 flex flex-col items-center justify-center !text-center group hover:border-primary/60 transition-all cursor-pointer !bg-white/40">
                                        <div className="w-24 h-24 !bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <span
                                                className="material-symbols-outlined !text-[48px] !text-primary"
                                                data-icon="upload_file"
                                            >
                                                upload_file
                                            </span>
                                        </div>
                                        <h3 className="font-h2 !text-h2 mb-2">Drag and drop files here</h3>
                                        <p className="font-body-md !text-secondary mb-8">
                                            Up to 20GB per transfer. Files are encrypted locally before
                                            upload.
                                        </p>
                                        <button className="!bg-primary !text-on-primary px-10 py-4 rounded-full font-label-md !text-lg hover:!bg-primary-container transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
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
                                        <div className="!text-center">
                                            <p className="!text-xs font-bold !text-outline uppercase tracking-widest mb-1">
                                                Max Size
                                            </p>
                                            <p className="font-h3 !text-primary">20 GB</p>
                                        </div>
                                        <div className="!text-center border-x border-slate-200/50 px-4">
                                            <p className="!text-xs font-bold !text-outline uppercase tracking-widest mb-1">
                                                Encryption
                                            </p>
                                            <p className="font-h3 !text-primary">AES-256</p>
                                        </div>
                                        <div className="!text-center">
                                            <p className="!text-xs font-bold !text-outline uppercase tracking-widest mb-1">
                                                Status
                                            </p>
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="w-2 h-2 !bg-emerald-500 rounded-full animate-pulse" />
                                                <p className="font-h3 !text-emerald-600">Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </main>
                {/* Footer */}
                <footer className="!bg-slate-50 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-8 py-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                            <div className="space-y-4 max-w-xs">
                                <span className="font-bold !text-slate-900 !text-xl">FileFlow</span>
                                <p className="!text-slate-500 !text-body-sm">
                                    FileFlow Inc. Secure digital vault technology for the modern
                                    enterprise.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-8">
                                <div className="space-y-3">
                                    <p className="font-label-md !text-slate-900 uppercase">Product</p>
                                    <nav className="flex flex-col gap-2">
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Features
                                        </a>
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Security
                                        </a>
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Business
                                        </a>
                                    </nav>
                                </div>
                                <div className="space-y-3">
                                    <p className="font-label-md !text-slate-900 uppercase">Support</p>
                                    <nav className="flex flex-col gap-2">
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Help Center
                                        </a>
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            API Docs
                                        </a>
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Status
                                        </a>
                                    </nav>
                                </div>
                                <div className="space-y-3">
                                    <p className="font-label-md !text-slate-900 uppercase">Legal</p>
                                    <nav className="flex flex-col gap-2">
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Terms of Service
                                        </a>
                                        <a
                                            className="!text-slate-500 hover:!text-blue-600 hover:underline underline-offset-4 !text-xs transition-all"
                                            href="#"
                                        >
                                            Cookies
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4">
                            <span className="font-['Plus_Jakarta_Sans'] !text-xs !text-slate-500">
                                © 2024 FileFlow Inc. Secure digital vault technology.
                            </span>
                            <div className="flex gap-6">
                                <a
                                    className="!text-slate-400 hover:!text-slate-900 transition-colors"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined" data-icon="public">
                                        public
                                    </span>
                                </a>
                                <a
                                    className="!text-slate-400 hover:!text-slate-900 transition-colors"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined" data-icon="share">
                                        share
                                    </span>
                                </a>
                                <a
                                    className="!text-slate-400 hover:!text-slate-900 transition-colors"
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
            </div>
        </>
    )
}
