import React, { useState, useEffect } from 'react';
import "./perfil.css";

export const Dashboard = () => {
  const [blogImage, setBlogImage] = useState(null);
  const [blogImageName, setBlogImageName] = useState('');
  const [blogData, setBlogData] = useState({
    availableDates: '',
    country: '',
    price: ''
  });
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [editingProducto, setEditingProducto] = useState(null);
  const [editingProductImage, setEditingProductImage] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null); 
  // Función para manejar el cambio de imagen
  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setBlogImage(image);
    setBlogImageName(image.name);
  };

  // Función para manejar el cambio en los campos de texto
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({
      ...blogData,
      [name]: value
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('img', blogImage);
      formData.append('titulo', blogData.availableDates);
      formData.append('descripcion', blogData.country);
      formData.append('price', blogData.price);

      const response = await fetch('https://voyagelbackend.onrender.com/imagen', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Producto publicado correctamente');
        // Lógica adicional después de publicar el producto, si es necesario
      } else {
        console.error('Error al publicar el producto:', response.statusText);
      }
    } catch (error) {
      console.error('Error al publicar el producto:', error);
    }
  };

  // Función para obtener los productos desde la API
  useEffect(() => {
    const getProductos = async () => {
      try {
        const response = await fetch('https://voyagelbackend.onrender.com/productos');
        if (response.ok) {
          const data = await response.json();
          setProductos(data);
        } else {
          console.error('Error al obtener los productos:', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    getProductos();
  }, []);

  // Función para filtrar productos
  const filtrarProductos = (producto) => {
    return producto.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
           producto.id.toString().includes(filtro) ||
           producto.price.toString().includes(filtro);
  };

  // Función para manejar la edición de un producto
  const handleEdit = (producto) => {
    setEditingProducto(producto);
    setEditingProductId(producto.id); // Almacenar el ID del producto en edición
    setBlogData({
      availableDates: producto.titulo,
      country: producto.descripcion,
      price: producto.price
    });
    setEditingProductImage(producto.img); // Cargar la imagen existente del producto
  };
  
 // Función para manejar la edición de un producto
 const handleEditSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append('newImage', blogImage); // Corrige el nombre del campo aquí
    formData.append('titulo', blogData.availableDates);
    formData.append('descripcion', blogData.country);
    formData.append('price', blogData.price);

    const response = await fetch(`https://voyagelbackend.onrender.com/productos/${editingProductId}`, {
      method: 'PUT',
      body: formData
    });

    if (response.ok) {
      console.log('Producto editado correctamente');
      // Actualizar la lista de productos después de la edición
      getProductos();
      // Limpiar el formulario de edición y el estado de edición del producto
      setEditingProducto(null);
      setEditingProductId(null); // Limpiar el ID del producto en edición
      setBlogData({
        availableDates: '',
        country: '',
        price: ''
      });
      setBlogImage(null);
      setBlogImageName('');
    } else {
      console.error('Error al editar el producto:', response.statusText);
    }
  } catch (error) {
    console.error('Error al editar el producto:', error);
  }
};



  return (
    <section className="seccion-perfil-usuario">
      <div className="perfil-usuario-body">
        <div className="perfil-usuario-bio">
          <h3 className="titulo">Dashboard</h3>
          <p className="texto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Sección BLOG */}
        <div className="perfil-usuario-footer">
          <input type="file" onChange={handleImageChange} />
          {blogImageName && <p>Selected Image: {blogImageName}</p>}
          <input type="text" name="availableDates" value={blogData.availableDates} onChange={handleChange} placeholder="Available Dates" />
          <input type="text" name="country" value={blogData.country} onChange={handleChange} placeholder="Country" />
          <input type="text" name="price" value={blogData.price} onChange={handleChange} placeholder="Price" />
          <button type="button" className="boton-portada" onClick={handleSubmit}>
            <i className="fas fa-image"></i> Publish
          </button>
        </div>
      </div>

      {/* Filtro de productos */}
      <input className='w-50' type="text" placeholder="Buscar por título, ID o precio" value={filtro} onChange={(e) => setFiltro(e.target.value)} />

      {/* Mostrar productos filtrados */}
      <div className="productos-container">
        <h2>Productos</h2>
        {productos.filter(filtrarProductos).map(producto => (
          <div key={producto.id} className="producto">
            <img src={`${import.meta.env.VITE_REACT_APP_IMAGES_PATH}${producto.img}`} />
            <h3>{producto.titulo}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.price}</p>
            <button onClick={() => handleEdit(producto)}>Editar</button>
          </div>
        ))}
      </div>

      {/* Formulario de edición */}
      {editingProducto && (
            <div className='formulario-edicion'>
              <h3>Editar Producto</h3>
              {editingProductImage && <img src={`${import.meta.env.VITE_REACT_APP_IMAGES_PATH}${editingProductImage}`} alt="Product" />}
              <input type="file" onChange={handleImageChange} />
              {blogImageName && <p>Selected Image: {blogImageName}</p>}
              <input type="text" name="availableDates" value={blogData.availableDates} onChange={handleChange} placeholder="Available Dates" />
              <input type="text" name="country" value={blogData.country} onChange={handleChange} placeholder="Country" />
              <input type="text" name="price" value={blogData.price} onChange={handleChange} placeholder="Price" />
              <button type="button" onClick={handleEditSubmit}>Guardar Cambios</button>
            </div>
          )}
    </section>
  );
};
