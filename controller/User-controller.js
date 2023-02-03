const UserData = require("../Schema/Register-schema");

const Userdata = {
  async getallData(req, res) {
    try {
      const getAllDatas = await UserData.find();
      res.status(200).json(getAllDatas);
    } catch (err) {
      res.json({ err });
    }
  },
  async findByID(req, res) {
    try {
      const getData = await UserData.findById(req.params.id);
      res.status(200).json(getData);
    } catch (err) {
      res.json({ err });
    }
  },
  async deleteData(req, res) {
    try {
      await UserData.findByIdAndDelete(req.params._id);

      res.status(200).json("Data deleted Succesfully");
    } catch (err) {
      res.status(500).send({ error: "Enter Correct Id" });
    }
  },
  async UpdatData(req, res) {
    try {
      const update = await UserData.findOneAndUpdate(
        req.params._id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.send("updated successfully");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
module.exports = Userdata;
