
const BASE_URL = 'http://localhost:8080'; 

export const registerUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};
