import React, { useReducer } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./@/components/ui/carousel";

function formReducer(state, action) {
  switch (action.type) {
    case "updateField":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return {
        name: "",
        email: "",
      };
    default:
      return state;
  }
}

export default function App() {
  const initialState = { name: "", email: "" };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
