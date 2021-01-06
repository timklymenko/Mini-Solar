var express = require('express')
var app = express()

var S = require('string')

// socket
const net = require('net')
var HOST = '127.0.0.1'
var PORT = 5206
var client = new net.Socket()

//delay
const Sleep = require('sleep')

// cors
const cors = require('cors')
app.use(cors())

// API
app.listen(3001, (data) => {
  console.log('Server running on port 3001')
})
// while (true) {
//   app.read()
// }

let datalist = []
let temp = 23.7

// socket.connect(PORT, 'localhost')
// socket.once('connect', () => {
//   client = new HL7Client(socket)
//   client
//     .close()
//     .then(() => client.connect(5206))
//     .then(() => client.close())
//     .then(() => done())
//     .catch((e) => done(e))
// })

// socketing
client.connect(PORT, HOST, () => {
  console.log(`client connected to ${HOST}:${PORT}`)
})
client.on('data', (data) => {
  function time() {
    let date_ob = new Date()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()
    return hours + ':' + minutes + ':' + seconds
  }
  tmp = '' + temp
  temp += 1

  time = time()
  blueID = 'A1'
  intensity = '24.2'
  Data = '["' + intensity + '","' + tmp + '","' + time + '","' + blueID + '"]'
  datalist.unshift(Data)
  json = '['
  flag = 0
  datalist.forEach(function (item, index, array) {
    if (flag) json += ','
    json += item
    flag = 1
  })
  json += ']'
  app.get('/data', (req, res, next) => {
    res.send(json)
  })
})

function time() {
  let date_ob = new Date()
  let hours = date_ob.getHours()
  let minutes = date_ob.getMinutes()
  let seconds = date_ob.getSeconds()
  return hours + ':' + minutes + ':' + seconds
}

