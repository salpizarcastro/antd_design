import React, {useState} from 'react';
import {render} from 'react-dom';
import { Button, DatePicker, version, message, Alert} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const App = () => {
  const [date, setDate] = useState(null);

  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  return(
    <div style = {{width: 400, margin: '100px auto'}}>
      <h1>antd version: {version}</h1>
      <DatePicker onChange = {handleChange}/>
      <div style = {{marginTop: 16}}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        <Alert message  = "Selected Date:" description = {date ? date.format('YYYY-MM-DD'): 'None'} />
      </div>
      <Button type = 'primary' style = {{marginLeft: 8}}>Primary Button</Button>
    </div>
  )

}

export default App;
