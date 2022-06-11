// zensar interview qa
/*
1.) What are Semantic and Void elements
2.)What is hoisting and closure with eg
3.)What are different browser storages(local storage and session) and their drawbacks
4.)shouldComponentUpdate life cycle method
5.) useCallback and usememo in react
6.)mixins,mediaqueries in css
7.) generator functions
8.)align a div to center with plain css without flex
  <div class="test">testing</div>
  .test{
    color:red;
    top:50%;
    left:50%;
    position:absolute
  }
9.)Write a react program to fetch data using "https://fakestoreapi.com/products"
      import React from 'react';
      import {useEffect,useState} from 'react';
      import './style.css';

       export default function App() {
        const [products,setProducts] = useState([])

        useEffect(()=>{
          fetch("https://fakestoreapi.com/products").then(resp=>resp.json()).then((data)=>{
            setProducts(data)
          })
        },[])

        if(products.length>0){
          const lis = products.map(pr => <li key={pr.id}>{pr.title}</li>)
          return (
            <React.Fragment>
              <h4>Titles</h4>
              <ul>{lis}</ul>
            </React.Fragment>
          )
        }else{
          return (
            <div>
              loading
            </div>
          );
        }

      }




*/
