import Checkbox from './Checkbox';

function CheckBoxGroup({ answers, CheckboxList, handleCheckboxGroupChange }) {
  return (
    <ul>
      {CheckboxList.map((item, i) => (
        <li key={i}>
          <Checkbox
            name={item.name}
            value={item.value}
            type='checkbox'
            onChange={handleCheckboxGroupChange}
            // checked={answers.timeSpent.includes(item.value)}
          >
            {item.text}
          </Checkbox>{' '}
        </li>
      ))}
    </ul>
  );
}
export default CheckBoxGroup;
