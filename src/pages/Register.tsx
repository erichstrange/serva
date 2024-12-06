import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BarChart2, AlertCircle } from 'lucide-react';
import { signUp } from 'aws-amplify/auth';
import BackButton from '../components/navigation/BackButton';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);

    try {
      const { isSignUpComplete, nextStep } = await signUp({
        username: formData.email,
        password: formData.password,
        options: {
          userAttributes: {
            email: formData.email,
            given_name: formData.firstName,
            family_name: formData.lastName,
            'custom:company_name': formData.companyName
          },
          autoSignIn: false
        }
      });

      if (isSignUpComplete) {
        navigate('/verify-email', { state: { email: formData.email } });
      } else if (nextStep.signUpStep === 'CONFIRM_SIGN_UP') {
        navigate('/verify-email', { state: { email: formData.email } });
      }
    } catch (err: any) {
      console.error('Signup error:', err);
      if (err.name === 'UsernameExistsException') {
        setError('An account with this email already exists');
      } else if (err.name === 'InvalidPasswordException') {
        setError('Password must contain at least one number, one uppercase letter, and one special character');
      } else {
        setError(err.message || 'Failed to register. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Rest of the component remains the same...
  // (Keep the existing JSX/render code)
};

export default Register;