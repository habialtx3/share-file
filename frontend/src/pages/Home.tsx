import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE_URL = import.meta.env.VITE_API_URL;


export default function Home() {
    const [file, setFile] = useState<File | null>(null)
    const [code, setCode] = useState('')
    const [uploadedCode, setUploadedCode] = useState('')
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!file) return alert("Pilh file terlebih dahulu");

        const formData = new FormData();
        formData.append('file', file)

        setLoading(true)

        try {
            const res = await fetch(`${BASE_URL}/upload`, {
                method: "POST",
                body: formData,
            })

            if (!res.ok) throw new Error("Upload failed");

            const data = await res.json()
            setUploadedCode(data.code)

        } catch (error) {
            console.log(error);
            alert('Upload Gagal')
        } finally {
            setLoading(false)
        }
    }

    const handleDownload = () => {
        if (!code) return alert("Masukkan kode");
        window.open(`${BASE_URL}/download/${code}`, '_blank')

    }


    // const handlePreview = () => {
    //     if (!code) return alert("Masukkan kode");
    //     window.open(`${BASE_URL}/file/${code}`)
    // }

    return (
        <>
            <div className="!bg-background !text-on-background font-body-md overflow-x-hidden">
                {/* TopNavBar */}
                <Navbar />
                <main className="pt-28 pb-xxl">
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
                            <h1 className="font-display font-bold  !text-display !text-on-background max-w-md pb-8">
                                Securely flow your files across the{" "}
                                <span className="!text-primary">Digital Void.</span>
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
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                            placeholder="Enter 6-digit code"
                                            type="text"
                                        />
                                    </div>


                                    <button onClick={handleDownload} className="!bg-slate-900 !text-white px-6 py-3 rounded-lg font-label-md hover:!bg-slate-800 transition-all flex items-center gap-2">
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

                                        <input
                                            type="file"
                                            multiple
                                            className="hidden"
                                            id="fileInput"
                                            onChange={(e) => {
                                                const selected = e.target.files?.[0] || null;
                                                setFile(selected);
                                            }}
                                        />
                                        <div className="w-24 h-24 !bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">

                                            <span
                                                className="material-symbols-outlined !text-[48px] !text-primary"
                                                onClick={() => document.getElementById("fileInput")?.click()}
                                                data-icon="upload_file"
                                            >
                                                upload_file
                                            </span>

                                        </div>
                                        <h3 className="font-h2 !text-h2 mb-2">Drag and drop files here</h3>
                                        <p className="font-body-md !text-secondary">
                                            Up to 20GB per transfer. Files are encrypted locally before
                                            upload.
                                        </p>
                                        {
                                            file && (
                                                <p className="text-sm m-8 text-primary">
                                                    Selected: {file.name}
                                                </p>
                                            )
                                        }
                                        <button
                                            onClick={handleUpload}
                                            disabled={!file || loading}
                                            className="!bg-primary !text-on-primary px-10 py-4 mt-4 rounded-full font-label-md !text-lg hover:!bg-primary-container transition-all shadow-xl shadow-primary/30 flex items-center gap-3 disabled:opacity-50"
                                        >
                                            <span className="material-symbols-outlined">
                                                {loading ? "progress_activity" : "add_circle"}
                                            </span>

                                            {loading ? "Uploading..." : "Upload File"}
                                        </button>


                                    </div>
                                    <div className="flex flex-col justify-between text-center items-center">
                                        {uploadedCode && (
                                            <p className="font-display font-bold text-lg mt-4 text-sm text-secondary">
                                                Code: {uploadedCode}
                                            </p>
                                        )}
                                    </div>
                                    {/* Mini Stats/Features row in card */}
                                    <div className="grid grid-cols-3 gap-4 mt-4 pt-8 border-t border-slate-200/50">
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
                <Footer />
            </div>
        </>
    )
}
