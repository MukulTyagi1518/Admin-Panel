import { Delete, Edit, Trash } from "lucide-react"
import "./preOrderFaq.scss"
import Switch from "../../Switch"

export default function PreOrderFaq() {

    const faqs = [
        {
            id: 1,
            question: "How can I contact customer support ?"
        },
        {
            id: 2,
            question: "How can I contact customer support ?"
        },
        {
            id: 3,
            question: "How can I contact customer support ?"
        },
        {
            id: 4,
            question: "How can I contact customer support ?"
        },
        {
            id: 5,
            question: "How can I contact customer support ?"
        },
        {
            id: 6,
            question: "How can I contact customer support ?"
        },
        {
            id: 7,
            question: "How can I contact customer support ?"
        },
        {
            id: 8,
            question: "How can I contact customer support ?"
        },
        {
            id: 9,
            question: "How can I contact customer support ?"
        },
        {
            id: 10,
            question: "How can I contact customer support ?"
        }
    ]


    return (
        <div className="PreOrderFaq ma10">
            <div className="preOrderFaqBox">
                <div className="preOrderFaqLeft">
                    <div className="preOrderLeftUpper">
                        <p className="allFaq">All FAQ</p>
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


                                        <th >Question</th>


                                        <th >Status</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {faqs.map((n) => (
                                        <tr key={n.id}>
                                            <td>
                                                {n.id}
                                            </td>

                                            <td>{n.question}</td>

                                            <td >
                                                <div className="toggle-item flex flex-row gap-[.3cm]">

                                                    {/* <label className="switch">
                                                        <input
                                                            type="checkbox"
                                                        />
                                                        <span className="slider"></span>
                                                    </label> */}
                                                    <Switch/>
                                                </div>
                                            </td>

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


                <div className="preOrderFaqRight">
                    <div className="preOrderFaqRightHead">
                        <p className="allFaq">Add new FAQ</p>
                    </div>

                    <div className="faqForm">
                        <input type="text" placeholder="Enter question" className="faqInp" />
                        <textarea type="text" placeholder="Enter answer" className="faqTxt" />
                        <div className="inpSubBox">
                            <input type="submit" value="Save" className="inpSub" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}