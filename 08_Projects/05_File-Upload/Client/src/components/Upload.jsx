import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000";

export default function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await axios.get(`${API_URL}/files`);
    setFiles(res.data);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return setMessage("Please select a file");

    if (file.size > 10 * 1024 * 1024) {
      return setMessage("File size exceeds 10 MB");
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post(`${API_URL}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(res.data.message);
      setFile(null);
      fetchFiles();
    } catch (err) {
      setMessage(err.response?.data?.error || "Upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Resume Upload</h1>

      <form
        onSubmit={handleUpload}
        className="bg-gray-800 p-6 rounded-lg w-full max-w-md"
      >
        {message && (
          <p className="mb-4 text-sm text-yellow-300">{message}</p>
        )}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4 w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-500 file:text-white
            hover:file:bg-blue-600"
          accept=".pdf,.doc,.docx"
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg"
        >
          Upload
        </button>
      </form>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Uploaded Files</h2>
      <div className="w-full max-w-2xl">
        {files.length === 0 ? (
          <p>No files uploaded yet</p>
        ) : (
          <table className="table-auto w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Size</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {files.map((f) => (
                <tr key={f._id} className="border-b border-gray-700">
                  <td className="px-4 py-2">{f.originalName}</td>
                  <td className="px-4 py-2">
                    {(f.size / (1024 * 1024)).toFixed(2)} MB
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href={`${API_URL}/download/${f._id}`}
                      className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-600"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
