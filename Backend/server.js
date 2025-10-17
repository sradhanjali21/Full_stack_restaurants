import App from "./App.js";
const PORT = process.env.PORT;

App.listen(PORT, () => {
    console.log(`✅ Server running in mode on port ${PORT}`);
});