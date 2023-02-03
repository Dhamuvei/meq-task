const UserData = require("../Schema/Register-schema");
const bcrypt = require("bcryptjs");
const Jwt = require("jsonwebtoken");

const Auth = {
  async Registration(req, res) {
    try {
      console.log(req.body);
      var existEmail = await UserData.findOne({ Email: req.body.Email });
      if (existEmail) {
        return res.status(400).json("Email already Exist Try Other");
      }
      var hash = await bcrypt.hash(req.body.Password, 10);
      const { Username, Email, Number } = req.body;
      const PostUserData = await new UserData({
        Username,
        Email,
        Number,
        Password: hash,
      });
      let Datas = await PostUserData.save();
      res.status(200).json(Datas);
    } catch (err) {
      res.status(500).send(err, "Error Posting data");
    }
  },
  async Login(req, res) {
    try {
      var ValidUser = await UserData.findOne({ Email: req.body.Email });
      if (!ValidUser) {
        return res.status(400).send("Enter Corret Email-Id");
      }
      var ValidPassword = await bcrypt.compare(
        req.body.Password,
        ValidUser.Password
      );
      if (!ValidPassword) {
        res.status(400).send("Enter Valid Password");
      }

      var userToken = Jwt.sign(
        { Email: ValidUser.Email, _id: ValidUser._id },
        process.env.SECRETKEY,
        { expiresIn: "10h" }
      );
      res.send(userToken);
    } catch (err) {}
  },
};
module.exports = Auth;
