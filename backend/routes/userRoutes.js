// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const prisma = require("../prismaClient"); 
// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // Fetch all users from the database
    res.status(200).json(users); // Return the list of users
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching users" });
  }
});

// Get a specific user by ID
// Get user by ID
// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     Fetch the user from the database
//     const user = await prisma.user.findUnique({
//       where: { id: id }, // No need to convert id to integer
//     });

//     // Return the user data
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });


// Register a new user
router.post("/register", async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error registering user" });
  }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, googleId, createdAt } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id, 10) },
      data: {
        name,
        email,
        googleId,
        createdAt,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating user" });
  }
});

module.exports = router;
