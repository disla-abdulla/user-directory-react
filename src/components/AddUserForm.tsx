import { useState } from "react";

function AddUserForm() {
  // create form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });
  //   create error state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  //   create validation function
  const validate = (data) => {
    let newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is Required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is Required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone is Required";
    } else {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(data.phone)) {
        newErrors.phone = "Must be 10 digits";
      }
    }

    if (!data.city.trim()) {
      newErrors.city = "City is Required";
    }
    return newErrors;
  };
  // dynamic input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = {
      ...formData,
      [name]: value,
    };
    setFormData(updatedData);
    const validationErrors = validate(updatedData);
    setErrors(validationErrors);
  };
  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };
  //   handle submit
  const handleSubmit = (e) => {
    console.log("submit called");
    // prevent browser page refresh
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    console.log(formData);
    alert("User Added successfully");
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Name"
          className={
            touched.name && errors.name
              ? "input error"
              : formData.name
              ? "input success"
              : "input"
          }
        />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Email"
          className={
            touched.email && errors.email
              ? "input error"
              : formData.email
              ? "input success"
              : "input"
          }
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <input
          name="phone"
          type="number"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter Phone"
          className={
            touched.phone && errors.phone
              ? "input error"
              : formData.phone
              ? "input success"
              : "input"
          }
        />
        {touched.phone && errors.phone && <p>{errors.phone}</p>}
        <input
          name="city"
          type="text"
          value={formData.city}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter City"
          className={
            touched.city && errors.city
              ? "input error"
              : formData.city
              ? "input success"
              : "input"
          }
        />
        {touched.city && errors.city && <p>{errors.city}</p>}
        <button type="submit">Add User </button>
      </form>
    </div>
  );
}

export default AddUserForm;
