const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)


const router = express.Router()
// const routerChat = express.Router()

const { Schema } = mongoose
const chatContacts = new Schema({
    name: String,
    phone: String,
    status: String,
    chats: [
        {
            id: Number,
            time: String,
            text: String,
            isOwn: Boolean
        }
    ]
})
const Contact = mongoose.model('Contact', chatContacts)

app.set('port', 3000);
app.use(cors())

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});

mongoose.connect('mongodb://localhost:27017/chatdb')
// mongoose.connect('mongodb://db:27017/test')
    .then(db => console.log('[OK] DB is connected'))
    .catch(err => console.error(err));

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

app.use('/api/contacts', router)

router.get('/', async (req, res) => {
    res.json(await Contact.find())
})

router.post('/', async (req, res) => {
    const record = new Contact(req.body)
    await record.save()
    res.json({state: 'success'})
})

router.get('/:id', async (req, res) => {
    res.json(await Contact.findById(req.params.id))
})
router.put('/:id', async (req, res) => {
    await Contact.findByIdAndUpdate(req.params.id, req.body)
    res.json({state: 'updated'})
})

router.delete('/:id', async (req, res) => {
    await Contact.findByIdAndRemove(req.params.id)
    res.json({state: 'deleted'})
})

io.on('connection', socket => {
    console.log('user connected')

    socket.on('connect', name => {
        console.log('--> user connected')
    })

    socket.on('disconnect', () => {
        io.emit('disconnect')
        console.log(`<-- user disconnected`)
    })
})
