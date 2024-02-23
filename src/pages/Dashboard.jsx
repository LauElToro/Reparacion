import React, {useState} from 'react';
import "./perfil.css";
import voyage from "../imagenes/angeles.jpg";
import voyage2 from "../imagenes/img-hotel-individual.jpg"; 
import voyage3 from "../imagenes/explore.jpg"; 

export const Dashboard = () => {
    const [serviceData, setServiceData] = useState({
        image: null,
        availableDates: '',
        country: '',
        price: ''
      });
    
      const handleChange = e => {
        setServiceData({
          ...serviceData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleImageChange = e => {
        setServiceData({
          ...serviceData,
          image: e.target.files[0]
        });
      };
    
      const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('image', serviceData.image);
        formData.append('availableDates', serviceData.availableDates);
        formData.append('country', serviceData.country);
        formData.append('price', serviceData.price);
        formData.append('section', section);
        try {
          const response = await axios.post('http://localhost:9000/api/services', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log(response.data);
          // Manejar la respuesta del servidor aquí
        } catch (error) {
          console.error('Error submitting service:', error);
        }
      };
  return (
    <section className="seccion-perfil-usuario">
      <div className="perfil-usuario-body">
        <div className="perfil-usuario-bio">
          <h3 className="titulo">Dashboard</h3>
          <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Sección LOCATION */}
        <div className="perfil-usuario-footer">
          <input type="file" onChange={handleImageChange} />
          <input type="text" name="availableDates" value={serviceData.availableDates} onChange={handleChange} placeholder="Available Dates" />
          <input type="text" name="country" value={serviceData.country} onChange={handleChange} placeholder="Country" />
          <input type="text" name="price" value={serviceData.price} onChange={handleChange} placeholder="Price" />
          <button type="button" className="boton-portada" onClick={() => handleSubmit('location')}>
            <i className="fas fa-image"></i> Publish
          </button>
        </div>

        {/* Sección HOTELS */}
        <div className="perfil-usuario-footer">
          <input type="file" onChange={handleImageChange} />
          <input type="text" name="availableDates" value={serviceData.availableDates} onChange={handleChange} placeholder="Available Dates" />
          <input type="text" name="country" value={serviceData.country} onChange={handleChange} placeholder="Country" />
          <input type="text" name="price" value={serviceData.price} onChange={handleChange} placeholder="Price" />
          <button type="button" className="boton-portada" onClick={() => handleSubmit('hotels')}>
            <i className="fas fa-image"></i> Publish
          </button>
        </div>

        {/* Sección EVENTS */}
        <div className="perfil-usuario-footer">
          <input type="file" onChange={handleImageChange} />
          <input type="text" name="availableDates" value={serviceData.availableDates} onChange={handleChange} placeholder="Available Dates" />
          <input type="text" name="country" value={serviceData.country} onChange={handleChange} placeholder="Country" />
          <input type="text" name="price" value={serviceData.price} onChange={handleChange} placeholder="Price" />
          <button type="button" className="boton-portada" onClick={() => handleSubmit('events')}>
            <i className="fas fa-image"></i> Publish
          </button>
        </div>

        {/* Sección BLOG */}
        <div className="perfil-usuario-footer">
          <input type="file" onChange={handleImageChange} />
          <input type="text" name="availableDates" value={serviceData.availableDates} onChange={handleChange} placeholder="Available Dates" />
          <input type="text" name="country" value={serviceData.country} onChange={handleChange} placeholder="Country" />
          <input type="text" name="price" value={serviceData.price} onChange={handleChange} placeholder="Price" />
          <button type="button" className="boton-portada" onClick={() => handleSubmit('blog')}>
            <i className="fas fa-image"></i> Publish
          </button>
        </div>
      </div>
    </section>
  )
}




