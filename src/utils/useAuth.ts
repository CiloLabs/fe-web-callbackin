import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = (): boolean => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {

    if (!token) {
      navigate('/');
    }
  }, [history]);

  return true;
};
