import './database'
import { server } from './config/server'

server.start(() => console.log('Started server'))