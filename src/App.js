import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Slider from './components/Slider/slider';

const App = () => {
  const [top10, setTop10] = useState([]);

  const fetchData = async () => {
    const result = await axios.get('https://api.jikan.moe/v4/top/anime');
    setTop10(result.data.data.slice(0, 10));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Slider slidesToShow={5} slides={top10} />
      <Footer />
    </>
  );
};

export default App;
