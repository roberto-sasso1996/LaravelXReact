import { Link } from "react-router-dom";
import ROUTES from "../Route";
import Header from "../components/Header";


const products = [
  { id: 1, name: "Laptop", price: 999.99, description: "Laptop potente con 16GB RAM e SSD da 512GB" },
  { id: 2, name: "Smartphone", price: 749.50, description: "Smartphone con schermo AMOLED e fotocamera da 64MP" },
  { id: 3, name: "Tablet", price: 499.00, description: "Tablet leggero ideale per lettura e video streaming" },
  { id: 4, name: "Smartwatch", price: 199.90, description: "Orologio smart con cardiofrequenzimetro e GPS" },
  { id: 5, name: "Cuffie Wireless", price: 129.00, description: "Cuffie Bluetooth con cancellazione del rumore" },
  { id: 6, name: "Monitor 27\"", price: 299.99, description: "Monitor IPS 4K UHD da 27 pollici" },
  { id: 7, name: "Tastiera Meccanica", price: 89.99, description: "Tastiera RGB con switch blu clicky" },
  { id: 8, name: "Mouse Gaming", price: 59.99, description: "Mouse ergonomico con sensore ad alta precisione" },
  { id: 9, name: "Hard Disk Esterno", price: 109.99, description: "HDD da 2TB USB 3.0 per backup veloci" },
  { id: 10, name: "Router WiFi 6", price: 149.99, description: "Router dual-band con supporto WiFi 6" },
  { id: 11, name: "Webcam Full HD", price: 79.90, description: "Webcam 1080p ideale per videochiamate" },
  { id: 12, name: "Stampante Laser", price: 179.00, description: "Stampante monocromatica veloce ed efficiente" },
  { id: 13, name: "Altoparlante Bluetooth", price: 69.99, description: "Speaker portatile con bassi potenti" },
  { id: 14, name: "Power Bank 20000mAh", price: 39.95, description: "Batteria portatile per smartphone e tablet" },
  { id: 15, name: "SSD NVMe 1TB", price: 129.99, description: "SSD ultraveloce per gaming e produttivit\u00e0" }
];

function Products() {
  return (
    <div>
      <Header title="Lista Prodotti" />
      <div className="container my-5">
        <div className="row justify-content-center">
          {products.map((product) => (
            <div className="col-12 col-md-3 my-2" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}$</p>
                    <Link to={ROUTES.PRODUCTSDETAIL(product.id)} state={{ product }} className="btn btn-primary">Dettaglio</Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Products;