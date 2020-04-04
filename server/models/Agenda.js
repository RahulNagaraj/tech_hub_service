import mongoose from 'mongoose'

const Schema = mongoose.Schema
const agendaSchema = new Schema({})

const Agenda = mongoose.model('Agenda', agendaSchema)
export { Agenda, agendaSchema }
