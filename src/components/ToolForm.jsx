import { useState } from "react";
import { Button } from "react-bootstrap";

function ToolForm() {
  const [toolInfo, setToolInfo] = useState({
    name: "",
    url: "",
    category: "",
    desc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toolInfo);
    submitForm(toolInfo);
  };
  const submitForm = async (toolInfo) => {
    console.log(toolInfo);
    const response = await fetch("http://localhost:3000/tools", {
      method: "POST",
      body: JSON.stringify(toolInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };
  const handleChange = (e) => {
    // const { name, value, type, checked } = e.target;
    const { name, value } = e.target;
    setToolInfo((prevToolInfo) => {
      return {
        ...prevToolInfo,
        // [name]: type == "checkbox" ? checked : value,
        [name]: value,
      };
    });
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Tool Name</label>
      <br />
      <input
        name="name"
        type="text"
        placeholder="Tool Name"
        value={toolInfo.name}
        onChange={handleChange}
      />
      <br />
      <label>Tool url</label>
      <br />
      <input
        name="url"
        type="text"
        placeholder="Tool URL"
        value={toolInfo.url}
        onChange={handleChange}
      />
      <br />
      <label>Category</label>
      <br />
      <input
        name="category"
        type="text"
        placeholder="Tool Category"
        value={toolInfo.category}
        onChange={handleChange}
      />
      <br />
      <label>Tool Description</label>
      <br />
      <textarea
        name="desc"
        placeholder="Tool Description"
        value={toolInfo.desc}
        onChange={handleChange}
      />
      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
}
export default ToolForm;
