// Mock authentication service
export const authService = {
  login: (credentials) => {
    // In a real app, this would send a request to the backend
    // For now, we hardcode credentials
    const { email, password } = credentials;
    if (email === "admin@mara.com" && password === "password") {
      const token = "mock-jwt-token";
      // Store token in localStorage (in a real app, you would use httpOnly cookie or secure storage)
      localStorage.setItem("token", token);
      return Promise.resolve({ token, user: { email: "admin@mara.com", name: "Admin" } });
    } else {
      return Promise.reject(new Error("Invalid credentials"));
    }
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  getToken: () => localStorage.getItem("token"),
  isAuthenticated: () => !!localStorage.getItem("token")
};

export default authService;