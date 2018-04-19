const io = require('socket.io-client')
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const auth = require('@feathersjs/authentication-client')
const socket = io('api.localhost')
export const client = feathers().configure(socketio(socket)).configure(auth({
  storage: window.localStorage
}))
