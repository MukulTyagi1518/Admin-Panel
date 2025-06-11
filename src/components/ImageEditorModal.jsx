// import React, { useState, useCallback } from "react";
// import Cropper from "react-easy-crop";

// const getCroppedImg = (imageSrc, croppedAreaPixels) => {
//   return new Promise((resolve, reject) => {
//     const image = new Image();
//     image.src = imageSrc;
//     image.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = croppedAreaPixels.width;
//       canvas.height = croppedAreaPixels.height;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(
//         image,
//         croppedAreaPixels.x,
//         croppedAreaPixels.y,
//         croppedAreaPixels.width,
//         croppedAreaPixels.height,
//         0,
//         0,
//         croppedAreaPixels.width,
//         croppedAreaPixels.height
//       );
//       resolve(canvas.toDataURL("image/jpeg"));
//     };
//     image.onerror = reject;
//   });
// };

// export default function ImageEditorModal({ open, imageSrc, onClose, onSave }) {
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onCropComplete = useCallback((_, area) => {
//     setCroppedAreaPixels(area);
//   }, []);

//   const handleSave = async () => {
//     const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
//     onSave(croppedImage);
//     onClose();
//   };

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
//       <div className="relative bg-white rounded-xl p-4 w-[90vw] h-[80vh]">
//         <Cropper
//           image={imageSrc}
//           crop={crop}
//           zoom={zoom}
//           aspect={4 / 5}
//           onCropChange={setCrop}
//           onZoomChange={setZoom}
//           onCropComplete={onCropComplete}
//         />
//         <div className="flex justify-end gap-4 mt-4">
//           <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">
//             Cancel
//           </button>
//           <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
//             Save Crop
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import Modal from "react-modal";
import Button from "./Button";

Modal.setAppElement("#root");

function ImageEditorModal({ image, onSave, onClose }) {
  const editorRef = useRef(null);

  const handleSave = () => {
    if (editorRef.current) {
      editorRef.current.getImage().toBlob((blob) => {
        onSave(blob);
      });
    }
  };

  return (
    <Modal isOpen onRequestClose={onClose} contentLabel="Edit Image" className="modal" overlayClassName="overlay">
      <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-2xl">
        <h2 className="text-xl font-semibold">Edit Image</h2>
        <AvatarEditor
          ref={editorRef}
          image={image.file}
          width={300}
          height={300}
          border={50}
          borderRadius={10}
          color={[255, 255, 255, 0.6]}
          scale={1.2}
          rotate={0}
        />
        <div className="flex gap-4">
          <Button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-full">
            Save
          </Button>
          <Button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-full">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ImageEditorModal;
