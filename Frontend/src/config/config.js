// Safe Exporting of All The Environment Variables
const config = {
    apiurl: String(import.meta.env.VITE_API_URL),
};

export default config;