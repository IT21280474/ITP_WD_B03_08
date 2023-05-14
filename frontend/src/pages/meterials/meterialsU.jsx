import { useEffect } from "react";
import { useMeterialsContext } from "../../hooks/useMeterialsContext";
import { useState } from "react";
import { Form } from "react-bootstrap";

//components
import MeterialDetails from "../../components/MeterialDetailsUser";

export const Meterialuser = () => {
  const { meterials, dispatch } = useMeterialsContext();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMeterials = async () => {
      const response = await fetch("/api/meterials");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_METERIALS", payload: json });
      }
    };
    fetchMeterials();
  });

  return (
    <>
      <Form.Control
        aria-label="Search"
        className="form-control-rounded form-control-prepended mb-5"
        placeholder="Search"
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="home">
        <div className="meterials">
          {meterials &&
            meterials
              .filter((meterial) =>
                meterial.title?.toLowerCase().includes(query.toLowerCase())
              )
              .map((meterial) => (
                <MeterialDetails key={meterial._id} meterial={meterial} />
              ))}
        </div>
      </div>
    </>
  );
};
