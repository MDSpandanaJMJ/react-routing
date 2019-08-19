import * as React from "react";
import {IProduct, products} from "./products-data";
import './index.css';
import {Link} from "react-router-dom";


interface IState {
  products: IProduct[];
  
}

export class ProductsPage extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      products: []
    }
  };
  
  public componentDidMount(): void {
    this.setState({products})
  }
  
  public render(): React.ReactNode {
    return (
      <div className="page-container">
        <p>Welcome to react show where you get tools</p>
        <ul className="product-list">
          {this.state.products.map(product => (
            <li key={product.id} className="product-list-item">
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
