import Header from "../Header"
import Card from "../Card"
import Review from "../ReviewBlock"
import Footer from "../Footer"
import Text from "../Atoms/Text"

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <img className="spline" src="/assets/icons/spline.svg" />
        <Text type="h1">Добро пожаловать в академию!</Text>
        <Card />
        <Review />
      </div>
      <Footer />
    </div>
  )
}

export default App
