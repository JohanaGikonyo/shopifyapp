import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
    <div>
    <table class="table text-center tab ">
<tr>
  <th class="text-center text-info" colSpan={6}>SIZE CHART CREATOR</th>
  <th class="text-center text-warning">inches</th>
  <th class="text-center text-danger">CM</th>
</tr>
<tr>
  <td>Inches</td>
  <td colSpan={5} class="text-center text-info" >Enter Size Chart Name</td>
  <td>Base Size</td>
  <td>Eter Size</td>
</tr>
<tr>
  <td>Sizes</td>
  <td>NeckLine</td>
  <td>Chest Size</td>
  <td>Waiste</td>
  <td>Bottom <br/>Hem/Hip</td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>XS</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>S</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>M</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>L</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>XL</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>1X</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>2X</td><td><input type='text'/></td><input type='text'/><td></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>SIZE</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>
<tr>
  <td>SIZE</td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td><td><input type='text'/></td>
</tr>

<tr>
  <td>Sizes</td>
  <td colSpan={2}>Select Category</td>
  <td colSpan={5}>Select Measurement Needed Below</td>
</tr>

<tr>
  <td colSpan={2}>NeckLine</td> <td colSpan={2}>Chest Size</td> <td colSpan={2}>Waist</td> <td colSpan={2}>Bottom Hem/Hip</td>
</tr>
<tr>
  <td colSpan={2}>Front Length Hps</td> <td colSpan={2}>Back Length CB</td> <td colSpan={2}>Across Shoulder Back</td> <td colSpan={2}>SLB length CB</td>
</tr>
<tr colSpan={2}>
  <td colSpan={2}>Shoulder Length</td> <td colSpan={2}>Sleeve Openning</td> <td colSpan={2}>ArmHole Drop</td> <td colSpan={2}>Sleeve Curve Size</td>
</tr>
<tr>
  <td colSpan={8} class="text-center text-info bg-dark">GENERATE SIZE CHART</td>
</tr>
    </table>
      
        <div  class='bg-primary  lists'>
          <h3>Select Category</h3>
          
          <label>
          <input type='checkbox'/> Tops
          </label><br/>
          <label>
          <input type='checkbox'/> Shorts
          </label><br/>
          <label>
          <input type='checkbox'/> Pants
          </label><br/>
          <label>
          <input type='checkbox'/> Dresses
          </label><br/>
          <label>
          <input type='checkbox'/> Skirts
          </label><br/>
          <label>
          <input type='checkbox'/> Bikini
          </label><br/>
          <label>
          <input type='checkbox'/> Bikini Set
          </label><br/>
          <label>
          <input type='checkbox'/> BodySuit
          </label><br/>
          <label>
          <input type='checkbox'/> UnderWear
          </label><br/>
          <label>
          <input type='checkbox'/> Jackets
          </label><br/>
          <label>
          <input type='checkbox'/> OuterWear
          </label><br/>
          <label>
          <input type='checkbox'/> Overall
          </label><br/>
          <label>
          <input type='checkbox'/> Coverall
          </label><br/>
          <input type='submit' value="Submit" class="bg-danger text-center"/>
          
        </div>
        <footer className='footers'>
          <small>@copywrite {new Date().getFullYear()}</small>
        </footer>
        </div>
    </>
  )
}

export default App
