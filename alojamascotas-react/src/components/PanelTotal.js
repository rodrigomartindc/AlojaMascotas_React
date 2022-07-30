import React from 'react'
import PropTypes from 'prop-types';

function PanelTotal(props) {
  return (
    <div>
      <div className="col-md-4 mb-4">
            <div className={`card border-left-black shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-black text-uppercase mb-1`}>TOTAL DE {props.cardName}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cardValue}</div>
                        </div>
                        <div className="col-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

PanelTotal.defaultProps = {
  cardName: 'Sin titulo',
  cardValue: 0,
}

/* PROPTYPES */

PanelTotal.propTypes = {
      cardName: PropTypes.string.isRequired,
      cardValue: PropTypes.number.isRequired,
      // cardValue: PropTypes.oneOfType([
      //     PropTypes.string,
      //     PropTypes.number
      // ]).isRequired,
  }



export default PanelTotal