import {Simulate} from "react-dom/test-utils";
import waiting = Simulate.waiting;

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews: IReview[];
}

export interface IReview {
  comment: string;
  reviewer: string;
}

export const products: IProduct[] = [
  {
  description: "Collection of navigational components",
  id: 1,
  name: "React router",
  price: 8,
    reviews: [
      {
        comment: "Excellent! This does everything I want",
        reviewer: "Billy"
      },
      { comment: "The best router I've ever worked with", reviewer:
          "Sally" }
    ]
}, {
  description: "Library for managing state",
    id: 2,
    name: "React redux",
    price: 10,
    reviews: [
      {
        comment: "I've found this really useful in a large app I'mworking on",
        reviewer: "Billy"
},
{
  comment: "A bit confusing at first but simple when you getused to it",
  reviewer: "Sally"
}
]
  },
  {
    description: "A library that helps you interact with a GraphQL backend",
    id: 3,
    name: "React Apollo",
    price: 12,
    reviews: [
      {
        comment: "I'll never work with a REST API again!",
        reviewer: "Billy"
      },
      {
        comment: "It makes working with GraphQL backends a breeze",
        reviewer: "Sally"
      }
    ]
  }
  
];

export const getProduct = async (id: number): Promise<IProduct | null> => {
  await wait(1000);
  const foundProducts = products.filter(customer => customer.id === id);
  return foundProducts.length === 0 ? null : foundProducts[0];
  
};

const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
}
