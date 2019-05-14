import React, { Component } from 'react'
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Citas from './components/Citas/Citas';

export default class App extends Component {

  state = {
    citas: []
  };

  componentDidMount() {
    const data = localStorage.getItem('citas');
    if (data) {
      this.setState({ citas: JSON.parse(data) });
    }
  }

  deleteCitaById = id => {
    const citas = this.state.citas.filter(f => f.id !== id);
    localStorage.setItem('citas', JSON.stringify(citas));
    this.setState({ citas })
  };

  onAdding = cita => {
    const citas = [...this.state.citas, cita];
    localStorage.setItem('citas', JSON.stringify(citas));
    this.setState({ citas });
  };

  render() {
    return (
      <div>
        <Header title="Administrador de Pacientes Veterinaria" />
        <div className="container">
          <div className="row py-4">
            <div className="col-lg-6">
              <Formulario onAdding={ this.onAdding } />
            </div>
            <div className="col-lg-6">
              <Citas citas={ this.state.citas } onRemove={ this.deleteCitaById }/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
