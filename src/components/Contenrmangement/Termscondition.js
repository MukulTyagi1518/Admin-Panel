import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import { FiEdit2 } from "react-icons/fi";
const TermsEditor = () => {
  const editorRef = useRef(null);
  const [editorData, setEditorData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize the editor with data
  const initializeEditor = async (data = null) => {
    if (editorRef.current) {
      await editorRef.current.destroy();
      editorRef.current = null;
    }

    editorRef.current = new EditorJS({
      holder: 'editorjs',
      autofocus: true,
      placeholder: 'Write your About Us content here...',
      data: data || {
        time: new Date().getTime(),
        blocks: [],
      },
      onReady: () => {
        console.log('Editor.js is ready!');
      },
      tools: {
        header: Header,
        list: List,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile(file) {
                return new Promise((resolve, reject) => {
                  const formData = new FormData();
                  formData.append('image', file);
                  fetch('/your-upload-api', {
                    method: 'POST',
                    body: formData,
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      resolve({
                        success: 1,
                        file: {
                          url: data.url,
                        },
                      });
                    })
                    .catch(reject);
                });
              },
            },
          },
        },
      },
    });
  };

  // Fetch the About Us content from the server
  const fetchAboutUs = async () => {
    try {
      const res = await fetch('https://e-commerce-backend-1-0.onrender.com/api/terms-condition/get');
      const data = await res.json();
      console.log('Fetched content:', data); // Log the fetched content to ensure it's correct
      if (data.content) {
        setEditorData(data.content); // Set the content in state
      } else {
        setEditorData(null); // If no content is found, reset editor data
      }
    } catch (err) {
      console.error('Error loading About Us content:', err);
    } finally {
      setIsLoaded(true); // Mark content as loaded
    }
  };

  // Handle the save functionality
  const handleSave = async () => {
    if (!editorRef.current) return;

    const outputData = await editorRef.current.save();

    try {
      const res = await fetch('https://e-commerce-backend-1-0.onrender.com/api/terms-condition/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: outputData }),
      });

      const data = await res.json();
      alert(data.message || 'Saved successfully!');

      // Log the response to ensure it's correct
      console.log('Updated content:', data);

      // After saving, fetch the updated About Us content
      await fetchAboutUs();

      setIsEditing(false); // Exit editing mode
    } catch (err) {
      console.error('Save error:', err);
      alert('Failed to save content.');
    }
  };

  // Render the blocks dynamically
  const renderBlock = (block) => {
    switch (block.type) {
      case 'header':
        return React.createElement(
          `h${block.data.level}`, // Render h1, h2, h3, etc.
          { className: 'text-white text-xl font-bold my-2' },
          block.data.text
        );
      case 'paragraph':
        return (
          <p
            className="text-white my-2"
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );
      case 'list':
        if (block.data.style === 'unordered') {
          return (
            <ul className="list-disc text-white ml-6 my-2">
              {block.data.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item.content }} />
              ))}
            </ul>
          );
        } else if (block.data.style === 'ordered') {
          return (
            <ol className="list-decimal text-white ml-6 my-2">
              {block.data.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item.content }} />
              ))}
            </ol>
          );
        } else if (block.data.style === 'checklist') {
          return (
            <div className="my-4">
              {block.data.items.map((item, i) => (
                <label key={i} className="flex items-center text-white">
                  <input
                    type="checkbox"
                    checked={item.meta?.checked || false}
                    className="mr-2"
                    readOnly
                  />
                  <span dangerouslySetInnerHTML={{ __html: item.content }} />
                </label>
              ))}
            </div>
          );
        }
        break;
      case 'image':
        return (
          <div className="my-4">
            <img
              src={block.data.file.url}
              alt={block.data.caption || 'image'}
              className="rounded shadow-md"
            />
            {block.data.caption && (
              <p className="text-sm text-gray-400 text-center mt-1">
                {block.data.caption}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };
  

  // Load the content when the component mounts
  useEffect(() => {
    fetchAboutUs();
  }, []);

  // Initialize the editor after data has been loaded
  useEffect(() => {
    if (isEditing && isLoaded && editorData) {
      initializeEditor(editorData);
    }
  }, [isEditing, isLoaded, editorData]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Terms and condition</h2>
        <div className="flex space-x-4">
          {!isEditing ? (
            <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition duration-200"
          >
            <FiEdit2 size={18} />
            Edit
          </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
              >
                💾 Save
              </button>
              <button
                onClick={async () => {
                  if (editorRef.current) {
                    await editorRef.current.destroy();
                    editorRef.current = null;
                  }
                  setIsEditing(false); // Exit editing mode
                }}
                className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
              >
                ❌ Cancel
              </button>
            </>
          )}
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg min-h-[400px] shadow-inner">
        {isEditing ? (
          <div id="editorjs" key={isLoaded ? 'editor-loaded' : 'editor-loading'} />
        ) : editorData?.blocks?.length > 0 ? (
          editorData.blocks.map((block, index) => (
            <div key={index}>{renderBlock(block)}</div>
          ))
        ) : (
          <p className="text-gray-400 italic">No About Us content found.</p>
        )}
      </div>
    </div>
  );
};

export default TermsEditor;

