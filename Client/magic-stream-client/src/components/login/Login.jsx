// import {useState} from 'react';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import axiosClient from '../../api/axiosConfig';
// import { useNavigate, Link, useLocation } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import logo from '../../assets/MagicStreamLogo.png';

// const Login = () => {
    
//     const {setAuth} = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const from = location.state?.from?.pathname || "/";
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);       

//         try {
//             const response = await axiosClient.post('/login', { email, password });
//             console.log(response.data);
//             if (response.data.error) {
//                 setError(response.data.error);
//                 return;
//             }
//            // console.log(response.data);
//             setAuth(response.data);
            
//            // localStorage.setItem('user', JSON.stringify(response.data));
//             // Handle successful login (e.g., store token, redirect)
//            navigate(from, {replace: true});
//            //navigate('/');

//         } catch (err) {
//             console.error(err);
//             setError('Invalid email or password1');
//         } finally {
//             setLoading(false);
//         }
//     }; 
//     return (
//         <Container className="login-container d-flex align-items-center justify-content-center min-vh-100">
//             <div className="login-card shadow p-4 rounded bg-white" style={{maxWidth: 400, width: '100%'}}>
//                 <div className="text-center mb-4">
//                     <img src={logo} alt="Logo" width={60} className="mb-2" />
//                     <h2 className="fw-bold">Sign In</h2>
//                     <p className="text-muted">Welcome back! Please login to your account.</p>
//                 </div>
//                 {error && <div className="alert alert-danger py-2">{error}</div>}
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group controlId="formBasicEmail" className="mb-3">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                             type="email"
//                             placeholder="Enter email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             autoFocus
//                         />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPassword" className="mb-3">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </Form.Group>

//                     <Button
//                         variant="primary"
//                         type="submit"
//                         className="w-100 mb-2"
//                         disabled={loading}
//                         style={{fontWeight: 600, letterSpacing: 1}}
//                     >
//                         {loading ? (
//                             <>
//                                 <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                                 Logging in...
//                             </>
//                         ) : 'Login'}
//                     </Button>
//                 </Form>
//                 <div className="text-center mt-3">
//                     <span className="text-muted">Don't have an account? </span>
//                     <Link to="/register" className="fw-semibold">Register here</Link>
//                 </div>
//             </div>
//         </Container>
//     )
// }
// export default Login;
import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axiosClient from "../../api/axiosConfig";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/MagicStreamLogo.png";

const Login = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post("/login", { email, password });
      if (response.data.error) {
        setError(response.data.error);
        return;
      }

      setAuth(response.data);
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError("⚠️ Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background:
          "radial-gradient(circle at top, #0f0f0f 0%, #000 100%)",
      }}
    >
      <Container className="d-flex align-items-center justify-content-center">
        <div
          className="shadow-lg p-4 rounded-4 bg-dark text-light"
          style={{
            maxWidth: 420,
            width: "100%",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Logo + Title */}
          <div className="text-center mb-4">
            <img
              src={logo}
              alt="MagicStream Logo"
              width={70}
              className="mb-3"
              style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.2))" }}
            />
            <h2 className="fw-bold mb-1">Welcome Back</h2>
            <p className="text-secondary mb-0">
              Sign in to continue your movie journey 🍿
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="alert alert-danger py-2 text-center fade show"
              role="alert"
              style={{
                fontSize: "0.9rem",
                borderRadius: "0.5rem",
              }}
            >
              {error}
            </div>
          )}

          {/* Form */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-dark text-light border-secondary"
              />
            </Form.Group>

            <Button
              variant="danger"
              type="submit"
              className="w-100 py-2 fw-semibold mt-2"
              disabled={loading}
              style={{
                letterSpacing: 1,
                borderRadius: "8px",
                transition: "all 0.3s ease",
                boxShadow: "0 0 10px rgba(255, 0, 0, 0.3)",
              }}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </Form>

          {/* Footer */}
          <div className="text-center mt-4">
            <span className="text-secondary">
              Don’t have an account?{" "}
            </span>
            <Link to="/register" className="text-danger fw-semibold">
              Register here
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
