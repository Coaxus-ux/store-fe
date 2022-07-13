import {useNavigate} from 'react-router-dom';
const SuccessfulModal = () => {
  const navigation = useNavigate();
  const onHandleClick = () => {
    navigation('/');
  }
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">Se ha registrado con exito</h3>
      <p className="py-4">
        Ahora puedes disfrutar de todos los beneficios de nuestra plataforma
      </p>
      <div className="modal-action">
        <label htmlFor="my-modal" className="btn">
          <a
            onClick={onHandleClick}
          >
          Iniciar session
          </a>
          
        </label>
      </div>
    </div>
  );
};
export default SuccessfulModal;