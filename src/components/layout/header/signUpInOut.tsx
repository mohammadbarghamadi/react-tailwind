import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignIn } from "@fortawesome/free-solid-svg-icons"

const SignUpInOut = () => {
    return (
        <div className="primary-btn">
            <Link to={"/signin"} className="px-6 ">
                <FontAwesomeIcon icon={faSignIn} className="pl-2"/>
                <span>ثبت نام / ورود</span>
            </Link>

        </div>
    )
}

export default SignUpInOut