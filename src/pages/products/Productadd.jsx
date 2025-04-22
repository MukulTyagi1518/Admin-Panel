import React, { useState } from "react";
import "./Product.css";
import { X } from "lucide-react";
import { useProductContext } from "../../productContex";
import { Link } from "react-router-dom"
import api from "../../utils/axios"



const ProductMediaForm = () => {
  const [videoProvider, setVideoProvider] = useState("Youtube");
  const [galleryImgs, setGalleryImgs] = useState([])
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [pdfSpecification, setPdfSpecification] = useState(null)


  const { productData, setProductData } = useProductContext()

  console.log(productData)

  // Handle file selection for gallery (multiple)
  const handleGalleryChange = (e) => {
    setGalleryImgs([...e.target.files]); // Convert FileList to Array
  };



  // Handle file selection for thumbnail
  const handleThumbnailChange = (e) => {
    setThumbnailImage(e.target.files[0]);
  };

  const handlePdfSpecificationChange = (e) => {
    setPdfSpecification(e.target.files[0]);
  };



  return (

    <div className="form-container">
    <h2 className="form-title">Product Files & Media</h2>
    <div className="divider"></div>
  
    {/* Gallery Images */}
    <div className="form-group">
      <label>Gallery Images</label>
      <div className="input-container">
        <div className="flex items-center gap-4">
          <label className="cursor-pointer bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition">
            Browse
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleGalleryChange}
            />
          </label>
          <span className="text-gray-600 text-sm">{galleryImgs.length} files selected</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          These images are visible in the product details page gallery. Minimum dimensions required: 900px width X 900px height.
        </p>
      </div>
    </div>
  
    {/* Selected Images */}
    {galleryImgs && galleryImgs.length > 0 && (
      <div className="form-group">
        <label>Selected Images</label>
        <div className="input-container">
          <div className="flex flex-row flex-wrap gap-3">
            {galleryImgs.map((g, i) => (
              <div className="relative w-[4cm] h-[4cm]" key={i}>
                <img
                  src={URL.createObjectURL(g)}
                  alt="gallery"
                  className="w-full h-full object-cover rounded"
                />
                <div className="p-1 rounded-full bg-blue-100 absolute top-1 right-1">
                  <X size={16} color="blue" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  
    {/* Thumbnail Image */}
    <div className="form-group">
      <label>Thumbnail Image</label>
      <div className="input-container">
        <div className="flex items-center gap-4">
          <label className="cursor-pointer bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition">
            Browse
            <input
              type="file"
              className="hidden"
              onChange={handleThumbnailChange}
            />
          </label>
          <span className="text-gray-600 text-sm">{thumbnailImage?.name}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          This image is visible in all product boxes. Minimum dimensions required: 195px width X 195px height.
        </p>
      </div>
    </div>
  
    {/* Video Provider */}
    <div className="form-group">
      <label>Video Provider</label>
      <div className="input-container">
        <select
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
          value={productData.videoProvider}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              videoProvider: e.target.value,
            }))
          }
        >
          <option value="Youtube">Youtube</option>
          <option value="Vimeo">Vimeo</option>
          <option value="Dailymotion">Dailymotion</option>
        </select>
      </div>
    </div>
  
    {/* Video Link */}
    <div className="form-group">
      <label>Video Link</label>
      <div className="input-container">
        <input
          type="text"
          placeholder="Video Link"
          value={productData.videoLink}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              videoLink: e.target.value,
            }))
          }
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
        />
        <p className="text-sm text-gray-500 mt-2">
          Use a proper link without extra parameters. Don't use short share links or embedded iframe code.
        </p>
      </div>
    </div>
  
    {/* PDF Specification */}
    <div className="form-group">
      <label>PDF Specification</label>
      <div className="input-container">
        <div className="flex items-center gap-4">
          <label className="cursor-pointer bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition">
            Browse
            <input
              type="file"
              className="hidden"
              onChange={handlePdfSpecificationChange}
            />
          </label>
          <span className="text-gray-600 text-sm">{pdfSpecification?.name}</span>
        </div>
      </div>
    </div>
  
    {/* Buttons */}
    <div className="button-group flex justify-end mt-6 ml-auto">
  <Link to="/products/create/price-stock">
    <button
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      onClick={() =>
        setProductData((prev) => ({
          ...prev,
          galleryImages: galleryImgs,
          thumbnailImage: thumbnailImage,
          pdfSpecification: pdfSpecification,
        }))
      }
    >
      Save & Publish
    </button>
  </Link>
</div>

  </div>
  
  );
};

export default ProductMediaForm;
