import "./addNewProduct.scss"
import { Link, Outlet } from "react-router-dom"
export default function AddNewProductMain() {
    return (
        <div className="addNewProductMain">
            <div className="addNewProductBox">
               <div className="addNewProductMenu">
                  <label>Add Product</label>
                  <div className="divider"></div>
                    <Link to='/products/create/general'>
                        <p className="addNewProductMenuItem">
                            General
                        </p>
                    </Link>
                    <Link to='/products/create/add'>
                        <p className="addNewProductMenuItem">
                            File & Media
                        </p>
                    </Link>

                    <Link to='/products/create/price-stock'>
                        <p className="addNewProductMenuItem">
                            Price & Stock
                        </p>
                    </Link>
                    <Link to='/products/create/seo'>
                        <p className="addNewProductMenuItem">
                            SEO
                        </p>
                    </Link>
                    <Link to='/products/create/shipping'>
                        <p className="addNewProductMenuItem">
                            Shipping
                        </p>
                    </Link>
                    <Link to='/products/create/warranty'>
                        <p className="addNewProductMenuItem">
                            Warranty
                        </p>
                    </Link>
                    <Link to='/products/create/frequently-bought'>
                        <p className="addNewProductMenuItem">
                            Frequently Bought
                        </p>
                    </Link>
                </div>

                <div className="addNewProductOutlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}