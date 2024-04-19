export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let dept = null;

  if (body.title && body.description)
    await event.context.prisma.career
      .create({
        data: {
          title: body.title,
          description: body.description,
        },
      })
      .then((response) => {
        dept = response;
      });
  return {
    dept,
  };
});
