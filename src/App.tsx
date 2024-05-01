import Header from "./components/layout/header"
import HomePage from "./pages/home"

const App = () => {
    return (
        <main style={{ direction: "rtl" }}>
            <Header />
            <HomePage />
        </main>
    )
}

export default App