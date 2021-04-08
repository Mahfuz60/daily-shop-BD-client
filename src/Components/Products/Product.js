import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Product.css";
import { useHistory } from "react-router";



const Product = ({ product }) => {
  const history = useHistory();
  const handleOrder = (productType) => {
    history.push(`/checkOut/${productType}`);
  };
  
  
  return (
    <div className="col-md-3 ">
      <div className=" card-div">
        <Card className="card">
          <Card.Img className="card-img" variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title>
              <h3>{product.name} </h3>
            </Card.Title>
            <Card.Text className="card-text">
              {" "}
              ${product.price} &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                onClick={() => handleOrder(product.productType)}
                variant="warning"
              >
                Order Now
              </Button>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Product;
