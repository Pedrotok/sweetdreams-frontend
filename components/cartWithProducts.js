import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

import CartItem from 'components/cartItem';
import CartAmount from 'components/cartAmount';

import { getDeliveryInfo } from 'lib/delivery';

import styles from './cart.module.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CartWithProducts(props) {
  const classes = useStyles();
  const { cart, updateItemOnCart, removeFromCart } = props;

  const rows = cart;
  const totalCost = cart.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  return (
    <div className="m-12 px-24 h-auto">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Produto</TableCell>
              <TableCell align="right">Quantidade</TableCell>
              <TableCell align="right">Preço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name + row.size}>
                <TableCell component="th" scope="row">
                  <CartItem row={row} />
                </TableCell>
                <TableCell align="right">
                  <CartAmount
                    product={row}
                    updateCart={updateItemOnCart}
                    removeFromCart={removeFromCart}
                  />
                </TableCell>
                <TableCell align="right">
                  R$ {(row.price * row.amount).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex flex-col justify-end my-5">
        <div className="flex flex-col self-end my-4">
          <TextField
            id="zipcode"
            type="text"
            placeholder="CEP"
            variant="outlined"
            size="small"
          />
          <a
            href="#"
            onClick={() => getDeliveryInfo('70852540', 1)}
            className={styles.zipCodeLink}
          >
            Calcular frete
          </a>
        </div>
        <p className="self-end my-2">Total: R$ {totalCost.toFixed(2)}</p>
        <button
          className="self-end btn mt-2 bg-blue-500 hover:bg-blue-700 text-white"
          onClick={() => { }}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
