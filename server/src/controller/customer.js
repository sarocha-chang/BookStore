const Book = require("../../config/model/Book");
const Customer = require("../../config/model/Customer");
const Buy = require("../../config/model/Buy");
const Receipt = require("../../config/model/Receipt");

const getCart = require("./function/getCart");
const run = require("./function/pay");

module.exports = {
  add_cart: async (request, response) => {
    Book_id = request.body.Book_id;
    Customer_id = request.body.Customer_id;
    NewQuantity = request.body.quantity;
    let data = await Buy.find()
    let find = data.filter(p =>(p.Book_id === Book_id))

    let book = await Book.findById(Book_id).catch((err) => {
      response.status(404).json("Not found!!");
    });

    if (book.quantity < request.body.quantity) {
      response
        .status(400)
        .json(`Stock not enough. there have this book = ${book.quantity}`);
    } if(find.length !== 0){
      console.log('มี')
      let data = await Buy.find({Book_id})
      OldQuantity = data[0].quantity
      console.log(data[0].quantity)
      let update_buy = await Buy.findOneAndUpdate({Book_id},{quantity:parseInt(OldQuantity)+parseInt(NewQuantity)},{new: true});
      console.log(update_buy)
    }else {
      let buy = new Buy({
        Book_id: book._id,
        quantity: request.body.quantity,
        total: request.body.quantity * book.price,
      });
      let buy_success = await buy.save();

      let receipt = new Receipt({
        Customer_id: Customer_id,
        Buy_id: buy_success._id,
      });

      await receipt.save().then((data) => {
        response.status(200).json(data);
      });
    }
  },
  change_quantity_in_cart: (request, response) => {
    const { id } = request.params;
    Buy.findById(id)
      .then((buy) => {
        Book.findById(buy.Book_id)
          .then((book) => {
            if (book.quantity >= request.body.quantity) {
              Buy.findByIdAndUpdate(
                id,
                {
                  quantity: request.body.quantity,
                  total: book.price * request.body.quantity,
                },
                { new: true }
              )
                .then((data) => {
                  response.status(200).json(data);
                })
                .catch((err) => {
                  if (err) response.status(400).json("Bad Request");
                });
            } else {
              response
                .status(400)
                .json(
                  `Stock not enough. there have this book = ${book.quantity}`
                );
            }
          })
          .catch((err) => {
            if (err) response.status(400).json("Bad Request");
          });
      })
      .catch((err) => {
        if (err) response.status(400).json("Bad Request");
      });
  },
  delete_cart_item: (request, response) => {
    const { id } = request.params;
    Buy.findByIdAndDelete(id).then((buy) => {
      Receipt.findOneAndDelete({ Buy_id: id }).then((receipt) => {
        response.status(200).json({ buy, receipt });
      });
    });
  },
  get_cart: (request, response) => {
    const { id } = request.params;
    getCart(id)
      .then((cart) => {
        response.status(200).json(cart);
      })
      .catch((err) => {
        response.status(404).json(err);
      });
  },
  payment: async (request, response) => {
    const { id } = request.params;
    let x = await run(id);
    response.status(200).json(x);
  },
};
