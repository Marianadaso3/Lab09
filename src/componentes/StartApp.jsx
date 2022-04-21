/* eslint-disable react/jsx-indent-props */
/* eslint-disable import/no-cycle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
// importaciones
import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import './StartApp.css';
import construirBaraja from '../utils/construirBaraja';

// var const
const getEstadoInicial = () => ({
    baraja: construirBaraja(),
    primeraCarta: null,
    estaComparando: false,
    numeroDeIntentos: 0,
    parejasAdivinadas: 0,
});

// definir clase
class StartApp extends Component {
    // definir constructor para manejo de estados
    /* eslint-disable import/extensions */
    constructor(props) {
        super(props);
        this.state = getEstadoInicial();
    }
    /* eslint-disable react/no-access-state-in-setstate */

    cambiarEstadoCarta(num, id, estado) {
        const carta = this.state.baraja.filter((c) => c.id === id && c.num === num);
        carta[0].estaSiendoComparada = estado;
        return carta[0];
    }

    // Metodo para ejecutar laS CONDICIONES para comparacion de cartas
    seleccionarCarta(carta) {
    // Mostrar la carta
    /* eslint-disable react/destructuring-assignment */
        this.cambiarEstadoCarta(carta.num, carta.id, true);

        if (!this.state.estaComparando) {
            // Selecciono primera carta
            this.setState((s) => ({ ...s, estaComparando: true }));

            this.setState((s) => ({
                ...s,
                primeraCarta: carta,
            }));
        } else {
            this.compararPareja(this.state.primeraCarta, carta);

            this.setState((s) => ({ ...s, estaComparando: false }));
        }
    }

    compararPareja(primeraCarta, segundaCarta) {
    // delay para ver las cartas
        setTimeout(() => {
            // const [primeraCarta, segundaCarta] = parejaSeleccionada;
            // let baraja = this.state.baraja;

            // condicion para ver si son iguales
            if (primeraCarta.id === segundaCarta.id) {
            // console.log('Has adivinado');

                this.setState({
                    ...this.state,
                    parejasAdivinadas: this.state.parejasAdivinadas + 1,
                });
            } else {
                // console.log('No has adivinado');
                this.cambiarEstadoCarta(primeraCarta.num, primeraCarta.id, false);
                this.cambiarEstadoCarta(segundaCarta.num, segundaCarta.id, false);
            }

            // verificar si gano
            // this.verificarSiHayGanador(baraja);
            // actualizar estado
            this.setState({
                ...this.state,
                numeroDeIntentos: this.state.numeroDeIntentos + 1,
            });

            this.verificarSiHayGanador();
        }, 1000);
    }

    // funcion para comrprobar si gano
    verificarSiHayGanador() {
        if (this.state.parejasAdivinadas === 10) {
            // eslint-disable-next-line no-alert
            alert(`Ganaste en ${this.state.numeroDeIntentos} intentos!`);
        }
    }

    // Recetear estado para empezar
    resetearPartida() {
        this.setState(getEstadoInicial());
    }

    render() {
        return (
            <div className="StartApp'">
                <Header
                    numeroDeIntentos={this.state.numeroDeIntentos}
                    resetearPartida={() => this.resetearPartida()}
                />
                <Tablero
                    // propiedad
                    baraja={this.state.baraja}
                    // funcionamiento de emparejamiento
                    parejaSeleccionada={this.state.parejaSeleccionada}
                    // eslint-disable-next-line react/jsx-no-bind
                    seleccionarCartas={this.seleccionarCarta.bind(this)}
                />
            </div>
        );
    }
}

export default StartApp;
