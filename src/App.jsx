
import Navbar from "./components/Navbar";
import img from "./assets/imgbg03.jpg"

function App(){

  return (
    <div className="bg-stone-800 text-white min-h-screen relative ">
           
          <img src={img} alt="" className="absolute h-screen w-full" />
           
           <div className="absolute w-full">
            <Navbar/>

           </div>
    </div>
  );
}

export default App;

