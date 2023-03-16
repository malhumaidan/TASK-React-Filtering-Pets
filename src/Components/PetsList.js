import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";

function PetsList() {
  const [input, setInput] = useState('');

  const [type, setType] = useState("");

  const petList = pets.filter(pet => pet.name.toLowerCase().includes(input.toLowerCase()))
                      .filter(pet => {
                        if (type === ""){
                          return true
                        }
                        return pet.type === type})
                       .map((pet) => <PetItem pet={pet} key={pet.id} />);

  function handleChangeInput(e) {
    setInput(e.target.value);
    // console.log(e);
  }

function handleChangeType(e) {
  setType(e.target.value);
}


  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  onChange={handleChangeInput}
                  value={input}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={handleChangeType} value={type}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat" >Cat</option>
                <option value="Dog" >Dog</option>
                <option value="Rabbit" >Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
