const io = require('socket.io-client')
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
export const auth = require('@feathersjs/authentication-client')
const socket = io('api.localhost')
const client = feathers()

client.configure(socketio(socket))
client.configure(auth({
  storage: window.localStorage
}))
