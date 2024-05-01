import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBuilding, faAddressCard } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {

    return (
        <nav>
            <ul className="flex flex-row max-md:hidden">
                <li className="px-2">
                    <Link className="nav-ul-link" to={"/"}>
                        <FontAwesomeIcon className="pl-1" icon={faHome} />
                        صفحه اصلی
                    </Link>
                </li>
                <li>
                    <Link className="nav-ul-link" to={"/about"}>
                        <FontAwesomeIcon className="pl-1" icon={faAddressCard} />
                        درباره ما
                    </Link>
                </li>
                <li className="">
                    <Link className="nav-ul-link" to={"/properties"}>
                        <FontAwesomeIcon className="pl-1" icon={faBuilding} />
                        نمایش املاک
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation