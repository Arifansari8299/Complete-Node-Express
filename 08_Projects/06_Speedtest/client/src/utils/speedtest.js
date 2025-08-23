const BACKEND_URL = 'http://localhost:5000';

export async function testDownloadSpeed() {
    return new Promise((resolve, reject) => {
      const fileSizeInBytes = 10 * 1024 * 1024; // 10 MB
      const url = `http://localhost:5000/download/10MB.test?nocache=${Date.now()}`; // ✅ cache bypass
  
      const xhr = new XMLHttpRequest();
      const startTime = performance.now();
  
      xhr.open("GET", url, true);
      xhr.responseType = "blob";
  
      xhr.onload = () => {
        const endTime = performance.now();
        const duration = (endTime - startTime) / 1000; // seconds
  
        const speedBps = (fileSizeInBytes * 8) / duration;
        const speedMbps = speedBps / (1024 * 1024);
  
        resolve(speedMbps.toFixed(2));
      };
  
      xhr.onerror = () => {
        reject("Download failed");
      };
  
      xhr.send();
    });
  }
  

export async function testUploadSpeed() {
  const data = new Uint8Array(10 * 1024 * 1024); // 10MB of random data
  const formData = new FormData();
  formData.append('file', new Blob([data]), 'upload.test');

  const start = performance.now();
  await fetch(`${BACKEND_URL}/upload`, {
    method: 'POST',
    body: formData,
  });
  const end = performance.now();
  const duration = (end - start) / 1000;

  const speedMbps = (10 * 8) / duration; // 10MB in Megabits
  return speedMbps.toFixed(2);
}

export async function testPing() {
  const start = performance.now();
  await fetch(`${BACKEND_URL}/ping`);
  const end = performance.now();
  return Math.round(end - start);
}
