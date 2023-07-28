import img1 from '../assets/tech1.jpg';
import { toast } from 'react-hot-toast';
const Home = () => {
  // const img1 = 'https://r.search.yahoo.com/_ylt=Awr93P5P88Fk3ucaLuKJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzJlNDgwYzI5MzY0MTZlNmUzMmU3YTM0OTQ1MmFlNGVlBGdwb3MDMjQEaXQDYmluZw--/RV=2/RE=1690461135/RO=11/RU=https%3a%2f%2fwww.notebookcheck.net%2fApple-MacBook-Pro-13-2020-Laptop-Review-The-entry-level-Pro-also-gets-the-M1-performance-boost.510883.0.html/RK=2/RS=2r5JAdsghJrHg1AP7EUXDN4nhrk-';

  // const img2 = 'https://r.search.yahoo.com/_ylt=AwrO8iTV88FkZowcEYuJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2I0YjQ3ZDc1ZDJmYzIyMjVjNjBlNTQ2NDY5NWI4YjAwBGdwb3MDMTMEaXQDYmluZw--/RV=2/RE=1690461269/RO=11/RU=https%3a%2f%2fwww.tennisnuts.com%2fadidas-womens-climacool-ride-1141725.html/RK=2/RS=2nYgM7Gj_2hE1moEhVj.fj7EDPw-';
  const Productlist = [
    { 
      name: "Mac Book", 
      price: 700, 
      // imgSrc: img1,
      imgSrc: img1, 
      id: "abc" 
    }, 
    { 
      name: "Shoes", 
      price: 300, 
      imgSrc: img1, 
      id: "jpl" 
    }
  ];
  const addToCartHandler = (options) => {
    console.log(options);
    toast.success('Added to cart.');
  }
  return (
    <div className="home">
      {
        Productlist.map((i) => {
          return (
            
            <>
            <ProductCard
              key={i.id}
              name={i.name}
              price={i.price}
              id={i.id}
              handler={addToCartHandler} />
              {/* <img src={img1} alt="" /> */}
              </>
              
          );
        })
      }
    </div>
  )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={img1} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
  </div>
);
export default Home