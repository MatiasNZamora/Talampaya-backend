import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DB_PORT || 4001,
        },
        apiKey: process.env.API_KEY,
    };
});