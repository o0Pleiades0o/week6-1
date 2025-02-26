import { useEffect, useState } from "react"
import "./App.css"
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(item => { setData(item.products); console.log(item.products); });
  }, [])

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
          <div class="container">
            <a class="navbar-brand d-md-none" href="#">
              <svg class="bi" width="24" height="24"><use xlink:href="#aperture"></use></svg>
              Aperture
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLabel">Aperture</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav flex-grow-1 justify-content-between">
                  <li class="nav-item"><a class="nav-link" href="#">
                    <svg class="bi" width="24" height="24"><use xlink:href="#aperture"></use></svg>
                  </a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Tour</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Product</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Features</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Enterprise</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">
                    <svg class="bi" width="24" height="24"><use xlink:href="#cart"></use></svg>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
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
                    <div className="d-flex justify-content-end">
                      <a href="#" className="btn btn-dark">Buy</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <footer class="container py-5">
        <div class="row">
          <div class="col-12 col-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
            <small class="d-block mb-3 text-body-secondary">© 2017–2024</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary text-decoration-none" href="#">Business</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Education</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Government</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Gaming</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="link-secondary text-decoration-none" href="#">Team</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
              <li><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
