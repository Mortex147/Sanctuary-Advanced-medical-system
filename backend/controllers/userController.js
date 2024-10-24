const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.registerUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        role,
      },
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: "User already exists" });
  }
};

exports.loginUser = async (req, res) => {
  // Logic to authenticate user
};
