import { useEffect, useState } from "react"
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(item => { setData(item.products); console.log(item.products); });
  }, [])

  return (
    <>
      <div className="container ">
      <h1 className="text-center p-4">Products</h1>
        <div className="d-flex row justify-content-center gap-4">
        {
          data.map(item => {
            return (
              <div className="card" style={{ width: '18rem' }}>
                <img src={item.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default App
