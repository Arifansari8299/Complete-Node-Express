import React from "react";
const Upload = () => {
    const handleUpload = async(e) => {
        e.preventDefault();

    }
    return(
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 ">
            <h1 className="tet-3xl font-bold ">Resume upload</h1>
            <form onSubmit={handleUpload}></form>
        </div>
    )
}
export default Upload