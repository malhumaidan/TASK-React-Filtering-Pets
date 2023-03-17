import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import SearchBar from "./SearchBar";
import Selector from "./Selector";


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

  




  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <SearchBar input={input} setInput={setInput}/>
              <br />
              Type:
              <Selector type={type} setType={setType}/>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
