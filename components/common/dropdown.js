import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';

export default function Dropdown(props) {
  const [option, setOption] = useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
    props.handleChange(event.target.value);
  };

  return (
    <div>
      <FormControl className="w-48">
        <InputLabel>{props.title}</InputLabel>
        <Select
          value={option}
          onChange={handleChange}
        >
          {props.optionsList.map((opt) => (
            <MenuItem value={opt.value}>{opt.text}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div >
  );
}