export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let dept = null;

  if (body.department && body.description && body.services)
    await event.context.prisma.department
      .create({
        data: {
          department: body.department,
          description: body.description,
          services: body.services,
        },
      })
      .then((response) => {
        dept = response;
      });
  return {
    dept,
  };
});
