// import React, {useMemo} from 'react';
// import {useDropzone} from 'react-dropzone';

// const baseStyle = {
//   flex: 1,
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '20px',
//   borderWidth: 2,
//   borderRadius: 2,
//   borderColor: '#eeeeee',
//   borderStyle: 'dashed',
//   backgroundColor: '#fafafa',
//   color: '#bdbdbd',
//   outline: 'none',
//   transition: 'border .24s ease-in-out'
// };

// const activeStyle = {
//   borderColor: '#2196f3'
// };

// const acceptStyle = {
//   borderColor: '#00e676'
// };

// const rejectStyle = {
//   borderColor: '#ff1744'
// };

// function StyledDropzone(props) {
//   const {
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject
//   } = useDropzone({accept: 'image/*'});

//   const style = useMemo(() => ({
//     ...baseStyle,
//     ...(isDragActive ? activeStyle : {}),
//     ...(isDragAccept ? acceptStyle : {}),
//     ...(isDragReject ? rejectStyle : {})
//   }), [
//     isDragActive,
//     isDragReject
//   ]);

//   return (
//     <div className="container">
//       <div {...getRootProps({style})}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//     </div>
//   );
// }

// {/* <StyledDropzone /> */}
// export default StyledDropzone


import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'gray',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: 'black'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
function StyledDropzone(props) {
  const {acceptedFiles, rejectedFiles, getRootProps, getInputProps, 
    isDragActive,
    isDragAccept,
    isDragReject} = useDropzone({
    // accept: ' application/* '
  });
  
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
        <div {...getRootProps({style})}>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.xls and *.xlsx files will be accepted)</em>
      </div>
      
      <aside>
        <h4>Accepted files</h4>
        
          {acceptedFilesItems}
      
        {/* <h4>Rejected files</h4>
        <ul>
          {rejectedFilesItems}
        </ul> */}
      </aside>
      </div>
    </section>
  );
}

{/* <Accept /> */}
export default StyledDropzone
