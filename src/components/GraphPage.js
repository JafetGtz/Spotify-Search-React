import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { connect } from 'react-redux';

 function GraphPage(props){
    const [labels_to_graph, setlabels_to_graph] = useState([]);
    const [num_results, SetResults] = useState([]);
    
    const data = {
      labels: labels_to_graph,
      datasets: [{
        label: "Resultados",
        backgroundColor: "#000",
        borderColor: "red",
        data: num_results
      }]
    }

    const options = {
      maintainAspectRatio: false,
      responsive: true
    }


     useEffect(() => {
       const { cart } = props;
       const lbls = [];
       const results = [];
       cart.map( element => {
        lbls.push(element.name);
        results.push(element.num_results);
       })
       setlabels_to_graph(lbls);
       SetResults(results);
     }, [])



    return (
      <div>
        <Bar data={data}  options={options} />
      </div>  
    )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(GraphPage);