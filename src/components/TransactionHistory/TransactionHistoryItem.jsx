import React from "react";
import PropTypes from "prop-types";


const TransactionHistoryItems = ({ id, type, amount, currency }) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
)

TransactionHistoryItems.propTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionHistoryItems