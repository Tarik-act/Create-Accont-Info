import React from 'react';
import Input from './Input';
import Button from './Button';

function Form() {
  return (
    <div>
      <form className='form'>
        <div className='form_control'>
          {' '}
          <Input
            FieldName='Company Name'
            type='text'
            name='company_name'
            placeholder='e.g Example Inc'
          />
        </div>
        <div className='form_control'>
          <label htmlFor='industry'>Industry</label>
          <select name='industry' required>
            <option value='0' disabled selected hidden>
              Select
            </option>
            <option value='1'>Web</option>
            <option value='2'>Mobile</option>
            <option value='3'>Cyber</option>
          </select>
        </div>
        <div className='form_control'>
          <label htmlFor='industry'>Company Size</label>
          <p className='select_Field'>
            <span>1-20</span>
            <span>21-50</span>
            <span className='active'>51-200</span>
            <span>201-500</span>
            <span>500+</span>
          </p>
        </div>
        <Button />
      </form>
    </div>
  );
}

export default Form;
