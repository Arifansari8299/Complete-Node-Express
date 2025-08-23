import { useState } from 'react';
import { testDownloadSpeed, testUploadSpeed, testPing } from "./utils/speedtest"

function App() {
  const [download, setDownload] = useState(null);
  const [upload, setUpload] = useState(null);
  const [ping, setPing] = useState(null);

  const runTest = async () => {
    setDownload('Testing...');
    setUpload('Testing...');
    setPing('Testing...');

    const d = await testDownloadSpeed();
    const u = await testUploadSpeed();
    const p = await testPing();

    setDownload(`${d} Mbps`);
    setUpload(`${u} Mbps`);
    setPing(`${p} ms`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Internet Speed Test</h1>
      <button onClick={runTest} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        Start Test
      </button>
      <div className="mt-8 space-y-4 text-xl">
        <p>Download: {download}</p>
        <p>Upload: {upload}</p>
        <p>Ping: {ping}</p>
      </div>
    </div>
  );
}

export default App;
