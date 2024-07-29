import {
  Typography,
  Button,
  CardMedia,
  CardActionArea,
  Card,
  CardContent,
} from "@mui/material";
import { styles } from "../../components/ProductCard/estilos";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={elemento.img}
                  height="500"
                  width="50px"
                />
                <CardContent sx={styles.textArea}>
                  <Typography variant="h2">Modelo:{elemento.title}</Typography>
                  <Typography variant="h3">
                    Cantidad:{elemento.quantity}
                  </Typography>
                  <Typography variant="h4">
                    Precio Unitario: ${elemento.price} USD
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Button
              variant="contained"
              onClick={() => deleteProduct(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="h2"
          className={cart.length > 0 ? "title" : "ocultar"}
        >
          El total a pagar es: ${total} USD
        </Typography>
        <Button variant="outlined" color="warning" onClick={clearCart}>
          Limpiar carrito
        </Button>
        <Link to="/Checkout">
          <Button variant="contained" color="warning">
            Finalizar compra
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
