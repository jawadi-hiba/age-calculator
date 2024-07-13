import React, { useState } from "react";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (day && month && year) {
      calculateAge(day, month, year);
    }
  };

  return (
    <div className="age-calculator" onSubmit={handleSubmit}>
      {/* <form onSubmit={handleSubmit}> */}
      <label>
        Day:
        <input
          type="number"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
          min="1"
          max="31"
        />
      </label>
      <label>
        Month:
        <input
          type="number"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
          min="1"
          max="12"
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          min="1900"
          max={new Date().getFullYear()}
        />
      </label>
      <button type="submit"></button>
      {/* </form> */}
      <div className="age-result">
        <p>
          {age ? `${age.years}` : "--"} years,
          {age ? `${age.months}` : "--"} months, and
          {age ? `${age.days}` : "--"} days
        </p>
      </div>
    </div>
  );
};

export default AgeCalculator;
