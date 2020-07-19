const {hashed} = require("../../helpers");
const { Book } = require("../../models");

module.exports = {
  getAllBook: async(req,res) => {
    try {
      const result = await Book.find().populate("userID");

      res.send({message:"all data book", data:result});
    } catch(error){
      console.log(error);
    }
  },
  getByUserID: async (req, res) => {
    try{
      const {UserID} = req.params;
      const result = await Book.find({UserID}).populate("UserID");
      res.send({ message: "get by userID succes", data:result});
    } catch(error) {
      console.log(error);
    }
  },
    addBook: async (req, res) => {
        const { title, price, quantity, author } = req.body;
    
        try {
          const result = await Book.create({
            ...req.body,
          });
        
          res.send({
            message: `Post data success`,
            result: result,
          });
        } catch (error) {
          res.send(error);
        }
      },
 
      updateBook: async (req, res) => {
        const {id} = req.params;
        const { title, price, quantity, author } = req.body;
    try {
      const result = await Book.update({
        title: title,
        price: price,
        quantity: quantity,
        author: author,
      }, 
        {
          where:{
            _id:id,
          },
        }
        );
      res.send({
        message: "data berhasil di update",
        result: result,
      });
    } catch(error) {
  
      res.send(error);
    }
      },
deleteBook: async (req, res) => {
        const {id} = req.params;
        try{
          const result = await Book.deleteOne({_id: id});
          res.send({
            message: "Data berhasil dihapus",
            result:result,
          });
        }catch(error){
          console.log(error);
          res.send(error);
        }
      }, 
};
