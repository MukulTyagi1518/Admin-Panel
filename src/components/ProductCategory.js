import React, { useState } from "react";
// import "./General.css";
// import { useProductContext } from "../../productContex";
import { X } from "lucide-react"
import { Link } from "react-router-dom"

const ProductCategory = () => {

//   const [description, setDescription] = useState("");
//   const [isRefundable, setIsRefundable] = useState(false);
//   const [isFeatured, setIsFeatured] = useState(false);
//   const [isTodaysDeal, setIsTodaysDeal] = useState(false);
//   const [flashTitle, setFlashTitle] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [discountType, setDiscountType] = useState("");
//   const [tax, setTax] = useState(0);
//   const [taxType, setTaxType] = useState("flat");
//   const [vat, setVat] = useState(0);
//   const [vatType, setVatType] = useState("flat");
//   const [content, setContent] = useState("");
//   const [tagInput, setTagInput] = useState("");
//   // const [showHotCategories, setShowHotCategories] = useState(false);

//   // const toggleHotCategories = () => {
//   //   setShowHotCategories(!showHotCategories);
//   // };


  const [showWomenCategories, setShowWomenCategories] = useState(false);
  const [showWomenSubCategories, setShowWomenSubCategories] = useState(false);
  const [showMenCategories, setShowMenCategories] = useState(false);
  const [showMenSubCategories, setShowMenSubCategories] = useState(false);
  const [showOutwearCategories, setShowOutwearCategories] = useState(false);
  const [showUnderwearCategories, setShowUnderwearCategories] = useState(false);
  const [showComputerCategories, setShowComputerCategories] = useState(false);
  const [showLaptopCategories, setShowLaptopCategories] = useState(false);
  const [showGamingPCCategories, setShowGamingPCCategories] = useState(false);
  const [showOfficialEquipmentCategories, setShowOfficialEquipmentCategories] = useState(false);
  const [showComponentsCategories, setShowComponentsCategories] = useState(false);
  const [ShowautoMobiles, setShowAutoMobiles] = useState(false);
  const [showRacingCars, setShowRacingCars] = useState(false);
  const [showFourSeaterSedans, setShowFourSeaterSedans] = useState(false);
  const [showSUVs, setShowSUVs] = useState(false);
  const [showMotorBikes, setShowMotorBikes] = useState(false);
  const [showKidsToys, setShowKidsToys] = useState(false);
  const [showBabyClothing, setShowBabyClothing] = useState(false);
  const [showBoysClothing, setShowBoysClothing] = useState(false);
  const [showGirlsClothing, setShowGirlsClothing] = useState(false);
  const [showShoesBags, setShowShoesBags] = useState(false);
  const [showBabyMother, setShowBabyMother] = useState(false);
  const [showSportsOutdoor, setShowSportsOutdoor] = useState(false);
  const [showSwimming, setShowSwimming] = useState(false);
  const [showCycling, setShowCycling] = useState(false);
  const [showSneakers, setShowSneakers] = useState(false);
  const [showFishing, setShowFishing] = useState(false);

  const [showJewelryWatches, setShowJewelryWatches] = useState(false);
  const [showWeddingEngagement, setShowWeddingEngagement] = useState(false);
  const [showMensWatches, setShowMensWatches] = useState(false);
  const [showWomensWatches, setShowWomensWatches] = useState(false);
  const [showFashionJewelry, setShowFashionJewelry] = useState(false);
  const [showCellphonesTabs, setShowCellphonesTabs] = useState(false);
  const [showMobilePhones, setShowMobilePhones] = useState(false);
  const [showMobilePhoneParts, setShowMobilePhoneParts] = useState(false);
  const [showMobilePhoneAccessories, setShowMobilePhoneAccessories] = useState(false);
  const [showTabletsAccessories, setShowTabletsAccessories] = useState(false);
  const [showBeautyHealthHair, setShowBeautyHealthHair] = useState(false);
  const [showMakeup, setShowMakeup] = useState(false);
  const [showSkinCare, setShowSkinCare] = useState(false);
  const [showNailArtTools, setShowNailArtTools] = useState(false);
  const [showHomeImprovementTools, setShowHomeImprovementTools] = useState(false);
  const [showIndoorLighting, setShowIndoorLighting] = useState(false);
  const [showOutdoorLighting, setShowOutdoorLighting] = useState(false);
  const [showLEDLighting, setShowLEDLighting] = useState(false);
  const [showHomeDecorationAppliance, setShowHomeDecorationAppliance] = useState(false);
  const [showHomeDecor, setShowHomeDecor] = useState(false);
  const [showHomeTextile, setShowHomeTextile] = useState(false);
  const [showFurniture, setShowFurniture] = useState(false);
  const [showToy, setShowToy] = useState(false);


  const toggleToy = () => setShowToy(!showToy);

  const toggleHomeDecorationAppliance = () => setShowHomeDecorationAppliance(!showHomeDecorationAppliance);
  const toggleHomeDecor = () => setShowHomeDecor(!showHomeDecor);
  const toggleHomeTextile = () => setShowHomeTextile(!showHomeTextile);
  const toggleFurniture = () => setShowFurniture(!showFurniture);

  // ... (अन्य फंक्शन्स) ...

  const toggleHomeImprovementTools = () => setShowHomeImprovementTools(!showHomeImprovementTools);
  const toggleIndoorLighting = () => setShowIndoorLighting(!showIndoorLighting);
  const toggleOutdoorLighting = () => setShowOutdoorLighting(!showOutdoorLighting);
  const toggleLEDLighting = () => setShowLEDLighting(!showLEDLighting);

  // ... (अन्य फंक्शन्स) ...

  const toggleBeautyHealthHair = () => setShowBeautyHealthHair(!showBeautyHealthHair);
  const toggleMakeup = () => setShowMakeup(!showMakeup);
  const toggleSkinCare = () => setShowSkinCare(!showSkinCare);
  const toggleNailArtTools = () => setShowNailArtTools(!showNailArtTools);

  // ... (अन्य फंक्शन्स) ...

  const toggleCellphonesTabs = () => setShowCellphonesTabs(!showCellphonesTabs);
  const toggleMobilePhones = () => setShowMobilePhones(!showMobilePhones);
  const toggleMobilePhoneParts = () => setShowMobilePhoneParts(!showMobilePhoneParts);
  const toggleMobilePhoneAccessories = () => setShowMobilePhoneAccessories(!showMobilePhoneAccessories);
  const toggleTabletsAccessories = () => setShowTabletsAccessories(!showTabletsAccessories);

  // ... (अन्य फंक्शन्स) ...

  const toggleJewelryWatches = () => setShowJewelryWatches(!showJewelryWatches);
  const toggleWeddingEngagement = () => setShowWeddingEngagement(!showWeddingEngagement);
  const toggleMensWatches = () => setShowMensWatches(!showMensWatches);
  const toggleWomensWatches = () => setShowWomensWatches(!showWomensWatches);
  const toggleFashionJewelry = () => setShowFashionJewelry(!showFashionJewelry);




  const toggleSportsOutdoor = () => setShowSportsOutdoor(!showSportsOutdoor);
  const toggleSwimming = () => setShowSwimming(!showSwimming);
  const toggleCycling = () => setShowCycling(!showCycling);
  const toggleSneakers = () => setShowSneakers(!showSneakers);
  const toggleFishing = () => setShowFishing(!showFishing);

  const toggleKidsToys = () => setShowKidsToys(!showKidsToys);
  const toggleBabyClothing = () => setShowBabyClothing(!showBabyClothing);
  const toggleBoysClothing = () => setShowBoysClothing(!showBoysClothing);
  const toggleGirlsClothing = () => setShowGirlsClothing(!showGirlsClothing);
  const toggleShoesBags = () => setShowShoesBags(!showShoesBags);
  const toggleBabyMother = () => setShowBabyMother(!showBabyMother);


  const toggleautomobiles = () => {
    setShowAutoMobiles(!ShowautoMobiles);
  };

  const toggleRacingCars = () => {
    setShowRacingCars(!showRacingCars);
  };

  const toggleFourSeaterSedans = () => {
    setShowFourSeaterSedans(!showFourSeaterSedans);
  };

  const toggleSUVs = () => {
    setShowSUVs(!showSUVs);
  };

  const toggleMotorBikes = () => {
    setShowMotorBikes(!showMotorBikes);
  };


  const toggleLaptopCategories = () => setShowLaptopCategories(!showLaptopCategories);
  const toggleGamingPCCategories = () => setShowGamingPCCategories(!showGamingPCCategories);
  const toggleOfficialEquipmentCategories = () => setShowOfficialEquipmentCategories(!showOfficialEquipmentCategories);
  const toggleComponentsCategories = () => setShowComponentsCategories(!showComponentsCategories);


  const toggleWomenCategories = () => {
    setShowWomenCategories(!showWomenCategories);
    setShowWomenSubCategories(false);
  };

  const toggleWomenSubCategories = () => {
    setShowWomenSubCategories(!showWomenSubCategories);
  };

  const toggleMenCategories = () => {
    setShowMenCategories(!showMenCategories);
    setShowMenSubCategories(false);
  };

  const toggleMenSubCategories = () => {
    setShowMenSubCategories(!showMenSubCategories);
  };

  //  const toggleautomobiles = () =>{
  //   setShowautoMobiles(!showautoMobiles)
  //  }


  const toggleOutwearCategories = () => setShowOutwearCategories(!showOutwearCategories);
  const toggleUnderwearCategories = () => setShowUnderwearCategories(!showUnderwearCategories);
  const toggleComputerCategories = () => {
    setShowComputerCategories(!showComputerCategories);
  };



  return (
    
   

     <div className="bg-white p-6 rounded-2xl  mt-4">
         {/* Right Side - Table-like Category Section */}
      <div className="category-container">
        <h3 className="mb-3">Product Category</h3>
        <hr className="line"></hr>
        <div className="category-list">
          <ul>
            {/* Women Clothing & Fashion */}
            <li>
              <button className="category-toggle" onClick={toggleWomenCategories}>
                {showWomenCategories ? "-" : "+"}
              </button>
              <input type="checkbox" id="womenClothing" />
              <label htmlFor="womenClothing">Women Clothing & Fashion</label>
            </li>
            {showWomenCategories && (
              <>
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleWomenSubCategories}>
                    {showWomenSubCategories ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="hotCategories" />
                  <label htmlFor="hotCategories">Hot Categories</label>
                </li>
                {showWomenSubCategories && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="partyDress" />
                      <label htmlFor="partyDress">Party Dress</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="beautyHealth" />
                      <label htmlFor="beautyHealth">Beauty & Health</label>
                    </li>
                  </>
                )}
              </>
            )}

            {/* Men Clothing & Fashion */}
            <li>
              <button className="category-toggle" onClick={toggleMenCategories}>
                {showMenCategories ? "-" : "+"}
              </button>
              <input type="checkbox" id="menClothing" />
              <label htmlFor="menClothing">Men Clothing & Fashion</label>
            </li>
            {showMenCategories && (
              <>
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleMenSubCategories}>
                    {showMenSubCategories ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="menHotCategories" />
                  <label htmlFor="menHotCategories">Hot Categories</label>
                </li>
                {showMenSubCategories && (
                  <>
                    {/* Outwear & Jackets Section */}
                    <li className="sub-category">
                      <button className="category-toggle" onClick={toggleOutwearCategories}>
                        {showOutwearCategories ? "-" : "+"}
                      </button>
                      <input type="checkbox" id="menOutwearJackets" />
                      <label htmlFor="menOutwearJackets">Outwear & Jackets</label>
                    </li>
                    {showOutwearCategories && (
                      <>
                        <li className="sub-sub-category">
                          <input type="checkbox" id="coats" />
                          <label htmlFor="coats">Coats</label>
                        </li>
                        <li className="sub-sub-category">
                          <input type="checkbox" id="denimJackets" />
                          <label htmlFor="denimJackets">Denim Jackets</label>
                        </li>
                      </>
                    )}

                    {/* Bottom */}
                    <li className="sub-sub-category">
                      <input type="checkbox" id="menBottom" />
                      <label htmlFor="menBottom">Bottom</label>
                    </li>

                    {/* Underwear & Loungewear Accessories Section */}
                    <li className="sub-category">
                      <button className="category-toggle" onClick={toggleUnderwearCategories}>
                        {showUnderwearCategories ? "-" : "+"}
                      </button>
                      <input type="checkbox" id="menUnderwearLoungewear" />
                      <label htmlFor="menUnderwearLoungewear">Underwear & Loungewear Accessories</label>
                    </li>
                    {showUnderwearCategories && (
                      <>
                        <li className="sub-sub-category">
                          <input type="checkbox" id="boxers" />
                          <label htmlFor="boxers">Boxers</label>
                        </li>
                        <li className="sub-sub-category">
                          <input type="checkbox" id="sleepwear" />
                          <label htmlFor="sleepwear">Sleepwear</label>
                        </li>
                      </>
                    )}

                    {/* Accessories & Men Formal Dress */}
                    <li className="sub-sub-category">
                      <input type="checkbox" id="menAccessories" />
                      <label htmlFor="menAccessories">Accessories</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="menFormalDress" />
                      <label htmlFor="menFormalDress">Men Formal Dress</label>
                    </li>
                  </>
                )}
              </>
            )}

            {/* Other Main Categories */}
            {/* Computer & Accessories */}
            <li>
              <button className="category-toggle" onClick={toggleComputerCategories}>
                {showComputerCategories ? "-" : "+"}
              </button>
              <input type="checkbox" id="computerAccessories" />
              <label htmlFor="computerAccessories">Computer & Accessories</label>
            </li>
            {showComputerCategories && (
              <>
                {/* Laptop & Accessories */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleLaptopCategories}>
                    {showLaptopCategories ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="laptopAccessories" />
                  <label htmlFor="laptopAccessories">Laptop & Accessories</label>
                </li>
                {showLaptopCategories && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="gamingLaptops" />
                      <label htmlFor="gamingLaptops">Gaming Laptops</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="businessLaptops" />
                      <label htmlFor="businessLaptops">Business Laptops</label>
                    </li>
                  </>
                )}

                {/* Gaming PC */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleGamingPCCategories}>
                    {showGamingPCCategories ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="gamingPC" />
                  <label htmlFor="gamingPC">Gaming PC</label>
                </li>
                {showGamingPCCategories && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="customBuilds" />
                      <label htmlFor="customBuilds">Custom Builds</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="preBuiltPCs" />
                      <label htmlFor="preBuiltPCs">Pre-built PCs</label>
                    </li>
                  </>
                )}

                {/* Official Equipment */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleOfficialEquipmentCategories}>
                    {showOfficialEquipmentCategories ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="officialEquipment" />
                  <label htmlFor="officialEquipment">Official Equipment</label>
                </li>
                {showOfficialEquipmentCategories && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="printers" />
                      <label htmlFor="printers">Printers</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="scanners" />
                      <label htmlFor="scanners">Scanners</label>
                    </li>
                  </>
                )}

                {/* Components & Peripherals */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleComponentsCategories}>
                    {showComponentsCategories ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="componentsPeripherals" />
                  <label htmlFor="componentsPeripherals">Components & Peripherals</label>
                </li>
                {showComponentsCategories && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="graphicCards" />
                      <label htmlFor="graphicCards">Graphic Cards</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="keyboards" />
                      <label htmlFor="keyboards">Keyboards</label>
                    </li>
                  </>
                )}

                {/* TV & Soundbox (No Subcategories) */}
                <li className="sub-category">
                  <input type="checkbox" id="tvSoundbox" />
                  <label htmlFor="tvSoundbox">TV & Soundbox</label>
                </li>
              </>

            )}









            {/* Computer & Accessories */}
            <li>
              <button className="category-toggle" onClick={toggleautomobiles}>
                {ShowautoMobiles ? "-" : "+"}
              </button>
              <input type="checkbox" id="automobileMotorcycle" />
              <label htmlFor="computerAccessories">Automobile & Motorcycle</label>
            </li>
            {ShowautoMobiles && (
              <>
                {/* Laptop & Accessories */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleRacingCars}>
                    {showRacingCars ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="laptopAccessories" />
                  <label htmlFor="laptopAccessories">Racing car</label>
                </li>
                {showRacingCars && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="formula1" />
                      <label htmlFor="formula1">Formula 1</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="nascar" />
                      <label htmlFor="nascar">NASCAR</label>
                    </li>
                  </>
                )}

                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleFourSeaterSedans}>
                    {showFourSeaterSedans ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="laptopAccessories" />
                  <label htmlFor="laptopAccessories">Four Seater sedan</label>
                </li>
                {showFourSeaterSedans && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="formula1" />
                      <label htmlFor="formula1">Formula 1</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="nascar" />
                      <label htmlFor="nascar">NASCAR</label>
                    </li>
                  </>
                )}





                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleSUVs}>
                    {showSUVs ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="laptopAccessories" />
                  <label htmlFor="laptopAccessories">SUV</label>
                </li>
                {showSUVs && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="formula1" />
                      <label htmlFor="formula1">Formula 1</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="nascar" />
                      <label htmlFor="nascar">NASCAR</label>
                    </li>
                  </>
                )}







                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleSUVs}>
                    {showMotorBikes ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="laptopAccessories" />
                  <label htmlFor="laptopAccessories">Motor bike</label>
                </li>
                {showMotorBikes && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="formula1" />
                      <label htmlFor="formula1">Formula 1</label>
                    </li>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="nascar" />
                      <label htmlFor="nascar">NASCAR</label>
                    </li>
                  </>
                )}







              </>

            )}




            <li>
              <button className="category-toggle" onClick={toggleKidsToys}>
                {showKidsToys ? "-" : "+"}
              </button>
              <input type="checkbox" id="kidsToys" />
              <label htmlFor="kidsToys">Kids & Toys</label>
            </li>
            {showKidsToys && (
              <>
                {/* Baby Clothing */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleBabyClothing}>
                    {showBabyClothing ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="babyClothing" />
                  <label htmlFor="babyClothing">Baby Clothing</label>
                </li>
                {showBabyClothing && (
                  <>
                    <li className="sub-sub-category">
                      <input type="checkbox" id="babyDress" />
                      <label htmlFor="babyDress">Baby Dress</label>
                    </li>
                  </>
                )}

                {/* Boys Clothing */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleBoysClothing}>
                    {showBoysClothing ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="boysClothing" />
                  <label htmlFor="boysClothing">Boys Clothing</label>
                </li>

                {/* Girls Clothing */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleGirlsClothing}>
                    {showGirlsClothing ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="girlsClothing" />
                  <label htmlFor="girlsClothing">Girls Clothing</label>
                </li>

                {/* Shoes & Bags */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleShoesBags}>
                    {showShoesBags ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="shoesBags" />
                  <label htmlFor="shoesBags">Shoes & Bags</label>
                </li>

                {/* Baby & Mother */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleBabyMother}>
                    {showBabyMother ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="babyMother" />
                  <label htmlFor="babyMother">Baby & Mother</label>
                </li>


                <li className="sub-category">
                  <input type="checkbox" id="kidsToy" />
                  <label htmlFor="kidsToy">Baby Dress</label>
                </li>

                {/* Kids & Toy */}

                <li className="sub-category">
                  <input type="checkbox" id="kidsToy" />
                  <label htmlFor="kidsToy">Kids & Toy</label>
                </li>
              </>
            )}


            <li>
              <button className="category-toggle" onClick={toggleSportsOutdoor}>
                {showSportsOutdoor ? "-" : "+"}
              </button>
              <input type="checkbox" id="sportsOutdoor" />
              <label htmlFor="sportsOutdoor">Sports & Outdoor</label>
            </li>
            {showSportsOutdoor && (
              <>
                {/* Swimming */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleSwimming}>
                    {showSwimming ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="swimming" />
                  <label htmlFor="swimming">Swimming</label>
                </li>

                {/* Cycling */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleCycling}>
                    {showCycling ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="cycling" />
                  <label htmlFor="cycling">Cycling</label>
                </li>

                {/* Sneakers */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleSneakers}>
                    {showSneakers ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="sneakers" />
                  <label htmlFor="sneakers">Sneakers</label>
                </li>

                {/* Fishing */}
                <li className="sub-category">
                  <button className="category-toggle" onClick={toggleFishing}>
                    {showFishing ? "-" : "+"}
                  </button>
                  <input type="checkbox" id="fishing" />
                  <label htmlFor="fishing">Fishing</label>
                </li>
              </>
            )}




 {/* Jewelry & Watches */}
 <li>
        <button className="category-toggle" onClick={toggleJewelryWatches}>
          {showJewelryWatches ? "-" : "+"}
        </button>
        <input type="checkbox" id="jewelryWatches" />
        <label htmlFor="jewelryWatches">Jewelry & Watches</label>
      </li>
      {showJewelryWatches && (
        <>
          {/* Wedding & Engagement */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleWeddingEngagement}>
              {showWeddingEngagement ? "-" : "+"}
            </button>
            <input type="checkbox" id="weddingEngagement" />
            <label htmlFor="weddingEngagement">Wedding & Engagement</label>
          </li>

          {/* Men's Watches */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleMensWatches}>
              {showMensWatches ? "-" : "+"}
            </button>
            <input type="checkbox" id="mensWatches" />
            <label htmlFor="mensWatches">Men's Watches</label>
          </li>

          {/* Women's Watches */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleWomensWatches}>
              {showWomensWatches ? "-" : "+"}
            </button>
            <input type="checkbox" id="womensWatches" />
            <label htmlFor="womensWatches">Women's Watches</label>
          </li>

          {/* Fashion Jewelry */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleFashionJewelry}>
              {showFashionJewelry ? "-" : "+"}
            </button>
            <input type="checkbox" id="fashionJewelry" />
            <label htmlFor="fashionJewelry">Fashion Jewelry</label>
          </li>
        </>
      )}






      {/* Cellphones & Tabs */}
      <li>
        <button className="category-toggle" onClick={toggleCellphonesTabs}>
          {showCellphonesTabs ? "-" : "+"}
        </button>
        <input type="checkbox" id="cellphonesTabs" />
        <label htmlFor="cellphonesTabs">Cellphones & Tabs</label>
      </li>
      {showCellphonesTabs && (
        <>
          {/* Mobile Phones */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleMobilePhones}>
              {showMobilePhones ? "-" : "+"}
            </button>
            <input type="checkbox" id="mobilePhones" />
            <label htmlFor="mobilePhones">Mobile Phones</label>
          </li>

          {/* Mobile Phone Parts */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleMobilePhoneParts}>
              {showMobilePhoneParts ? "-" : "+"}
            </button>
            <input type="checkbox" id="mobilePhoneParts" />
            <label htmlFor="mobilePhoneParts">Mobile Phone Parts</label>
          </li>

          {/* Mobile Phone Accessories */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleMobilePhoneAccessories}>
              {showMobilePhoneAccessories ? "-" : "+"}
            </button>
            <input type="checkbox" id="mobilePhoneAccessories" />
            <label htmlFor="mobilePhoneAccessories">Mobile Phone Accessories</label>
          </li>

          {/* Tablets & Accessories */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleTabletsAccessories}>
              {showTabletsAccessories ? "-" : "+"}
            </button>
            <input type="checkbox" id="tabletsAccessories" />
            <label htmlFor="tabletsAccessories">Tablets & Accessories</label>
          </li>
        </>
      )}



 {/* Beauty, Health & Hair */}
 <li>
        <button className="category-toggle" onClick={toggleBeautyHealthHair}>
          {showBeautyHealthHair ? "-" : "+"}
        </button>
        <input type="checkbox" id="beautyHealthHair" />
        <label htmlFor="beautyHealthHair">Beauty, Health & Hair</label>
      </li>
      {showBeautyHealthHair && (
        <>
          {/* Makeup */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleMakeup}>
              {showMakeup ? "-" : "+"}
            </button>
            <input type="checkbox" id="makeup" />
            <label htmlFor="makeup">Makeup</label>
          </li>

          {/* Skin Care */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleSkinCare}>
              {showSkinCare ? "-" : "+"}
            </button>
            <input type="checkbox" id="skinCare" />
            <label htmlFor="skinCare">Skin Care</label>
          </li>

          {/* Nail Art & Tools */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleNailArtTools}>
              {showNailArtTools ? "-" : "+"}
            </button>
            <input type="checkbox" id="nailArtTools" />
            <label htmlFor="nailArtTools">Nail Art & Tools</label>
          </li>
        </>
      )}




      {/* Home Improvement & Tools */}
      <li>
        <button className="category-toggle" onClick={toggleHomeImprovementTools}>
          {showHomeImprovementTools ? "-" : "+"}
        </button>
        <input type="checkbox" id="homeImprovementTools" />
        <label htmlFor="homeImprovementTools">Home Improvement & Tools</label>
      </li>
      {showHomeImprovementTools && (
        <>
          {/* Indoor Lighting */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleIndoorLighting}>
              {showIndoorLighting ? "-" : "+"}
            </button>
            <input type="checkbox" id="indoorLighting" />
            <label htmlFor="indoorLighting">Indoor Lighting</label>
          </li>

          {/* Outdoor Lighting */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleOutdoorLighting}>
              {showOutdoorLighting ? "-" : "+"}
            </button>
            <input type="checkbox" id="outdoorLighting" />
            <label htmlFor="outdoorLighting">Outdoor Lighting</label>
          </li>

          {/* LED Lighting */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleLEDLighting}>
              {showLEDLighting ? "-" : "+"}
            </button>
            <input type="checkbox" id="ledLighting" />
            <label htmlFor="ledLighting">LED Lighting</label>
          </li>

          {/* Tools */}
          <li className="sub-category">
            <input type="checkbox" id="tools" />
            <label htmlFor="tools">Tools</label>
          </li>
        </>
      )}







{/* Home decoration & Appliance */}
<li>
        <button className="category-toggle" onClick={toggleHomeDecorationAppliance}>
          {showHomeDecorationAppliance ? "-" : "+"}
        </button>
        <input type="checkbox" id="homeDecorationAppliance" />
        <label htmlFor="homeDecorationAppliance">Home decoration & Appliance</label>
      </li>
      {showHomeDecorationAppliance && (
        <>
          {/* Home Decor */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleHomeDecor}>
              {showHomeDecor ? "-" : "+"}
            </button>
            <input type="checkbox" id="homeDecor" />
            <label htmlFor="homeDecor">Home Decor</label>
          </li>

          {/* Home Textile */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleHomeTextile}>
              {showHomeTextile ? "-" : "+"}
            </button>
            <input type="checkbox" id="homeTextile" />
            <label htmlFor="homeTextile">Home Textile</label>
          </li>

          {/* Furniture */}
          <li className="sub-category">
            <button className="category-toggle" onClick={toggleFurniture}>
              {showFurniture ? "-" : "+"}
            </button>
            <input type="checkbox" id="furniture" />
            <label htmlFor="furniture">Furniture</label>
          </li>
        </>
      )}




<li>
        <button className="category-toggle" onClick={toggleToy}>
          {showToy ? "-" : "+"}
        </button>
        <input type="checkbox" id="toy" />
        <label htmlFor="toy">Toy</label>
      </li>
      {showToy && (
        <>
          {/* Baby Toy */}
          <li className="sub-category">
            <input type="checkbox" id="babyToy" />
            <label htmlFor="babyToy">Baby Toy</label>
          </li>
        </>
      )}


          </ul>
        </div>
      </div>
     </div>




  );
};

export default ProductCategory;