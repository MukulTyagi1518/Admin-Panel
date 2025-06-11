import  { useState } from "react";

import {
    FaBold,
    FaItalic,
    FaUnderline,
    FaListUl,
    FaListOl,
    FaUndo,
    FaRedo,
    FaLink,
    FaImage,
    FaVideo,
    FaTable,
    FaCode,
} from "react-icons/fa";
import { MdFormatColorText, MdOutlineFormatClear } from "react-icons/md";
import { X } from "lucide-react";
import {
    Facebook, Twitter, Instagram, Youtube, Linkedin,
  } from "lucide-react";
import FooterInfo from "./Footer/Footerinfo";
import ContactInfo from "./Footer/Contactinfo";
import Linkwidgetone from "./Footer/Linkwidgetone";
import Footerbottom from "./Footer/Footerbottom";
import Socialwidget from "./Footer/Socialwidget";
// import Downloadapp from "./Footer/Downloadapp";
// import Paymentwidget from "./Footer/Paymentwidget";
import { Socialingo } from "./Footer/Socialingo";

const FooterWidget = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [activeLang, setActiveLang] = useState("English");

    const [footerLogo, setFooterLogo] = useState(null);
    const [aboutDesc, setAboutDesc] = useState("");
    const [playStoreLink, setPlayStoreLink] = useState("");
    const [appStoreLink, setAppStoreLink] = useState("");

    const languages = ["English", "Bangla", "Arabic", "French"];

    const handleUpdate = () => {
        console.log("Title:", title);
        console.log("Description:", description);
        console.log("Language:", activeLang);
        console.log("Footer Logo:", footerLogo);
        console.log("About Description:", aboutDesc);
        console.log("Play Store:", playStoreLink);
        console.log("App Store:", appStoreLink);
    };

    const handleFileChange = (e) => {
        setFooterLogo(e.target.files[0]);
    };

    const [fileName, setFileName] = useState('Choose file');

    const handleFileChangefile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName('Choose file');
        }
    }

    const [links, setLinks] = useState([
        { label: "Support Policy Page", url: "https://demo.activeitzone.com/ecommerce/sellerpolicy" },
        { label: "Return Policy Page", url: "https://demo.activeitzone.com/ecommerce/returnpolicy" },
        { label: "About Us", url: "https://demo.activeitzone.com/ecommerce/aboutus" },
        { label: "Privacy Policy Page", url: "https://demo.activeitzone.com/ecommerce/privacypolicy" },
        { label: "Seller Policy", url: "https://demo.activeitzone.com/ecommerce/sellerpolicy" },
        { label: "Term Conditions Page", url: "https://demo.activeitzone.com/ecommerce/terms" },
    ]);

    const handleAddLink = () => {
        setLinks([...links, { label: "", url: "" }]);
    };

    const handleRemoveLink = (index) => {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
    };

    const handleChange = (index, field, value) => {
        const updated = [...links];
        updated[index][field] = value;
        setLinks(updated);
    };

    const [showLinks, setShowLinks] = useState(true);
  const [socialLinks, setSocialLinks] = useState([
    { icon: <Facebook className="w-4 h-4" />, url: "https://facebook.com/" },
    { icon: <Twitter className="w-4 h-4" />, url: "https://twitter.com/" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/" },
    { icon: <Youtube className="w-4 h-4" />, url: "https://youtube.com/" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com/" },
  ]);

  const handleChangenew = (index, value) => {
    const updated = [...socialLinks];
    updated[index].url = value;
    setSocialLinks(updated);
  };


    return (
        <div className="bg-white min-h-screen py-6 px-4 sm:px-8">
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Footer Widget</h2>
            <div className="border-b border-gray-300 mb-4"></div>

           
            <div className="bg-white rounded-lg shadow border border-gray-200 mb-8">
                
               
               <FooterInfo title={title} setTitle={setTitle} description={description} setDescription={setDescription} handleUpdate={handleUpdate}/>
               
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ContactInfo  handleUpdate={handleUpdate} handleFileChangefile={handleFileChangefile} FaBold={FaBold} FaLink={FaLink} FaItalic={FaItalic} FaUnderline={FaUnderline} FaListUl={FaListUl} FaListOl={FaListOl} MdOutlineFormatClear={MdOutlineFormatClear} MdFormatColorText={MdFormatColorText} FaTable={FaTable} FaImage={FaImage} FaVideo={FaVideo} FaCode={FaCode} FaUndo={FaUndo} FaRedo={FaRedo}/>
                <Socialingo/>
                </div>
               
                {/* Link Widget One */}
               <Linkwidgetone handleUpdate={handleUpdate} handleChange={handleChange} handleAddLink={handleAddLink} handleRemoveLink={handleRemoveLink} links={links} X={X}/>

                <h1 className="text-lg font-semibold mb-4 ml-4 mr-4">Footer Bottom</h1>
                <div className="border-b border-gray-300 mb-4 ml-4 mr-4"></div>

                
                <Socialwidget  handleUpdate={handleUpdate} handleFileChangefile={handleFileChangefile} fileName={fileName} setShowLinks={setShowLinks} showLinks={showLinks} socialLinks={socialLinks} handleChange={handleChange} FaBold={FaBold} FaLink={FaLink} FaItalic={FaItalic} FaUnderline={FaUnderline} FaListUl={FaListUl} FaListOl={FaListOl} MdOutlineFormatClear={MdOutlineFormatClear} MdFormatColorText={MdFormatColorText} FaTable={FaTable} FaImage={FaImage} FaVideo={FaVideo} FaCode={FaCode} FaUndo={FaUndo} FaRedo={FaRedo}/>

              

                 

            </div>
            

        </div>
    );
};

export default FooterWidget;
