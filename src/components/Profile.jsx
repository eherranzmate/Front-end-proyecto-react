import ActualUser from "./ActualUser";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addCharacter }  from "../../src/components/redux/actions/auth.actions"
import "../scss/profile.scss"

const Profile = () => {
  const [characterFormData, setCharacterFormData] = useState({
    name: '',
    actor: '',
    description: '',
  });

  const dispatch = useDispatch();
  
  const { handleSubmit, register } = useForm();

  const onSubmit = async () => {
    try {
      await dispatch(addCharacter(characterFormData));
      console.log('Personaje agregado con éxito');
    } catch (error) {
      console.error('Error al agregar personaje:', error);
    }
  };

  const handleChange = (e) => {
    setCharacterFormData({
      ...characterFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="profile-container">
      <h2>Área Personal</h2>
      <ActualUser/>
      
      <form onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" {...register('name')} onChange={handleChange} />

        <label htmlFor="actor">Actor:</label>
        <input type="text" id="actor" name="actor" {...register('actor')} onChange={handleChange} />

        <label htmlFor="description">Descripción:</label>
        <textarea id="description" name="description" {...register('description')} onChange={handleChange} />
        
        <button type="submit">Añadir Personaje</button>
      </form>
    </div>
  );
};

export default Profile;
