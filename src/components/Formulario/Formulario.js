import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

class Formulario extends Component {

  state = {
    error: false
  };

  pet = React.createRef();
  owner = React.createRef();
  createdAt = React.createRef();
  sintomas = React.createRef();

  onNewRecord = e => {
    e.preventDefault();
    if (!this.pet.current.value || !this.owner.current.value || !this.createdAt.current.value || !this.sintomas.current.value) {
      return this.setState({ error: true });
    }
    this.props.onAdding({
      id: uuid(),
      pet: this.pet.current.value,
      owner: this.owner.current.value,
      createdAt: this.createdAt.current.value,
      sintomas: this.sintomas.current.value
    });
    this.setState({ error: false });
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <h4 className="mb-3 font-weight-normal text-center">Agregar las citas aqui</h4>
        {
          this.state.error ?
            <div className="alert alert-danger" role="alert">
              Todos los campos son requeridos *
            </div> : ''
        }
        <form onSubmit={ this.onNewRecord }>
          <div className="form-group">
            <label htmlFor="pet">Nombre Mascota</label>
            <input type="text" className="form-control" id="pet" ref={ this.pet } />
          </div>
          <div className="form-group">
            <label htmlFor="owner">Nombre Dueño</label>
            <input type="text" className="form-control" id="owner" ref={ this.owner } />
          </div>
          <div className="form-group">
            <label htmlFor="createdAt">Fecha</label>
            <input type="date" className="form-control" id="createdAt" ref={ this.createdAt } />
          </div>
          <div className="form-group">
            <label htmlFor="sintomas">Sintomas</label>
            <textarea className="form-control" id="sintomas" rows="10" ref={ this.sintomas } />
          </div>
          <div className="text-right">
            <button type="submit" className="btn btn-primary btn-block">Agregar</button>
          </div>
        </form>
      </div>
    );
  }
}

Formulario.propTypes = {
  onAdding: PropTypes.func.isRequired,
};

export default Formulario;
