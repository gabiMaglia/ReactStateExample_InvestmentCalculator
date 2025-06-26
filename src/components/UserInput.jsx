

const UserInput = ({state, onChange}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label> Initial investment</label>
          <input type="number" required value={state.initialInvestment} onChange={(event)=> onChange('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label> Anual investment</label>
          <input type="number" required value={state.annualInvestment} onChange={(event)=> onChange('annualInvestment', event.target.value)} />
        </p>
        <p>
          <label> Expected return</label>
          <input type="number" required value={state.expectedReturn} onChange={(event)=> onChange('expectedReturn', event.target.value)} />
        </p>
        <p>
          <label> Duration</label>
          <input type="number" required value={state.duration} onChange={(event)=> onChange('duration' , event.target.value)} />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
