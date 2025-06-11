import React, { useState, useRef, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './cropImage';
import { fabric } from 'fabric';

const ImageEditor = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [showCropper, setShowCropper] = useState(true);
  const [canvasReady, setCanvasReady] = useState(false);

  const cropRef = useRef();
  const canvasRef = useRef();

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      setShowCropper(true);
      setCanvasReady(false);
    }
  };

  const handleCrop = async () => {
    const croppedImg = await getCroppedImg(imageSrc, croppedAreaPixels);
    setShowCropper(false);
    setTimeout(() => loadToCanvas(croppedImg), 100); // Load cropped image into canvas
  };

  const loadToCanvas = (dataUrl) => {
    const canvas = new fabric.Canvas('editor-canvas');
    fabric.Image.fromURL(dataUrl, (img) => {
      img.set({ left: 0, top: 0 });
      img.scaleToWidth(600);
      canvas.setWidth(600);
      canvas.setHeight(img.height * (600 / img.width));
      canvas.add(img);
    });

    canvasRef.current = canvas;
    setCanvasReady(true);
  };

  const addText = () => {
    const canvas = canvasRef.current;
    const text = new fabric.Textbox('Your Text Here', {
      left: 50,
      top: 50,
      fill: '#000',
      fontSize: 24,
    });
    canvas.add(text);
  };

  const changeBgColor = () => {
    const canvas = canvasRef.current;
    canvas.setBackgroundColor('#ffe6e6', canvas.renderAll.bind(canvas));
  };

  const adjustBrightness = (value) => {
    const canvas = canvasRef.current;
    const activeObj = canvas.getObjects('image')[0];
    const filter = new fabric.Image.filters.Brightness({ brightness: parseFloat(value) });
    activeObj.filters = [filter];
    activeObj.applyFilters();
    canvas.renderAll();
  };

  return (
    <div>
      <h2>React Image Editor</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {showCropper && imageSrc && (
        <>
          <div style={{ position: 'relative', width: '100%', height: 400 }}>
            <Cropper
              image={imageSrc}
              crop={{ x: 0, y: 0 }}
              zoom={1}
              aspect={4 / 3}
              onCropChange={() => {}}
              onCropComplete={onCropComplete}
              onZoomChange={() => {}}
            />
          </div>
          <button onClick={handleCrop}>Crop and Edit</button>
        </>
      )}

      {canvasReady && (
        <>
          <canvas id="editor-canvas" style={{ border: '1px solid #ccc', marginTop: 20 }} />
          <div style={{ marginTop: 20 }}>
            <button onClick={addText}>Add Text</button>
            <button onClick={changeBgColor}>Change BG Color</button>
            <label style={{ marginLeft: 10 }}>Brightness:</label>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.1"
              onChange={(e) => adjustBrightness(e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageEditor;
