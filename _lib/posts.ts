import prisma from "@/_lib/prisma";

export const getAllPosts = async () => {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
};

export const getRecentPosts = async () => {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });
};