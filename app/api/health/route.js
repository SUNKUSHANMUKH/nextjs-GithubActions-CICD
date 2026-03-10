export async function GET() {

  return Response.json({
    status: "healthy",
    service: "nextjs-devops-demo",
    time: new Date().toISOString()
  });

}