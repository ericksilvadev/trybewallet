import React from 'react';
import PropTypes from 'prop-types';

export default class TableBoby extends React.Component {
  constructor() {
    super();
    this.totalValue = this.totalValue.bind(this);
  }

  totalValue() {
    const expenses = JSON.parse(localStorage.getItem('expenses'));
    return expenses.reduce((acc, cur) => (
      acc + Number(cur.value) * Number(cur.exchangeRates[cur.currency].ask)), 0);
  }

  render() {
    const expenses = JSON.parse(localStorage.getItem('expenses'));
    const { removeExpense, toggleEdit } = this.props;
    return (
      <tbody className="table-body">
        { expenses.map((expense) => {
          const {
            id, description, tag, method, value, exchangeRates, currency } = expense;
          const currencyName = exchangeRates[currency].name.split('/');
          return (
            <tr key={ id }>
              <td className="description">{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{currencyName[0]}</td>
              <td className="expense">{Number(value).toFixed(2)}</td>
              <td className="cambio">{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td className="currency">Real</td>
              <td className="expense">
                {Number(value * exchangeRates[currency].ask).toFixed(2)}
              </td>
              <td>
                <button
                  id={ id }
                  type="button"
                  data-testid="edit-btn"
                  name="edit"
                  className="edit fas fa-edit"
                  onClick={ () => toggleEdit(id) }
                />
                <button
                  id={ id }
                  type="button"
                  name="delete"
                  className="fas fa-trash"
                  data-testid="delete-btn"
                  onClick={ () => removeExpense(id,
                    this.totalValue() - Number(value * exchangeRates[currency].ask)
                      .toFixed(2)) }
                />
              </td>
            </tr>);
        })}
      </tbody>
    );
  }
}

TableBoby.propTypes = {
  removeExpense: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func.isRequired,
};
