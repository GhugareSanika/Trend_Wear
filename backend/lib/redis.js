import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.REDIS_URL, {
  tls: {},
  maxRetriesPerRequest: null,
});

redis.on("connect", () => {
  console.log("✅ Redis Connected");
});

redis.on("error", (err) => {
  console.log("❌ Redis Error:", err);
});
