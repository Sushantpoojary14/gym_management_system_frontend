import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/lib/axios';
import { useAppDispatch } from '@/lib/hooks';
import { setCredentials, setError, setLoading } from './authSlice';
import toast from 'react-hot-toast';
import { User } from '@/lib/types';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export function useLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const response = await axiosInstance.post<LoginResponse>('/auth/login', credentials);
        const { user, token, refreshToken } = response.data;

        // Store tokens
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);

        // Update Redux state
        dispatch(setCredentials({ user, token, refreshToken }));

        // Show success message
        toast.success('Successfully logged in!');

        // Redirect based on role
        router.push(`/${user.role.toLowerCase()}`);

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const message = error.response?.data?.message || 'Failed to login';
          dispatch(setError(message));
          toast.error(message);
          throw error;
        }
        throw error;
      } finally {
        dispatch(setLoading(false));
      }
    },
  });
}
