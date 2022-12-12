import React from "react";


const Formlist =(props) => {

    const {getweader} = props;

   return(
    <form className="form" onSubmit={getweader}>
         <input type="text" className="city" name="city" placeholder="city ...." />
         <input type="text" className="city" name="country" placeholder="Country ..." />
         <button className="btn">Get Weader</button>
    </form>
   )

  }


export default Formlist