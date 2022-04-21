/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prefer-stateless-function */
// importaciones
import React, { Component } from 'react';
import Carta from './Carta';
import './Tablero.css';
import './StartApp';

// Definir clase
export default class Tablero extends Component {
    render() {
        // definir variables
        // const cartas = [1,2,3,4];
        return (
            <div className="tablero">
                {
                    // eslint-disable-next-line react/destructuring-assignment
                    this.props.baraja.map((c, index) => (
                        <Carta
                            Skey={index}
                            cono={c.icono}
                            // encargadad de pasar la carta y guardar
                            // eslint-disable-next-line react/destructuring-assignment
                            seleccionarCarta={() => this.props.seleccionarCartas(c)}
                            estaSiendoComparada={c.estaSiendoComparada}
                        />
                    ))

                }
            </div>
        );
    }
}

Tablero.propTypes = {
    baraja: PropTypes.array.isRequired,
    seleccionarCartas: PropTypes.func.isRequired,
};
