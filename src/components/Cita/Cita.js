import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {

  deleteCita = () => this.props.onRemove(this.props.cita.id);

  render() {
    const { id, owner, pet, sintomas, createdAt } = this.props.cita;
    return (
      <div className="mb-4 p-4 bg-white">
        <div><strong>id: </strong> { id }</div>
        <div><strong>Dueño: </strong> { owner }</div>
        <div><strong>Mascota: </strong> { pet }</div>
        <div><strong>Sintomas: </strong> { sintomas }</div>
        <div><strong>Fecha: </strong> { createdAt }</div>
        <div className="text-right">
          <button type="button" className="btn btn-light" onClick={ this.deleteCita }>Eliminar</button>
        </div>
      </div>
    );
  }
}

Cita.propTypes = {
  cita: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    pet: PropTypes.string.isRequired,
    sintomas: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
  onRemove: PropTypes.func.isRequired,
};

export default Cita;
