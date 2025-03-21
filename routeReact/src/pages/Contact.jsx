import { useState } from "react";
import Header from "../components/Header";
function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8000/api/contatto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Messaggio inviato!");
        setFormData({ nome: "", email: "", messaggio: "" });
     
      } else {
        alert("Errore: " + (data.message || "Verifica i dati"));
      }
    } catch (error) {
      console.error("Errore invio:", error);
      alert("Errore di rete");
    }
  };
  
  return (
    <div>
      <Header title="Contact" />
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 border shadow rounded my-5">
          <form onSubmit={handleSubmit} className="m-5">
                <div className="mb-3">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo nome"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Inserisci la tua email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Messaggio</label>
                  <textarea
                    className="form-control"
                    name="messaggio"
                    rows="5"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Scrivi il tuo messaggio..."
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Invia
                </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;