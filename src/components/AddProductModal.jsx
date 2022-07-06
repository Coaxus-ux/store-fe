const AddProductModal = (props) => {
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg p-2">Agregar producto</h3>
      <form>
        <input
          type="text"
          placeholder="Nombre del producto"
          className="input input-bordered input-info w-full mb-5"
        />
        <input
          type="text"
          placeholder="Descripción del producto"
          className="input input-bordered input-info w-full mb-5"
        />
        <select className="select select-bordered w-full ">
          <option defaultValue disabled>
            Selecciona una categoria
          </option>
          <option>Zapatos</option>
          <option>Ropa intima</option>
        </select>
      
      <div className="modal-action">
      <button className="btn btn-success">Agregar</button>
        <label htmlFor="my-modal-5" className="btn">
          Cancelar
        </label>
        
      </div>
      </form>
    </div>
  );
};
export default AddProductModal;
