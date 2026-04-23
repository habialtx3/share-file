export default function Footer() {
    return (
        <>
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
        </>
    )
}
