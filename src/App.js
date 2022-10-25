import './App.css';
/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";*/


function colors() {

  return (
    <> <div> background colors</div>


      <div class="text-bg-primary mb-2 p-3 w-100 d-flex justify-content-center">primary color!</div>
      <div class="text-bg-secondary mb-2 p-3 w-100 d-flex justify-content-center">Secondary color!</div>
      <div class="text-bg-success mb-2 p-3 w-75 d-flex justify-content-end">success color!</div>
      <div class="text-bg-danger mb-2 p-3 w-75 d-flex justify-content-end"> danger color!</div>
      <div class="text-bg-light mb-2 p-3 w-50 d-flex justify-content-end">light color!</div>
      <div class="text-bg-warning mb-2 p-3 w-50 d-flex justify-content-end">warning color!</div>
      <div class="text-bg-info mb-2 p-3 w-25 d-flex justify-content-end">info color!</div>
      <div class="text-bg-dark mb-5 p-3 w-25 d-flex justify-content-end" >dark color!</div>

      <div class="bg-warning p-2 text-white w-25 d-flex justify-content-center">This is default warning background</div>
      <div class="bg-warning p-2 text-dark bg-opacity-75 w-25 d-flex justify-content-center">This is 75% opacity</div>
      <div class="bg-warning p-2 text-dark bg-opacity-50 w-25 d-flex justify-content-center">This is 50% opacity</div>
      <div class="bg-warning p-2 text-dark bg-opacity-25 w-25 d-flex justify-content-center">This is 25% opacity</div>
      <div class="bg-warning p-2 text-dark bg-opacity-10 w-25 mb-5 d-flex justify-content-center">This is 10% opacity</div>

      <div class="border border-danger p-2 mb-3 d-flex justify-content-center">100% border opacity</div>
      <div class="border border-danger p-2 mb-3 border-opacity-75 d-flex justify-content-center"> 75% border opacity</div>
      <div class="border border-danger p-2 mb-5 border-opacity-50 d-flex justify-content-center"> 50%  border opacity </div>

      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>



    </>
  )
}


function opacity() {

  return (
    <>
      <div>opacity..</div>


    </>
  )
}




export default colors;

