export default defineEventHandler((event) => {
  return event.context.prisma.department.findMany();
});
