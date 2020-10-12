import React from 'react'
import Navbar from "components/Navbar";
import Footer from "components/Footer"
import RegistroIcon from 'svg/RegistroIcon';
import VisualizacionIcon from 'svg/VisualizacionIcon';
import DolarIcon from 'svg/DolarIcon';
import AlertIcon from 'svg/AlertIcon';
import SecutityIcon from 'svg/SecutityIcon';
export default function Nosotros() {
return (
<div className="nosotross">
    <Navbar />
    <section className="nosotros_hover">
        <h1>Treinta - ¡Aplicación financiera gratuita!</h1>
        <div className="nosotros_hover_googleplay">
            <img src="./googleplay.png" alt="Descarga en googleplay" />
        </div>
        <div className="nosotros_hover_demo">
            <img className="demo" src="./treinta_nosotros.png" alt="App treinta demo" />
            <img className="circle" src="./Circle BG.png" alt="circulo de fondo" />
        </div>
    </section>
    <section className="nosotros_feature">
            <h2>La contabilidad de tu negocio en tu mano</h2>
            <section className="nosotros_feature_grid">
                <div className="nosotros_feature_grid_block">
                    <div className="block_feature">
                        <div className="icon">
                            <RegistroIcon width="2em" height="2em" />
                        </div>
                        <h4>Registra ventas y gastos</h4>
                        <p>Registra los ingresos, los gastos y las cuentas por cobrar y pagar</p>
                    </div>
                    <div className="block_feature">
                         <div className="icon">
                            <VisualizacionIcon width="2em" height="2em" />
                        </div>
                        <h4>Visualiza la utilidad del negocio al instante</h4>
                        <p>Obtén información diaria, semanal y mensual de la utilid   ad del negocio</p>
                    </div>
                    <div className="block_feature">
                         <div className="icon">
                            <DolarIcon width="2em" height="2em" />
                        </div>
                        <h4>Cobra puntualmente la deuda de tus clientes</h4>
                        <p>Obtén pagos de las deudas de tus clientes más rápido con el registro de deudas pendientes</p>
                    </div>
                </div>
                <div className="nosotros_feature_grid_block">
                    <div className="block_feature">
                        <div className="icon">
                            <AlertIcon width="2em" height="2em" />
                        </div>
                        <h4>Recuerda cuando pagar a proveedores y acreedores</h4>
                        <p>Visualiza las fechas de vencimiento de tus facturas y recibos</p>
                    </div>
                    <div className="block_feature">
                        <div className="icon">
                            <SecutityIcon width="2em" height="2em" />
                        </div>
                        <h4>Los datos se mantienen seguros</h4>
                        <p>Las cuentas por cobrar son muy importantes, no las pierda. Con Treinta, los registros se mantienen seguros.</p>
                    </div>
                </div>
            </section>
            <Footer />
    </section>
</div>
)
}