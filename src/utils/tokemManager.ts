const tokenManager = {
  async getToken(key: string): Promise<string | null> {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        console.log(`${key} was retrieved from localStorage 🔐`);
      } else {
        console.log(`No value stored under key: ${key}`);
      }
      return item;
    } catch (error) {
      console.error("Error getting item from localStorage: ", error);
      return null;
    }
  },

  // Save a token to localStorage
  async saveToken(key: string, value: string): Promise<void> {
    try {
      localStorage.setItem(key, value);
      console.log(`${key} saved to localStorage successfully 🔑`);
    } catch (error) {
      console.error("Error saving item to localStorage: ", error);
    }
  },

  // Clear tokens from localStorage
  async clearToken(): Promise<void> {
    try {
      localStorage.removeItem("id_token");
      localStorage.removeItem("tenant_id");
    } catch (error) {
      console.error("Error clearing tokens from localStorage: ", error);
    }
  },
};

export default tokenManager;