string = [
  {
    type: 'header',
    version: '4.9.5',
    comment: 'Export to JSON plugin for PHPMyAdmin',
  },
  { type: 'database', name: 'test' },
  {
    type: 'table',
    name: 'test',
    database: 'test',
    data: [
      {
        id: '1',
        time: '2020-10-29 15:30:07',
        bluetooth_id: '1',
        intensity: '1.00',
        temperature: '1.00',
      },
      {
        id: '2',
        time: '2020-10-29 04:34:28',
        bluetooth_id: '1',
        intensity: '19.00',
        temperature: '20.00',
      },
      {
        id: '3',
        time: '2020-10-29 04:36:22',
        bluetooth_id: '1',
        intensity: '19.00',
        temperature: '20.00',
      },
      {
        id: '4',
        time: '2020-10-29 21:09:36',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '22.27',
      },
      {
        id: '5',
        time: '2020-10-29 21:09:38',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '22.27',
      },
      {
        id: '6',
        time: '2020-10-29 21:09:40',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '31.00',
        temperature: '22.27',
      },
      {
        id: '7',
        time: '2020-10-29 21:09:42',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '22.30',
      },
      {
        id: '8',
        time: '2020-10-29 21:09:44',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '22.30',
      },
      {
        id: '9',
        time: '2020-10-29 21:09:46',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '31.00',
        temperature: '22.33',
      },
      {
        id: '10',
        time: '2020-10-29 21:09:49',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '28.00',
        temperature: '22.33',
      },
      {
        id: '11',
        time: '2020-10-29 21:09:51',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '22.33',
      },
      {
        id: '12',
        time: '2020-10-29 21:09:53',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '22.33',
      },
      {
        id: '13',
        time: '2020-10-29 21:09:55',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '22.33',
      },
      {
        id: '14',
        time: '2020-10-29 21:09:57',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '22.43',
      },
      {
        id: '15',
        time: '2020-10-29 21:10:00',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '28.00',
        temperature: '22.40',
      },
      {
        id: '16',
        time: '2020-10-29 21:10:02',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '22.40',
      },
      {
        id: '17',
        time: '2020-10-29 21:10:04',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '31.00',
        temperature: '22.40',
      },
      {
        id: '18',
        time: '2020-10-29 21:10:36',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '22.40',
      },
      {
        id: '19',
        time: '2020-10-29 21:10:36',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '22.46',
      },
      {
        id: '20',
        time: '2020-10-29 21:10:36',
        bluetooth_id: '',
        intensity: '31.00',
        temperature: '22.46',
      },
      {
        id: '21',
        time: '2020-10-29 21:10:37',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '22.46',
      },
      {
        id: '22',
        time: '2020-10-29 21:10:37',
        bluetooth_id: '',
        intensity: '31.00',
        temperature: '22.49',
      },
      {
        id: '23',
        time: '2020-10-29 21:10:38',
        bluetooth_id: '',
        intensity: '32.00',
        temperature: '22.49',
      },
      {
        id: '24',
        time: '2020-10-29 21:10:38',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '22.49',
      },
      {
        id: '25',
        time: '2020-10-29 21:10:39',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '22.55',
      },
      {
        id: '26',
        time: '2020-10-29 21:10:39',
        bluetooth_id: '',
        intensity: '31.00',
        temperature: '22.55',
      },
      {
        id: '27',
        time: '2020-10-29 21:10:39',
        bluetooth_id: '',
        intensity: '28.00',
        temperature: '22.62',
      },
      {
        id: '28',
        time: '2020-10-29 21:10:40',
        bluetooth_id: '',
        intensity: '63.00',
        temperature: '22.59',
      },
      {
        id: '29',
        time: '2020-10-29 21:19:36',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.12',
      },
      {
        id: '30',
        time: '2020-10-29 21:19:40',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.15',
      },
      {
        id: '31',
        time: '2020-10-29 21:19:45',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.15',
      },
      {
        id: '32',
        time: '2020-10-29 21:19:47',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.15',
      },
      {
        id: '33',
        time: '2020-10-29 21:19:49',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.18',
      },
      {
        id: '34',
        time: '2020-10-29 21:19:51',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.18',
      },
      {
        id: '35',
        time: '2020-10-29 21:19:53',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.18',
      },
      {
        id: '36',
        time: '2020-10-29 21:19:56',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.18',
      },
      {
        id: '37',
        time: '2020-10-29 21:19:58',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.15',
      },
      {
        id: '38',
        time: '2020-10-29 21:20:00',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.15',
      },
      {
        id: '39',
        time: '2020-10-29 21:20:02',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.15',
      },
      {
        id: '40',
        time: '2020-10-29 21:20:04',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.15',
      },
      {
        id: '41',
        time: '2020-10-29 21:20:07',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.12',
      },
      {
        id: '42',
        time: '2020-10-29 21:20:09',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.12',
      },
      {
        id: '43',
        time: '2020-10-29 21:20:11',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '23.12',
      },
      {
        id: '44',
        time: '2020-10-29 21:20:13',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '59.00',
        temperature: '23.18',
      },
      {
        id: '45',
        time: '2020-10-29 21:20:15',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '48.00',
        temperature: '24.19',
      },
      {
        id: '46',
        time: '2020-10-29 21:20:18',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '49.00',
        temperature: '25.11',
      },
      {
        id: '47',
        time: '2020-10-29 21:20:20',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '47.00',
        temperature: '25.64',
      },
      {
        id: '48',
        time: '2020-10-29 21:20:22',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '50.00',
        temperature: '26.15',
      },
      {
        id: '49',
        time: '2020-10-29 21:20:24',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '33.00',
        temperature: '26.15',
      },
      {
        id: '50',
        time: '2020-10-29 21:20:26',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '28.00',
        temperature: '25.89',
      },
      {
        id: '51',
        time: '2020-10-29 21:20:29',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '28.00',
        temperature: '25.77',
      },
      {
        id: '52',
        time: '2020-10-29 21:20:31',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '28.00',
        temperature: '25.67',
      },
      {
        id: '53',
        time: '2020-10-29 21:20:33',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '27.00',
        temperature: '25.55',
      },
      {
        id: '54',
        time: '2020-10-29 21:20:35',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '25.48',
      },
      {
        id: '55',
        time: '2020-10-29 21:20:37',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '31.00',
        temperature: '25.39',
      },
      {
        id: '56',
        time: '2020-10-29 21:20:40',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '25.33',
      },
      {
        id: '57',
        time: '2020-10-29 21:20:42',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '25.23',
      },
      {
        id: '58',
        time: '2020-10-29 21:20:44',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '25.14',
      },
      {
        id: '59',
        time: '2020-10-29 21:20:46',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '31.00',
        temperature: '25.07',
      },
      {
        id: '60',
        time: '2020-10-29 21:20:48',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '25.04',
      },
      {
        id: '61',
        time: '2020-10-29 21:20:51',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '24.98',
      },
      {
        id: '62',
        time: '2020-10-29 21:20:55',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '24.85',
      },
      {
        id: '63',
        time: '2020-10-29 21:20:57',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '24.82',
      },
      {
        id: '64',
        time: '2020-10-29 21:21:00',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '24.79',
      },
      {
        id: '65',
        time: '2020-10-29 21:21:04',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '24.73',
      },
      {
        id: '66',
        time: '2020-10-29 21:21:06',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '31.00',
        temperature: '24.70',
      },
      {
        id: '67',
        time: '2020-10-29 21:21:08',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '24.66',
      },
      {
        id: '68',
        time: '2020-10-29 21:21:11',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '24.66',
      },
      {
        id: '69',
        time: '2020-10-29 21:21:13',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '24.63',
      },
      {
        id: '70',
        time: '2020-10-29 21:21:15',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '28.00',
        temperature: '24.60',
      },
      {
        id: '71',
        time: '2020-10-29 21:21:17',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '31.00',
        temperature: '24.57',
      },
      {
        id: '72',
        time: '2020-10-29 21:21:22',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '30.00',
        temperature: '24.51',
      },
      {
        id: '73',
        time: '2020-10-29 21:21:24',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '24.48',
      },
      {
        id: '74',
        time: '2020-10-29 21:21:26',
        bluetooth_id: '0x546C0E4D6786',
        intensity: '29.00',
        temperature: '24.44',
      },
      {
        id: '75',
        time: '2020-10-29 21:29:43',
        bluetooth_id: '',
        intensity: '30.00',
        temperature: '24.41',
      },
      {
        id: '76',
        time: '2020-10-29 21:29:44',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.38',
      },
      {
        id: '77',
        time: '2020-10-29 21:29:44',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.35',
      },
      {
        id: '78',
        time: '2020-10-29 21:29:45',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.32',
      },
      {
        id: '79',
        time: '2020-10-29 21:29:45',
        bluetooth_id: '',
        intensity: '33.00',
        temperature: '24.32',
      },
      {
        id: '80',
        time: '2020-10-29 21:29:45',
        bluetooth_id: '',
        intensity: '30.00',
        temperature: '24.32',
      },
      {
        id: '81',
        time: '2020-10-29 21:29:46',
        bluetooth_id: '',
        intensity: '31.00',
        temperature: '24.29',
      },
      {
        id: '82',
        time: '2020-10-29 21:29:46',
        bluetooth_id: '',
        intensity: '33.00',
        temperature: '24.29',
      },
      {
        id: '83',
        time: '2020-10-29 21:29:47',
        bluetooth_id: '',
        intensity: '38.00',
        temperature: '24.29',
      },
      {
        id: '84',
        time: '2020-10-29 21:29:47',
        bluetooth_id: '',
        intensity: '39.00',
        temperature: '24.29',
      },
      {
        id: '85',
        time: '2020-10-29 21:29:47',
        bluetooth_id: '',
        intensity: '33.00',
        temperature: '24.26',
      },
      {
        id: '86',
        time: '2020-10-29 21:29:48',
        bluetooth_id: '',
        intensity: '32.00',
        temperature: '24.26',
      },
      {
        id: '87',
        time: '2020-10-29 21:29:48',
        bluetooth_id: '',
        intensity: '36.00',
        temperature: '24.22',
      },
      {
        id: '88',
        time: '2020-10-29 21:29:49',
        bluetooth_id: '',
        intensity: '32.00',
        temperature: '24.22',
      },
      {
        id: '89',
        time: '2020-10-29 21:29:49',
        bluetooth_id: '',
        intensity: '33.00',
        temperature: '24.19',
      },
      {
        id: '90',
        time: '2020-10-29 21:29:50',
        bluetooth_id: '',
        intensity: '28.00',
        temperature: '24.22',
      },
      {
        id: '91',
        time: '2020-10-29 21:29:50',
        bluetooth_id: '',
        intensity: '28.00',
        temperature: '24.22',
      },
      {
        id: '92',
        time: '2020-10-29 21:29:50',
        bluetooth_id: '',
        intensity: '28.00',
        temperature: '24.19',
      },
      {
        id: '93',
        time: '2020-10-29 21:29:51',
        bluetooth_id: '',
        intensity: '27.00',
        temperature: '24.16',
      },
      {
        id: '94',
        time: '2020-10-29 21:29:51',
        bluetooth_id: '',
        intensity: '28.00',
        temperature: '24.16',
      },
      {
        id: '95',
        time: '2020-10-29 21:29:52',
        bluetooth_id: '',
        intensity: '31.00',
        temperature: '24.13',
      },
      {
        id: '96',
        time: '2020-10-29 21:29:52',
        bluetooth_id: '',
        intensity: '31.00',
        temperature: '24.13',
      },
      {
        id: '97',
        time: '2020-10-29 21:29:52',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.10',
      },
      {
        id: '98',
        time: '2020-10-29 21:29:53',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.10',
      },
      {
        id: '99',
        time: '2020-10-29 21:29:53',
        bluetooth_id: '',
        intensity: '31.00',
        temperature: '24.07',
      },
      {
        id: '100',
        time: '2020-10-29 21:29:54',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.03',
      },
      {
        id: '101',
        time: '2020-10-29 21:29:54',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.03',
      },
      {
        id: '102',
        time: '2020-10-29 21:29:54',
        bluetooth_id: '',
        intensity: '29.00',
        temperature: '24.03',
      },
      {
        id: '103',
        time: '2020-10-29 21:29:55',
        bluetooth_id: '',
        intensity: '33.00',
        temperature: '24.00',
      },
    ],
  },
]
