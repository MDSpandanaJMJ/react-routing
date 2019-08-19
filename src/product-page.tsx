import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import {getProduct, IProduct, products } from "./products-data";
import {Product} from "./product";

type Props = RouteComponentProps<{id: string}>;
interface IState {
  product?: IProduct;
  added: boolean;
  loading: boolean;
  
}

export class ProductPage extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      added: false,
      loading: true
    }
  }
  
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<IState>, snapshot?: any): void {
  }
  
  async componentDidMount() {
    console.log('inside mount');
    if (this.props.match.params.id) {
      console.log('matched params ', this.props.match.params.id);
      const id: number = parseInt(this.props.match.params.id, 10);
      const product: IProduct | null = await getProduct(id);
      if (product !== null)
        this.setState({product, loading: false});
    }
  }
  
  handleAddClick = () => {
    this.setState({added: true});
  }
  
  render(): React.ReactNode {
    const product = this.state.product;
    return (
      <div className="page-container">
        
        {product ? (
          <Product product={product} inBasket={this.state.added} onAddToBasket={this.handleAddClick}/>
        ) : (
          <p>Product not found</p>
        )}
        
        
      </div>
    );
  }
}
