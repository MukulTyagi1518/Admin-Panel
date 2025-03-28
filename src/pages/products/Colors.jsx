import { Delete, Edit, Trash } from "lucide-react"
import "./Colors.css"
import { MdOutlineSettings } from "react-icons/md"

export default function PreOrderFaq() {

    const faqs = [
        {
            id: 1,
            name: "MistyRose",

        },
        {
            id: 2,
            name: "Ivory",

        },
        {
            id: 3,
            name: "Silver",

        },
        {
            id: 4,
            name: "DarkGray",

        },
        {
            id: 5,
            name: "LightGrey",

        },
    ]
     return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox">
                <div className="preOrderFaqLeft">
                    <div className="preOrderLeftUpper">
                        <p className="allFaq">All Colors</p>
                        <input type="text" placeholder="Type to search...." className="searchFaq" />
                    </div>
                    <div className="preOrderLeftLower">
                        <div className="table-container faqTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>


                                        <th >Name</th>



                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faqs.map((n) => (
                                        <tr key={n.id}>
                                            <td>
                                                {n.id}
                                            </td>

                                            <td>{n.name}</td>




                                            <td>
                                                <div className="actions">

                                                    <div className="action">
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

                <div className="prerow">
                    <div className="preOrderFaqRight-new">

                        <div className="preOrderFaqRightHead">
                            <p className="allFaq">Add new Color</p>
                        </div>

                        <div className="faqForm">
                            <label>Name</label>
                            <input type="text" placeholder="Enter question" className="faqInp" />

                            <label>Color Code</label>
                            <input type="text" placeholder="Enter Code" className="faqInp" />

                            <div className="inpSubBox">
                                <input type="submit" value="Save" className="inpSub" />
                            </div>
                        </div>
                    </div>
                    <div className="preOrderFaqRight-new">

                        <div className="preOrderFaqRightHead">
                            <p className="allFaq">Color  filter activation</p>
                        </div>

                        <div className="faqForm">
                            <div className="toggle-item">

                                <label className="switch">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}