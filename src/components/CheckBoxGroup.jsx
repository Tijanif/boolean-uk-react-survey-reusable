import Checkbox from './Checkbox';

function CheckBoxGroup({ CheckboxList, handleCheckboxGroupChange }) {
  return (
    <ul>
      {CheckboxList.map((item, i) => (
        <li key={i}>
          <Checkbox
            name={item.name}
            value={item.value}
            type='checkbox'
            onChange={handleCheckboxGroupChange}
          >
            {item.text}
          </Checkbox>{' '}
        </li>
      ))}
    </ul>
  );
}
export default CheckBoxGroup;
