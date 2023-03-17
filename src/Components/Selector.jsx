const Selector = (props) =>{

    function handleChangeType(e) {
        props.setType(e.target.value);
      }

    return(
        <select className="form-select" onChange={handleChangeType} value={props.type}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat" >Cat</option>
                <option value="Dog" >Dog</option>
                <option value="Rabbit" >Rabbit</option>
              </select>
    );
}


export default Selector