/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable space-before-function-paren */
// importaciones
import React, { Component } from 'react';
import './Carta.css';
import ReactCardFlip from 'react-card-flip';

// Definir la clase carta
export default class Carta extends Component {
    render () {
        return (
            <div className="carta" role="button" tabIndex={0} onKeyDown={this.props.seleccionarCarta} onClick={this.props.seleccionarCarta}>
                <ReactCardFlip
                    // permite voltear el resto de cartas
                    // isFlipped = {this.props.estaSiendoComparada || this.props.fueAdivinada}
                    isFlipped={this.props.estaSiendoComparada}
                    // disabled = {true}
                >
                    <div className="portada" />
                    <div className="contenido">

                        <i className={`fa ${this.props.icono} fa-5x`} />
                    </div>
                </ReactCardFlip>

            </div>
        );
    }
}

Carta.propTypes = {
    seleccionarCarta: PropTypes.func.isRequired,
    estaSiendoComparada: PropTypes.any.isRequired,
    icono: PropTypes.string.isRequired,
};
