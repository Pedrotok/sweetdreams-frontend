import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Link from 'next/link';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#f26d6d',
  },
}))(Badge);

export default function ShoppingCart({ cartSize }) {
  return (
    <Link href="/cart">
      <a className="border-l border-gray-300 px-4">
        <IconButton style={{ outline: 'none' }}>
          <StyledBadge badgeContent={cartSize} color="secondary">
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </IconButton>
      </a>
    </Link>
  );
}
