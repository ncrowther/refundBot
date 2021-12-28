const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// API calls
app.get('/api/writeComment', async (req, res) => {
  console.log('Received refund request...' + req.query.ticketNumber + ':' + req.query.paymentType + ':' + req.query.amount + ':' + req.query.reason)

  if (req.query.ticketNumber === null || req.query.ticketNumber === '' || req.query.ticketNumber === 'X123456') {
    res.send({ response: '01: InvalidTicketNumber' })
  } else if (req.query.paymentType === null || req.query.paymentType === '' || req.query.paymentType !== 'Card') {
    res.send({ response: '02: Invalid payment type' })
  } else if (req.query.amount === null || req.query.amount === '' || req.query.amount > 1000) {
    res.send({ response: '03: Invalid amount' })
  } else if (req.query.reason === null || req.query.reason === '') {
    res.send({ response: '04: Reason required' })
  } else {
    const randNo = Math.floor((Math.random() * 10) + 1)

    if (randNo < 7) {
      res.send({ response: '00: Ticket refunded' })
    } else {
      res.send({ response: '98: Refund error' })
    }
  }
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files

  // For dev
  // app.use(express.static(path.join(__dirname, 'client/build')));

  // For prod
  app.use(express.static(`${__dirname}/ui-react/build`))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui-react/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
