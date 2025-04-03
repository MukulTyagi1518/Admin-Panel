import { useState } from "react";
import {
  Mail,
  ChevronLeft,
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
  Redo2,
  Send,
  ChevronDown,
  Users,
  UserCheck,
  UserCog,
  X,
} from "lucide-react";

const NewsLetter = () => {
  // Mock data - in a real app, this would come from your API
  const userGroups = {
    allUsers: [
      { id: 1, email: "user1@example.com", name: "John Doe" },
      { id: 2, email: "user2@example.com", name: "Jane Smith" },
      { id: 3, email: "user3@example.com", name: "Bob Johnson" },
    ],
    subscribers: [
      { id: 4, email: "sub1@example.com", name: "Alice Brown" },
      { id: 5, email: "sub2@example.com", name: "Charlie Wilson" },
    ],
  };

  const [activeTab, setActiveTab] = useState("design");

  const [formData, setFormData] = useState({
    subject: "",
    content: "",
    selectedUsers: [],
    specificEmails: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    allUsers: false,
    subscribers: false,
    sellers: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const toggleDropdown = (type) => {
    setDropdownOpen((prev) => ({
      ...allClosed(),
      [type]: !prev[type],
    }));
    setSearchTerm("");
  };

  const allClosed = () => ({
    allUsers: false,
    subscribers: false,
    sellers: false,
  });

  const handleUserSelect = (user) => {
    setFormData((prev) => {
      const isSelected = prev.selectedUsers.some((u) => u.id === user.id);
      return {
        ...prev,
        selectedUsers: isSelected
          ? prev.selectedUsers.filter((u) => u.id !== user.id)
          : [...prev.selectedUsers, user],
      };
    });
  };

  const removeUser = (userId) => {
    setFormData((prev) => ({
      ...prev,
      selectedUsers: prev.selectedUsers.filter((u) => u.id !== userId),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter sent:", formData);
    // Here you would typically send the data to your backend
  };

  const filteredUsers = (type) => {
    return userGroups[type].filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <a
              href="/marketing/newsletters"
              className="mr-4 text-gray-600 hover:text-gray-900"
            >
              <ChevronLeft className="w-6 h-6" />
            </a>
            <h1 className="text-2xl font-bold flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              Send Newsletter
            </h1>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <form onSubmit={handleSubmit}>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Recipients
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* All Users Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        className={`w-full flex items-center justify-between px-3 py-2 border rounded-md ${
                          formData.recipientType === "allUsers"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        } transition-colors duration-200`}
                        onClick={() => toggleDropdown("allUsers")}
                      >
                        <div className="flex items-center truncate">
                          <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">All Users</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 transition-transform ${
                            dropdownOpen.allUsers ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {dropdownOpen.allUsers && (
                        <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-300 max-h-60 overflow-auto">
                          <div className="sticky top-0 p-2 border-b bg-white">
                            <input
                              type="text"
                              placeholder="Search users..."
                              className="w-full px-3 py-2 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              autoFocus
                            />
                          </div>
                          <ul className="divide-y divide-gray-200">
                            {filteredUsers("allUsers").length > 0 ? (
                              filteredUsers("allUsers").map((user) => (
                                <li key={user.id} className="hover:bg-gray-50">
                                  <button
                                    type="button"
                                    className={`w-full text-left px-3 py-3 flex items-center ${
                                      formData.selectedUsers.some(
                                        (u) => u.id === user.id
                                      )
                                        ? "bg-blue-50"
                                        : ""
                                    }`}
                                    onClick={() => handleUserSelect(user)}
                                  >
                                    <div
                                      className={`flex items-center h-5 mr-3 ${
                                        formData.selectedUsers.some(
                                          (u) => u.id === user.id
                                        )
                                          ? "text-blue-600"
                                          : "text-gray-400"
                                      }`}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={formData.selectedUsers.some(
                                          (u) => u.id === user.id
                                        )}
                                        readOnly
                                        className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                                      />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-medium text-gray-900 truncate">
                                        {user.name}
                                      </p>
                                      <p className="text-xs text-gray-500 truncate">
                                        {user.email}
                                      </p>
                                    </div>
                                  </button>
                                </li>
                              ))
                            ) : (
                              <li className="px-3 py-3 text-sm text-gray-500 text-center">
                                No users found
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Subscribers Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        className={`w-full flex items-center justify-between px-3 py-2 border rounded-md ${
                          formData.recipientType === "subscribers"
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        } transition-colors duration-200`}
                        onClick={() => toggleDropdown("subscribers")}
                      >
                        <div className="flex items-center truncate">
                          <UserCheck className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span className="truncate">Subscribers</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 flex-shrink-0 transition-transform ${
                            dropdownOpen.subscribers
                              ? "transform rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {dropdownOpen.subscribers && (
                        <div className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-300 max-h-60 overflow-auto">
                          <div className="sticky top-0 p-2 border-b bg-white">
                            <input
                              type="text"
                              placeholder="Search subscribers..."
                              className="w-full px-3 py-2 text-sm border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              autoFocus
                            />
                          </div>
                          <ul className="divide-y divide-gray-200">
                            {filteredUsers("subscribers").length > 0 ? (
                              filteredUsers("subscribers").map((user) => (
                                <li key={user.id} className="hover:bg-gray-50">
                                  <button
                                    type="button"
                                    className={`w-full text-left px-3 py-3 flex items-center ${
                                      formData.selectedUsers.some(
                                        (u) => u.id === user.id
                                      )
                                        ? "bg-blue-50"
                                        : ""
                                    }`}
                                    onClick={() => handleUserSelect(user)}
                                  >
                                    <div
                                      className={`flex items-center h-5 mr-3 ${
                                        formData.selectedUsers.some(
                                          (u) => u.id === user.id
                                        )
                                          ? "text-blue-600"
                                          : "text-gray-400"
                                      }`}
                                    >
                                      <input
                                        type="checkbox"
                                        checked={formData.selectedUsers.some(
                                          (u) => u.id === user.id
                                        )}
                                        readOnly
                                        className="h-4 w-4 rounded border-gray-300 focus:ring-blue-500"
                                      />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-sm font-medium text-gray-900 truncate">
                                        {user.name}
                                      </p>
                                      <p className="text-xs text-gray-500 truncate">
                                        {user.email}
                                      </p>
                                    </div>
                                  </button>
                                </li>
                              ))
                            ) : (
                              <li className="px-3 py-3 text-sm text-gray-500 text-center">
                                No subscribers found
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Specific Emails Multi-select */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Selected Recipients ({formData.selectedUsers.length})
                    </label>
                    <div className="border rounded-md p-2 min-h-12">
                      {formData.selectedUsers.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {formData.selectedUsers.map((user) => (
                            <div
                              key={user.id}
                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center"
                            >
                              {user.email}
                              <button
                                type="button"
                                className="ml-2 text-blue-600 hover:text-blue-800"
                                onClick={() => removeUser(user.id)}
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-500">
                          No recipients selected yet
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border border-gray-300 rounded-md overflow-hidden">
                  {/* Toolbar */}
                  <div className="bg-gray-100 border-b border-gray-300 p-2 flex flex-wrap items-center gap-1">
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Bold className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Italic className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Underline className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <ListOrdered className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <AlignLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <AlignCenter className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <AlignRight className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Image className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Link className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <div className="h-5 w-px bg-gray-400 mx-1"></div>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Undo2 className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="p-2 hover:bg-gray-200 rounded"
                    >
                      <Redo2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Editor Tabs */}
                  <div className="border-b border-gray-300 flex">
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "design"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                      onClick={() => setActiveTab("design")}
                    >
                      Design
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 text-sm font-medium ${
                        activeTab === "html"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                      onClick={() => setActiveTab("html")}
                    >
                      HTML
                    </button>
                  </div>

                  {/* Editor Content */}
                  <div className="p-4">
                    {activeTab === "design" ? (
                      <div
                        id="content"
                        className="min-h-[300px] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        contentEditable
                        dangerouslySetInnerHTML={{ __html: formData.content }}
                        onBlur={(e) => handleContentChange(e.target.innerHTML)}
                      />
                    ) : (
                      <textarea
                        id="contentHtml"
                        name="content"
                        value={formData.content}
                        onChange={(e) => handleContentChange(e.target.value)}
                        className="w-full min-h-[300px] p-2 font-mono text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mb-6 mr-5">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
