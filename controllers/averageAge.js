const User = require("../day17")
async function averageAgeOfUsers(req, res) {
  try {
    
    const result = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" }
        }
      }
    ]);
    const averageAge = result[0].averageAge;
    res.json({ averageAge });
  } catch (error) {
    console.error("Error calculating average age:", error);
    res.status(500).json({ error: "An error occurred while calculating the average age" });
  }
}
module.exports = averageAgeOfUsers;
