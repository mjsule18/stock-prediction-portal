import React, {useState} from 'react'; //
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false); //
  const [loading, setLoading] = useState(false); //
  

  const handleresgistration = async (e) => {
    e.preventDefault();
    setLoading(true); //
    
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData);
      console.log('Registration successful:', response.data);
      console.log('Registration successful:');
      setError({}); //
      setSuccess(true);
    } catch (error) {
      //
      setError(error.response?.data || { error: 'An error occurred during registration' });
      console.error('Registration error:', error.response?.data || error);
    } finally {
      setLoading(false); //
    }
  };
  
    return (
    <div className='container'>
      <div className="row justify-content-center align-items-center" style={{ height: '80vh' }}>
        <div className="col-md-6 bg-light-dark p-4 rounded">
          <h3 className='text-light text-center mb-4'>Create an Account</h3>
          <form onSubmit={handleresgistration}>
            <div className='mb-3'>
            <input type="text" className='form-control' placeholder='Username' value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
            <small>{error.username && <span className='text-danger'>{error.username}</span>}</small>
            </div>
            <div className='mb-3'>
            <input type="email" className='form-control mb-3' placeholder='Email' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            <div className='mb-3'>
            <input type="password" className='form-control' placeholder='Password' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}  />
            <small>{error.password && <span className='text-danger'>{error.password}</span>}</small>

            </div>
            {success && <div className="alert alert-success text-center">Registration successful!</div>}
            {loading ?(
              <button type="submit" className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin />Please wait...</button>

            ) : (
              <button type="submit" className='btn btn-info d-block mx-auto'>Register</button>

            )}
          </form>
    </div>
    </div>
    </div>
  
  );
  //
}
export default Register