const Radio = () => {
 return <>
 <input
              id="consistency1"
              type="radio"
              name="consistency"
              value="1"
              onChange={handleChange}
              checked={answers.consistency === "1"}
            />
            <label htmlFor="consistency1">1</label>
 </>
}

export default Radio