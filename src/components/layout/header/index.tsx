import Logo from "./logo"
import Navigation from "./navigation"
import SignUpInOut from "./signUpInOut"

const Header = () => {
    return (
        <header className="shadow-sm duration-150 hover:shadow-md" >
            <div className="container xl mx-auto w-full flex justify-center items-center align-middle h-[90px]">
                <div className="basis-1/4"><Logo /></div>
                <div className="basis-3/4"><Navigation /></div>
                <div className="basis-1/5"><SignUpInOut /></div>
            </div>
        </header>
    )
}

export default Header