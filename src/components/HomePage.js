import React, { useState, useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import { HomeStyle } from "./../styles/StylesGlobal";
import { useQuery } from "@apollo/client";
import { GET_ARTISTS } from "./../gql/Artists";
import { size } from "lodash";
import { Search } from "semantic-ui-react";
import CardResult from "./CardResult";
import { connect } from "react-redux";
import store from './../store/store';

 function HomePage(props) {
  const [keyword, setkeyword] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(true);

  

   
  const { data, loading, } = useQuery(GET_ARTISTS, {
    variables: {
      byname: keyword,
    },
  });

  useEffect(() => {
     props.cart.length >= 8 ? setOpen(false) : setOpen(open);
    if (size(data?.queryArtists) > 0) {
      const Artists = [];
      data.queryArtists.forEach((artist) => {
        Artists.push(artist);
      });
      setResults(Artists);
    } else {
      setResults([]);
    }
  }, [data]);

  const handleChange = (event) => {
    if (event.target.value) setkeyword(event.target.value);
    else setkeyword("");
  };

 

  const handleResultSelect = ( data ) => {
    const { result: { name } } =  data;
    const num_results = results.length;
    console.log(name);
    setkeyword("");
    setResults([]);
    handleAddSearch(name,num_results);
  };


  

  return (
    <div style={HomeStyle.container}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <Box border={0}>
            <form>
              <Search
                open={open}
                fluid
                size="large"
                input={{ icon: "search", iconPosition: "left" }}
                onSearchChange={handleChange}
                loading={loading}
                value={keyword || ""}
                results={results || ""}
                resultRenderer={(e) => <CardResult data={e} />}
                minCharacters={3}
                onResultSelect={(evt, data) => handleResultSelect(data)}
              />
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}


const mapStateToProps = state => {
     return {
       cart: state.cart
     }
}

const handleAddSearch = (name, num_results) => {
  store.dispatch({
    type: "ADD_VALUE",
    value: {
      name,
      num_results
    }
  })
}

export default  connect(mapStateToProps)(HomePage);