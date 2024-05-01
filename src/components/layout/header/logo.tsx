import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrave } from "@fortawesome/free-brands-svg-icons"

const Logo = () => {
    return (
        <div className="logo">
            <Link to={"/"}>
                <div>
                    <FontAwesomeIcon icon={faBrave} className="text-2xl" />
                    <div className="inline-block px-2 text-2xl font-bold">املاک مهندسان</div>
                </div>
                <div className="text-gray-600 text-sm font-light">
                    خرید و فروش / رهن و اجاره ملک
                </div>
            </Link>

        </div>
    )
}

export default Logo