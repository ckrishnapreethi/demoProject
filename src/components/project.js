import Container from 'react-bootstrap/Container';
import React from 'react';
import 'C:/Users/002UXR744/Desktop/first-project/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Slidebar from './Slidebar';
// import Content from './Context';

function Project() {
  return (
    <div className='container'>
      <div className='new'>
        <div className='r'>
         
          <div className='row'>
            <div className='col'>
              <label >username</label>
              <input type='text' className='form-control' />
            </div>
           
          </div>
          
            {/* <Slidebar /> */}

          <div className='row'>
           
            <div className='col'>
              <label >password</label>
              <input type='text' className='form-control' />
            </div>
          </div> 
{/*           
            <div class="btn-group-toggle" data-toggle="buttons">
            <div className='form-check' >
                <input type="checkbox"autocomplete="ON"  /> remember me
            </div>
            </div>
            <div class="form-group">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="checkbox3" name="exampleCheckbox3"/>
            <label class="form-check-label" for="checkbox3">
              Option 3
            </label>
        </div>
        </div> */}
        
          
          <div className='fp'>
            forgot password 
          </div>
          <div>singn</div>
          <button type = 'button' class='btn btn-primary btn-block'>login</button>
         


        </div>

          </div>

    </div>

  );
}

export default Project;



