import dotenv from 'dotenv';
dotenv.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const config = {
	SESSION_ID: process.env.SESSION_ID || 'XSTRO_23_70_54',
	PREFIX: process.env.PREFIX || '+',
	SUDO: process.env.SUDO || '919064560840',
	BOT_INFO: process.env.BOT_INFO || 'Astro;Xstro_Bot',
	STICKER_PACK: process.env.STICKER_PACK || 'Xstro;Md',
	WARN_COUNT: process.env.WARN_COUNT || 3,
	CAPTION: 'ʙʏ akash ᴍᴅ 𝟸𝟶𝟸𝟺',
	TIME_ZONE: process.env.TZ || process.env.TIME_ZONE || 'Africa/Lagos',
	VERSION: require('./package.json').version,
};

export default config;
