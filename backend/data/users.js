import bcrypt from 'bcryptjs';  

const users = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    resume: "/uploads/logo-2.jpg",
    isAdmin: true,
  },
  {
    firstName: 'Sheetal',
    lastName: 'Patil',
    email: 'sheetal@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    resume: "/uploads/resume-1.jpg",
  },
  {
    firstName: 'Charu',
    lastName: 'Sanghvi',
    email: 'charu@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    resume: "/uploads/resume-2.png",
  },
  {
    firstName: 'Sharad',
    lastName: 'Loyal',
    email: 'sharad@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    resume: "/uploads/resume-3.png",
  },
  {
    firstName: 'Varun',
    lastName: 'Mishra',
    email: 'varun@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    resume: "/uploads/resume-4.png",
  },
  {
    firstName: 'Richa',
    lastName: 'Preet',
    email: 'richa@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    resume: "/uploads/resume-5.png",
  },
];

export default users;

