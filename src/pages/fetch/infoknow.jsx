import React, { useState } from 'react';

function InfoKnowForm() {
  const [infoCancelPolicy, setInfoCancelPolicy] = useState('');
  const [infoSpecial, setInfoSpecial] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      InfoCancelPolicy: infoCancelPolicy,
      InfoSpecial: infoSpecial
    };

    try {
      const response = await fetch('/infoKnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la información a la tabla infoKnow');
      }

      console.log('Información insertada correctamente en la tabla infoKnow');
      // Aquí puedes manejar cualquier lógica adicional después de enviar los datos correctamente

    } catch (error) {
      console.error('Error al enviar la información a la tabla infoKnow:', error);
      // Aquí puedes manejar el error de alguna manera, como mostrando un mensaje al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Política de Cancelación:
        <textarea value={infoCancelPolicy} onChange={(e) => setInfoCancelPolicy(e.target.value)} />
      </label>
      <br />
      <label>
        Información Especial:
        <textarea value={infoSpecial} onChange={(e) => setInfoSpecial(e.target.value)} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default InfoKnowForm;
