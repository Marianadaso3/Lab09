/* eslint-disable no-undef */
/* eslint-disable react/jsx-indent */

// importaciones
import React, { Component } from 'react';
import './Header.css';
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
// declarar clase
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="titulo"> Bienvenido al juego de memoria</div>
                <div>
                    <button type="button" className="boton-reiniciar" onClick={this.props.resetearPartida}>
                      Reiniciar
                    </button>
                </div>
                <div className="titulo">
                  Intentos:
                    {' '}
                    {this.props.numeroDeIntentos}
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    resetearPartida: PropTypes.func.isRequired,
    numeroDeIntentos: PropTypes.number.isRequired,
};
