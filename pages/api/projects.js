import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  const { method } = req
  let project;

  switch(method) {
    case 'GET':
      project = await prisma.project.findMany()
      res.status(201).json(project)
      break
    case 'DELETE':
      const { id } = req.body
      project = await prisma.project.delete({
        where: { id: parseInt(id) }
      })
      res.status(201).json(project)
      break
    case 'POST':
      const { title, description, view, code, lang} = req.body
      project = await prisma.project.create({
        data: {
          title, description, view, code, lang
        }
      })
      res.status(201).json(project)
      break
    default:
      res.setHeader('Allow', ['GET', 'DELETE', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
