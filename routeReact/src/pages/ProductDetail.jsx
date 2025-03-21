import { useLocation , useParams } from "react-router-dom";
import Header from "../components/Header";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div>
      <Header title="Dettaglio" />
      {/* <p>ID prodotto: {id}</p> */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
              <h1>Dettaglio Prodotto</h1>
              <h2>{product.name}</h2>
              <p><strong>Prezzo:</strong> {product.price}$</p>
              <p><strong>Descrizione:</strong> {product.description}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default ProductDetail;