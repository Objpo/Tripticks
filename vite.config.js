import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173, // có thể đổi nếu muốn
        open: true, // tự mở browser khi chạy npm run dev
    },
});
