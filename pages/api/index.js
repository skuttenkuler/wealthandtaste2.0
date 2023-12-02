import { artists } from '../../data/artists'

export default function handler(req, res) {
  return res.status(200).json(artists)
}