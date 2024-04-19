export default defineEventHandler((event) => {
  return event.context.prisma.career.findMany();
});
