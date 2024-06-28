import { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  // use useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  // use useRef to get the value of the input field in the form
  // useRef will reference any type of element in DOM
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person1 = {
    name: "",
    age: 0,
  };

  // use useState hook to get the value of the input field in the form
  const [person2, setPerson] = useState({
    name: "",
    age: "",
  });

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   if (nameRef.current !== null) person.name = nameRef.current.value;
  //   if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //   console.log(person2);
  // };

  return (
    // event preventDefault will block form post in server
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 3 characters!</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
