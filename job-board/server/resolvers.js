export const mockResolvers = {
  Query:{
    greeting: () => "hello there friend, welcome to the job board!",
    job: () => ({
      title: "Software Engineer",
      name: "Real_company",
      description: "This is da cool job",
      id: "real-id-1",
    })
  }
}