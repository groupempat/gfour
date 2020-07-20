
const { hashed } = require("../../helpers");
const { Book } = require("../../models");
module.exports = {
  getAllBook: async (req, res) => {
    try {
      const results = await Book.find().populate("_id");
      res.render("allbooks.ejs", {
        results
      });
      console.log(results);
    } catch (error) {
      console.log(error);
    }
  },
}