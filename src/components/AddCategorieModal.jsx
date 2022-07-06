const AddCategorieModal = ({}) => {
    const OnHandleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className="modal-box">
          <h3 className="font-bold text-lg p-2">Agregar categoria</h3>
          <form 
            method="POST"
            onChange={OnHandleChange}
            >
            <input
              type="text"
              placeholder="Nombre de la categoria"
              className="input input-bordered input-info w-full mb-5"
            />
            <input
              type="text"
              placeholder="Descripción de la categoria"
              className="input input-bordered input-info w-full"
            />
            <div className="modal-action">
              <button className="btn btn-success">Agregar</button>
              <label htmlFor="my-modal-6" className="btn btn-error">
                Cancelar
              </label>
            </div>
          </form>
        </div>
    )
}
export default AddCategorieModal;