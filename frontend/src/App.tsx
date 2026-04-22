import { useState } from "react"

const BASE_URL = import.meta.env.VITE_API_URL;

export default function App() {
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


  const handlePreview = () => {
    if (!code) return alert("Masukkan kode");
    window.open(`${BASE_URL}/file/${code}`)
  }

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Simple file share</h1>
      <div style={{ marginBottom: 30 }}>
        <h2>Upload</h2>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)}></input>
        <br />
        <br />
        <button onClick={handleUpload} disabled={loading}>{loading ? "Uploading ..." : 'Upload'}</button>
        {
          uploadedCode && (
            <p>
              Kode : <b>{uploadedCode}</b>
            </p>
          )
        }
        <div>
          <p>Code</p>
          <h2>Download / Preview</h2>
          <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Masukkan code"></input>
          <br />
          <br />
          <button onClick={handleDownload}>Download</button>
          <button onClick={handlePreview} style={{ marginLeft: 10 }}>Preview</button>
        </div>
      </div>
    </div>
  )
}
