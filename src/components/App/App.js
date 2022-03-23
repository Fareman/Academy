import Header from "../Header"
import Card from "../Card"
import Review from "../ReviewBlock"
import Footer from "../Footer"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <img className="spline" src="/assets/icons/spline.svg" />
      <h1>Добро пожаловать в академию!</h1>
      <Card />
      <Review />
      <Footer />
    </div>
  )
}

export default App
