import Header from "./components/layout/header"
import HomePage from "./pages/home"

const App = () => {
    return (
        <main style={{ direction: "rtl" }} className="relative">
            <Header />
            <HomePage />
        </main>
    )
}

export default App