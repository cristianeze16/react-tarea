import './App.css';
import NombreFoto from "./components/NombreFoto";
import CampoConArray from './components/CampoConArray';
import Flechita from './components/Flechita';
import data from './data/datosMentores';
import { useState } from 'react';
function App() {

  let [numeroAcambiar,setNumeroAcambiar]= useState(0)


  

  let next = ()=>{
    if(numeroAcambiar< data.length-1){
    setNumeroAcambiar(++numeroAcambiar)
    }else{
      setNumeroAcambiar(0);
    }
    
  
  }
  let prev = ()=>{
if (numeroAcambiar>0) {
  setNumeroAcambiar(--numeroAcambiar);
} else {
  setNumeroAcambiar(data.length-1);
}


  }



  return (
    <div className="card black">
      <NombreFoto
        nombre={data[numeroAcambiar].nombre}
        foto={data[numeroAcambiar].foto}
      />
      <p className="gray flex j-center a-center">ocultar info</p>
      <div className="edad-fecha">
        <p className="datos white r25 edad">
          Edad:{data[numeroAcambiar].edad} años
        </p>
        <p className="datos white l25 fecha">
          Fecha:{data[numeroAcambiar].nacimiento}
        </p>
      </div>
      <div className="datos white flex a-center">
        <p>Mail:{data[numeroAcambiar].mail}</p>
      </div>
      <CampoConArray
        titulo="titulo"
        datos={data[numeroAcambiar].hobbies.join(" y ")}
      />
      <CampoConArray
        titulo="Comidas"
        datos={data[numeroAcambiar].comidas.join(" y ")}
      />
      <div className=" flex j-center a-center">
        <Flechita verbo="Anterior" estilo="r25" click ={prev}/>
        <Flechita verbo="Siguiente" estilo="l25" click={next} />
      </div>
    </div>
  );
}

export default App;
