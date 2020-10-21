import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';

function UploadFiles() {
        const [files, setFiles] = useState([]);

        // getFiles(files){
        //     this.setState({ files: files })
        //   }

       const handleSubmit = e => { 
            e.preventDefault()
            console.log(files) 
        }

    return (
    <form id="uploadForm" onSubmit={handleSubmit}>
        <div id="companies">
            <h1>Upload File Component</h1>
            <hr align="left"/>
                <div className="addCompanyRow">                      
                        <label> 
                            <FileBase64
                                multiple={ true }
                                onDone={setFiles.bind()} />  
                        </label>
                        <button className="uploadNewBtn" value="submit">
                            Upload <i className="fas fa-upload"></i>
                        </button>    
                </div>
            </div>
        </form>
    );
}

export default UploadFiles