import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CartItem from 'components/cartItem';
import CartAmount from 'components/cartAmount';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CartWithProducts(props) {
  const classes = useStyles();
  const { cart } = props.value;

  const rows = cart;

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
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <CartItem row={row} />
                </TableCell>
                <TableCell align="right">
                  <CartAmount
                    product={row}
                    updateCart={props.value.updateItemOnCart}
                    removeFromCart={props.value.removeFromCart}
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
    </div>
  );
}
