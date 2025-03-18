import dotenv from 'dotenv';

dotenv.config();

// app
export const NODE_ENV = process.env.NODE_ENV || 'dev';
export const PORT = Number(process.env.APP_PORT) || 4000;
export const SECRETORPRIVATEKEY = process.env.SECRETORPRIVATEKEY || '620a1c23-3561-4d63-8342-7cf0db4e621e';
export const HOSTNAME = process.env.HOSTNAME || `http://localhost:${PORT}`;
export const HOSTWEB = process.env.HOSTWEB || 'http://127.0.0.1:5173';

// email
export const EMAIL = process.env.EMAIL || 'devdepartment884@gmail.com';
export const HOST_EMAIL = process.env.HOST_EMAIL || 'smtp.gmail.com';
export const EMAIL_PORT = process.env.EMAIL_PORT || 465;
export const PASSWORDEMAIL = process.env.PASSWORDEMAIL || 'qlxlzdhsviyucysv';

// database
export const DB = process.env.DB || 'home_assist';
export const HOSTDB = process.env.HOSTDB || 'localhost';
export const USERDB = process.env.USERDB || 'root';
export const PASSWORDDB = process.env.PASSWORDDB || '123456';
export const PORTDB = Number(process.env.PORTDB) || 3306;

// Time Zone
export const TZ = process.env.TZ || 'America/Guayaquil';

// Google keys
export const CLIENT_ID = process.env.CLIENT_ID || '322483511102-cl98u7f3pkv0cu0g7grrufc305i5prh4.apps.googleusercontent.com';

// Google maps
export const KEY_MAPS = process.env.KEY_MAPS || 'AIzaSyBOSr7pxEPCz5II4r80zbv2yZMbNGgRoH0';
export const LANGUAGE = process.env.LANGUAGE || 'es';
export const COMPONENTS = process.env.COMPONENTS || 'country%3Aec';
