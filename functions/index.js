const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
let logger = require('morgan')
const bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({ extended: false })
const stripe = require('stripe')(
  'sk_test_51KL9f2SE1jfTQHP7cst3RWZQulHy92EcC02MP0gE0NYzxmqCafUH4MPRkeuNzerVDnSuHliEVYRQRpw32ewOEdLx005BskWNme',
)

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(
  cors({
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  }),
)
app.use(express.json())

app.get('/', (req, res) => res.status(200).send('HELLO'))



app.post('/payments/create', async (req, res) => {
  const total = req.query.total
  console.log(total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })
  console.log(paymentIntent.client_secret)
  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  })
})

exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-bd2b2/us-central1/api
