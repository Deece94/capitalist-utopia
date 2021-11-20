import Header from '../components/header';
import Footer from '../components/footer';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Welcome</h1>
        <p>Please login</p>
      </div>
      <Footer />
    </div>
  )
}

export default Home;