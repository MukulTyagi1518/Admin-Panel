import { Delete, Edit, Trash } from "lucide-react";
import "./Attribute.css";
import { MdOutlineSettings } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function PreOrderFaq() {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/editattribute/`); // Pass the ID in the URL if needed
  };

  const faqs = [
    { id: 1, name: "Liter", values: "1 Ltr 2 Ltr 5 Ltr 10 Ltr" },
    { id: 2, name: "Wheel" },
    { id: 3, name: "Sleeve", values: "Bell sleeves,Cap sleeves,Raglan sleeves,Flutter sleeves" },
    { id: 4, name: "Fabric", values: "Chenille,Cotton,Georgette,Crêpe,Canvas" },
    { id: 5, name: "Size", values: "M  L XL XXL S 64GB 128GB 512GB 1TB 3/32 GB 4/64 GB 4/128 GB 8/256 GB 6/128 GB" },
  ]; 
  
  const handlsetting = (e) => {
    e.preventDefault();
    navigate("/products/settings");
};


  return (
    <div className="PreOrderFaq ma10">
      <div className="preOrderFaqBox-attribute">
        <div className="preOrderFaqLeft">
          <div className="preOrderLeftUpper">
            <p className="allFaq">Attribute</p>
          </div>
          <div className="preOrderLeftLower">
            <div className="table-container faqTable">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Values</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {faqs.map((n) => (
                    <tr key={n.id}>
                      <td>{n.id}</td>
                      <td>{n.name}</td>
                      <td>{n.values || "N/A"}</td>
                      <td>
                        <div className="flex flex-row gap-[.3cm]">
                          <div className="action">
                            <MdOutlineSettings color="blue" size={18} onClick={handlsetting}/>
                          </div>
                          <div className="action" onClick={() => handleEdit(n.id)}>
                            <Edit color="blue" size={18} />
                          </div>
                          <div className="action">
                            <Trash color="blue" size={18} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="preOrderFaqRight-at">
          <div className="preOrderFaqRightHead">
            <p className="allFaq">Add new FAQ</p>
          </div>

          <div className="faqForm-at">
            <label>Name</label>
            <input type="text" placeholder="Enter question" className="faqInp" />
            <div className="inpSubBox-at">
              <input type="submit" value="Save" className="inpSub-at" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
