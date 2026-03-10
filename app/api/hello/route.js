export async function GET() {

  return Response.json({
    message: "Application is running successfully 🎉",
    timestamp: new Date().toISOString()
  });

}