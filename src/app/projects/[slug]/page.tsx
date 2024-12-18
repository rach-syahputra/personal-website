import ProjectDetail from './_components/project-detail'

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  // const project = projects.find((project) => project.id === id)

  return (
    <>
      <ProjectDetail slug={slug} />
    </>
  )
}
