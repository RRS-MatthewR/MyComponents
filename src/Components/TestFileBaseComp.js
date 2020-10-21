import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

function TestFileBaseComp() {
        const [files, setFiles] = useState([]); 

        const handleSubmit = e => { 
            e.preventDefault() 
            console.log(files);
        };

    return (
    <form onSubmit={handleSubmit}>
        <FileBase64
            multiple={ true }
            onDone={setFiles.bind() }
            value={files}
            />
        <button>
            Upload
        </button> 
    </form>


    );
}

export default TestFileBaseComp