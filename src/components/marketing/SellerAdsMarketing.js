import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
   Plus, CreditCard, DollarSign, Filter, 
  Search, X,  AlertCircle, 
  Menu, Clock, BarChart2 
} from 'lucide-react';

const SellerAdsMarketing = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showCreateAdModal, setShowCreateAdModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(50);
  const [credits, setCredits] = useState(150);
  const [ads, setAds] = useState([]);
  const [formData, setFormData] = useState({
    product: '',
    budget: '',
    duration: 7,
    target_location: '',
    target_audience: 'all',
    payment_method: 'credit'
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data - replace with API calls
  useEffect(() => {
    const mockAds = [
      {
        id: 1,
        product: 'Wireless Headphones',
        image: 'https://via.placeholder.com/80',
        status: 'active',
        clicks: 245,
        impressions: 1200,
        cost: 75,
        start_date: '2023-05-15',
        end_date: '2023-06-15'
      },
      {
        id: 2,
        product: 'Smart Watch Pro',
        image: 'https://via.placeholder.com/80',
        status: 'pending',
        clicks: 0,
        impressions: 0,
        cost: 50,
        start_date: '2023-06-01',
        end_date: '2023-06-08'
      },
      {
        id: 3,
        product: 'Bluetooth Speaker',
        image: 'https://via.placeholder.com/80',
        status: 'completed',
        clicks: 520,
        impressions: 3000,
        cost: 120,
        start_date: '2023-04-10',
        end_date: '2023-05-10'
      }
    ];
    setAds(mockAds);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateAd = (e) => {
    e.preventDefault();
    if (!formData.product || !formData.budget) {
      alert('Please fill all required fields');
      return;
    }

    if (formData.payment_method === 'new' && credits < formData.budget) {
      alert('Not enough credits. Please purchase more.');
      return;
    }

    const newAd = {
      id: ads.length + 1,
      product: formData.product,
      image: 'https://via.placeholder.com/80',
      status: 'pending',
      clicks: 0,
      impressions: 0,
      cost: formData.budget,
      start_date: new Date().toISOString().split('T')[0],
      end_date: new Date(Date.now() + formData.duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    setAds([...ads, newAd]);
    
    if (formData.payment_method === 'credit') {
      setCredits(credits - formData.budget);
    }

    setShowCreateAdModal(false);
    setFormData({
      product: '',
      budget: '',
      duration: 7,
      target_location: '',
      target_audience: 'all',
      payment_method: 'credit'
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setCredits(credits + parseInt(paymentAmount));
    setShowPaymentModal(false);
    setPaymentAmount(50);
  };

  const filteredAds = ads.filter(ad => 
    activeTab === 'all' ? true : ad.status === activeTab
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Responsive breakpoints
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      {isMobile && (
        <div className="bg-white shadow-sm p-3 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 rounded-md"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-lg font-bold text-gray-800">Ads Marketing</h1>
            <div className="w-8"></div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sidebar - Hidden on mobile unless menu is open */}
          {(isMobileMenuOpen || !isMobile) && (
            <div className={`${isMobile ? 'w-full mb-4' : 'w-64 flex-shrink-0'}`}>
              <div className="bg-white p-4 rounded-lg shadow-sm sticky top-4">
                <div className="space-y-3">
                  {isMobile && (
                    <div className="flex justify-between items-center pb-2 border-b">
                      <h2 className="text-lg font-semibold">Menu</h2>
                      <button onClick={() => setIsMobileMenuOpen(false)}>
                        <X size={20} />
                      </button>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => {
                      setShowPaymentModal(true);
                      if (isMobile) setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 text-sm sm:text-base"
                  >
                    <CreditCard size={16} className="mr-2" />
                    Buy Credits
                  </button>
                  
                  <button 
                    onClick={() => {
                      setShowCreateAdModal(true);
                      if (isMobile) setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm sm:text-base"
                  >
                    <Plus size={16} className="mr-2" />
                    Create New Ad
                  </button>
                  
                  <div className="pt-3 border-t">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-medium text-gray-500">Your Credits</h3>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        ${credits} USD
                      </span>
                    </div>
                    <div className="mt-2">
                      <p className="text-2xl font-bold text-gray-900">{credits}</p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Spent: $175</span>
                        <span>Active: 2 ads</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Credits Info - Mobile Only */}
            {isMobile && !isMobileMenuOpen && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-medium text-blue-800">Available Credits</p>
                    <p className="text-lg font-bold text-blue-600">{credits}</p>
                  </div>
                  <button 
                    onClick={() => setShowPaymentModal(true)}
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded-md"
                  >
                    Add Credits
                  </button>
                </div>
              </div>
            )}

            {/* Tabs - Responsive */}
            <div className="bg-white rounded-lg shadow-sm p-2 mb-3">
              <div className="flex overflow-x-auto scrollbar-hide">
                {['all', 'active', 'pending', 'completed'].map((tab) => (
                  <button
                    key={tab}
                    className={`flex-shrink-0 px-3 py-1.5 text-xs sm:text-sm font-medium capitalize ${
                      activeTab === tab 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab} ({ads.filter(ad => tab === 'all' ? true : ad.status === tab).length})
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search ads..."
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center px-2 sm:px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-xs sm:text-sm">
                    <Filter size={14} className="mr-1 sm:mr-2" />
                    <span className="hidden xs:inline">Filters</span>
                  </button>
                  <select className="px-2 sm:px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm">
                    <option>Sort</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Highest</option>
                    <option>Lowest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Ads List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {filteredAds.length > 0 ? (
                <>
                  {/* Desktop/Tablet Table */}
                  {(isTablet || isDesktop) && (
                    <div className="hidden sm:block">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {filteredAds.map((ad) => (
                              <tr key={ad.id}>
                                <td className="px-3 py-3 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <img className="h-8 w-8 rounded mr-2" src={ad.image} alt={ad.product} />
                                    <div>
                                      <div className="text-sm font-medium text-gray-900 line-clamp-1">{ad.product}</div>
                                      <div className="text-xs text-gray-500">ID: {ad.id}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(ad.status)}`}>
                                    {ad.status}
                                  </span>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap">
                                  <div className="text-xs">
                                    <div className="flex items-center">
                                      <BarChart2 size={12} className="mr-1 text-gray-400" />
                                      <span className="font-medium">{ad.clicks}</span> clicks
                                    </div>
                                    <div className="flex items-center">
                                      <Clock size={12} className="mr-1 text-gray-400" />
                                      <span className="font-medium">{ad.impressions}</span> views
                                    </div>
                                  </div>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">
                                  ${ad.cost}
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap">
                                  <div className="text-xs">
                                    <div>{ad.start_date}</div>
                                    <div>to</div>
                                    <div>{ad.end_date}</div>
                                  </div>
                                </td>
                                <td className="px-3 py-3 whitespace-nowrap text-sm font-medium">
                                  <Link 
                                    to={`/marketing/ads/${ad.id}`} 
                                    className="text-blue-600 hover:text-blue-900 mr-2 text-xs sm:text-sm"
                                  >
                                    View
                                  </Link>
                                  {ad.status === 'pending' && (
                                    <button className="text-red-600 hover:text-red-900 text-xs sm:text-sm">
                                      Cancel
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Mobile Cards */}
                  {isMobile && (
                    <div className="sm:hidden divide-y divide-gray-200">
                      {filteredAds.map((ad) => (
                        <div key={ad.id} className="p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start">
                              <img className="h-10 w-10 rounded mr-2" src={ad.image} alt={ad.product} />
                              <div>
                                <h3 className="text-sm font-medium text-gray-900">{ad.product}</h3>
                                <span className={`mt-1 inline-block px-2 text-xs font-semibold rounded-full ${getStatusColor(ad.status)}`}>
                                  {ad.status}
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">${ad.cost}</p>
                              <p className="text-xs text-gray-500">{ad.duration} days</p>
                            </div>
                          </div>
                          
                          <div className="mt-2 pt-2 border-t grid grid-cols-2 gap-2 text-center">
                            <div className="bg-gray-50 p-1 rounded">
                              <p className="text-xs text-gray-500">Clicks</p>
                              <p className="text-sm font-medium">{ad.clicks}</p>
                            </div>
                            <div className="bg-gray-50 p-1 rounded">
                              <p className="text-xs text-gray-500">Views</p>
                              <p className="text-sm font-medium">{ad.impressions}</p>
                            </div>
                          </div>
                          
                          <div className="mt-2 flex justify-between">
                            <Link 
                              to={`/marketing/ads/${ad.id}`} 
                              className="text-xs text-blue-600 hover:text-blue-800"
                            >
                              View Details
                            </Link>
                            {ad.status === 'pending' && (
                              <button className="text-xs text-red-600 hover:text-red-800">
                                Cancel
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto h-12 w-12 text-gray-400 mb-3">
                    <AlertCircle size={24} className="mx-auto" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">No ads found</h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500">
                    {activeTab === 'all' 
                      ? "You haven't created any ads yet." 
                      : `You don't have any ${activeTab} ads.`}
                  </p>
                  <div className="mt-4">
                    <button
                      onClick={() => setShowCreateAdModal(true)}
                      className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-xs sm:text-sm rounded-md hover:bg-green-700"
                    >
                      <Plus size={14} className="mr-1" />
                      Create New Ad
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Create Ad Modal */}
      {showCreateAdModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[95vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b px-4 py-3">
              <h3 className="text-lg font-semibold">Create New Ad</h3>
              <button 
                onClick={() => setShowCreateAdModal(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleCreateAd} className="p-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Product *</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Product</option>
                    <option value="Wireless Headphones">Wireless Headphones</option>
                    <option value="Smart Watch Pro">Smart Watch Pro</option>
                    <option value="Bluetooth Speaker">Bluetooth Speaker</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Budget *</label>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      min="10"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Duration *</label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    >
                      <option value="7">7 days</option>
                      <option value="14">14 days</option>
                      <option value="30">30 days</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Target Location</label>
                  <input
                    type="text"
                    name="target_location"
                    value={formData.target_location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="All locations"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Target Audience</label>
                  <select
                    name="target_audience"
                    value={formData.target_audience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="all">All Customers</option>
                    <option value="new">New Customers</option>
                    <option value="returning">Returning Customers</option>
                  </select>
                </div>

                <div className="pt-2 border-t">
                  <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Payment Method</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="payment_method"
                        value="credit"
                        checked={formData.payment_method === 'credit'}
                        onChange={handleInputChange}
                        className="h-3 w-3 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs sm:text-sm text-gray-700">
                        Use Advertising Credits ({credits} available)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="payment_method"
                        value="new"
                        checked={formData.payment_method === 'new'}
                        onChange={handleInputChange}
                        className="h-3 w-3 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-xs sm:text-sm text-gray-700">
                        Pay with new payment
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateAdModal(false)}
                  className="px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formData.payment_method === 'credit' && parseInt(formData.budget) > credits}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-md text-white ${
                    formData.payment_method === 'credit' && parseInt(formData.budget) > credits 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  Create Ad
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm max-h-[95vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b px-4 py-3">
              <h3 className="text-lg font-semibold">Buy Credits</h3>
              <button 
                onClick={() => setShowPaymentModal(false)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handlePayment} className="p-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Amount (USD)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[10, 25, 50, 100].map((amount) => (
                      <button
                        type="button"
                        key={amount}
                        onClick={() => setPaymentAmount(amount)}
                        className={`py-2 text-xs sm:text-sm border rounded-md ${
                          paymentAmount === amount 
                            ? 'bg-blue-50 border-blue-500 text-blue-700' 
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2">
                    <input
                      type="number"
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      min="5"
                      step="5"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <select className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <option>Credit/Debit Card</option>
                    <option>PayPal</option>
                  </select>
                </div>

                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">${paymentAmount}</span>
                  </div>
                  <div className="flex justify-between mt-1 text-xs sm:text-sm">
                    <span className="text-gray-600">Credits:</span>
                    <span className="font-medium">{paymentAmount}</span>
                  </div>
                  <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between text-xs sm:text-sm">
                    <span className="font-medium">Total:</span>
                    <span className="font-medium">${paymentAmount}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowPaymentModal(false)}
                  className="px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs sm:text-sm bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
                >
                  <DollarSign size={14} className="mr-1" />
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerAdsMarketing;