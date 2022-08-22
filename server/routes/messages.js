const router = require("express").Router();
const Message = require("../models/message");

//add

router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get

router.get("/:receiverId/:senderId", async (req, res) => {
  try {
    const messages=await Message.find({
      "receiverId":{$in:[req.params.receiverId,req.params.senderId]},
      "sender":{$in:[req.params.receiverId,req.params.senderId]}
    })
    // console.log(req.params.receiverId,req.params.senderId);
    // const messages1 = await Message.find({
    //   $and:[{"receiverId":req.params.receiverId},
    //     {"senderId":req.params.senderId}]
    // });
    // const messages2 = await Message.find({
    //   $and:[{"receiverId":{$eq:req.params.senderId}},
    //     {"senderId": {$eq:req.params.receiverId}}]
    // });
    // console.log("messages2",messages2);
    // const messages=messages1.concat(messages2);
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;