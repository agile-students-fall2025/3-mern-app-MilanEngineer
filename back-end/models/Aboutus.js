const mongoose = require('mongoose')
const Schema = mongoose.Schema

const aboutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
     image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const AboutUs = mongoose.model('Aboutus', aboutSchema)

// export the model so other modules can import it
module.exports = {
  AboutUs,
}
