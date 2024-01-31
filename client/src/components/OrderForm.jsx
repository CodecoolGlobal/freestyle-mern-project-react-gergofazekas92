import { useState } from 'react'

function OrderForm() {
  const [formData, setFormData] = useState({
    secondName: '',
    firstName: '',
    email: '',
    phoneNumber: '',
    adress: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClick = () => {
    console.log( formData)
  }

  return (
    <div >
      <label >Second Name</label>
      <input type="text" name='secondName' onChange={handleInputChange} value={formData.secondName} />
      <br/>
      <label >First Name</label>
      <input type="text"  name="firstName" onChange={handleInputChange} value={formData.firstName} />
      <br/>
      <label >Email</label>
      <input type="email" name='email' onChange={handleInputChange} value={formData.email} />
      <br/>
      <label >Phone number</label>
      <input type="number" name='phoneNumber' onChange={handleInputChange} value={formData.phoneNumber} />
      <br/>
      <label >Adress</label>
      <input type="text" name="adress" onChange={handleInputChange} value={formData.adress} />
      <br/>
      <button onClick={() => handleClick()} >Order</button>
    </div>
  )
}

export default OrderForm