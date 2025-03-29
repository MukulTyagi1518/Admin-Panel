import { useState } from 'react';
import {
  Mail,
  ChevronLeft,
  Save,
  Eye,
  Code,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image,
  Link,
  Paperclip,
  Undo2,
  Redo2
} from 'lucide-react';

const EmailTemplateEditor = () => {
  const [template, setTemplate] = useState({
    name: 'Order Confirmation',
    subject: 'Your Order #{order_id} has been confirmed',
    emailBody: `<p>Dear {customer_name},</p>
<p>Thank you for your order!</p>
<p>Your order <strong>#{order_id}</strong> has been confirmed and is being processed.</p>
<p><strong>Order Details:</strong></p>
<ul>
  <li>Order Date: {order_date}</li>
  <li>Total Amount: {order_amount}</li>
  <li>Payment Method: {payment_method}</li>
</ul>
<p>We'll notify you once your order has shipped.</p>
<p>Thank you for shopping with us!</p>
<p>Best regards,<br>{site_name}</p>`,
  });

  const [activeTab, setActiveTab] = useState('design');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemplate(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBodyChange = (value) => {
    setTemplate(prev => ({
      ...prev,
      emailBody: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Template saved:', template);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <a href="/marketing/admin-email-template" className="mr-4 text-gray-600 hover:text-gray-900">
              <ChevronLeft className="w-6 h-6" />
            </a>
            <h1 className="text-2xl font-bold flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              Edit Email Template
            </h1>
          </div>
          <div className="flex gap-2">
            <button 
              type="submit" 
              form="templateForm"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Template
            </button>
          </div>
        </div>

        {/* Template Editor */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <form id="templateForm" onSubmit={handleSubmit}>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Template Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={template.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={template.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

             
                <div className="border border-gray-300 rounded-md overflow-hidden">
                  {/* Toolbar */}
                  <div className="bg-gray-100 border-b border-gray-300 p-2 flex flex-wrap items-center gap-1">
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Bold className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Italic className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Underline className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <List className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <ListOrdered className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <AlignLeft className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <AlignCenter className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <AlignRight className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Image className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Link className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Undo2 className="w-4 h-4" />
                    </button>
                    <button type="button" className="p-2 hover:bg-gray-200 rounded">
                      <Redo2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Editor Tabs */}
                  <div className="border-b border-gray-300 flex">
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium ${activeTab === 'design' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                      onClick={() => setActiveTab('design')}
                    >
                      Design
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium ${activeTab === 'html' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                      onClick={() => setActiveTab('html')}
                    >
                      HTML
                    </button>
                  </div>

                  {/* Editor Content */}
                  <div className="p-4">
                    {activeTab === 'design' ? (
                      <div
                        id="emailBody"
                        className="min-h-[300px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        contentEditable
                        dangerouslySetInnerHTML={{ __html: template.emailBody }}
                        onBlur={(e) => handleBodyChange(e.target.innerHTML)}
                      />
                    ) : (
                      <textarea
                        id="emailBodyHtml"
                        name="emailBody"
                        value={template.emailBody}
                        onChange={(e) => handleBodyChange(e.target.value)}
                        className="w-full min-h-[300px] p-2 font-mono text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                </div>
              </div>
          </form>
        </div>
        </div>
      </div>
  );
};

export default EmailTemplateEditor;