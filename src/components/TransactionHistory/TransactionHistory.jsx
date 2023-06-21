import React from "react";
import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "./TransactionHistoryItem";


const TransactionHistory = ({ transactions }) => (
    <table class={css.transactionHistory}>
          <thead>
             <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
        {transactions.map(transaction => 
            <TransactionHistoryItem 
                key={transaction.id}
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
            />
            )}
        </tbody>
    </table>
)

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }))
    
}

export default TransactionHistory