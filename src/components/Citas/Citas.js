import React, { Component } from 'react';
import Cita from '../Cita/Cita';
import PropTypes from 'prop-types';

class Citas extends Component {
  deleteCita = id => this.props.onRemove(id);

  render() {
    const title = Object.keys(this.props.citas).length === 0 ? 'No tienes Citas': 'Administra tus citas';
    return (
      <div>
        <h4 className="mb-3 font-weight-normal text-center">{ title }</h4>
        {
          Object.keys(this.props.citas).map(key => <Cita key={ key } cita={ this.props.citas[key] } onRemove={ this.deleteCita } />)
        }
      </div>
    );
  }
}

Citas.propTypes = {
  citas: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Citas;
