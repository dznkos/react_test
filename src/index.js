
import React from "react";

import ReactDOM from 'react-dom';
import CounterApp from "./CounterApp";




const divRoot = document.querySelector('#root');


ReactDOM.render( <CounterApp value={ 20 }/> , divRoot);
