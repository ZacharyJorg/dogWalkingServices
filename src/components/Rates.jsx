import { forwardRef } from "react";

const Rates = forwardRef((props, ref) => {
  return (
    <section className="rates-info" ref={ref}>
      <h3>Here are my Rates:</h3>
      <p>30 min Dog Walk: $25</p>
      <br></br>
      <p>1 hr Dog Walk: $40</p>
      <br></br>
      <p>Overnight Stay: $100 (per night)</p>
    </section>
  );
});

export default Rates;
