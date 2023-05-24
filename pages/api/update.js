import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, title, description, view, code, lang } = req.body;

    try {
      const existingSnippet = await prisma.project.findUnique({
        where: { id },
      });

      if (!existingSnippet) {
        return res.status(404).json({ error: 'Snippet not found' });
      }

      const updatedSnippet = await prisma.project.update({
        where: { id },
        data: {
          title,
          description,
          view,
          code,
          lang,
        },
      });

      res.status(200).json(updatedSnippet);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

