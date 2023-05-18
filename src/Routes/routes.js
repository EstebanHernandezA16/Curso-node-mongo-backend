import express from 'express'
import { messagesRoutes } from './messagesRoutes.js'

export const routes = (server)=>{
  server.use('/message', messagesRoutes)
 
}