import { GetStaticPaths } from "next";
import * as React from "react";
import { Box, Text, VStack } from "ui";
import { notionClient } from "../../lib/notion";

const Post = ({ page, block }) => {
  console.log("🚀 ~ file: [id].tsx ~ line 7 ~ Post ~ block", block);
  console.log("🚀 ~ file: [id].tsx ~ line 7 ~ Post ~ page", page);
  return (
    <Box>
      <VStack space='5'>
        {block.results.map((content) => (
          <Text key={content.id}>
            {content.paragraph?.text[0]?.text.content}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const morningPages = await notionClient.databases.query({
    database_id: "98f4ec3be2454107ab6018f3ad5a6d14",
  });

  const paths = morningPages.results.map((page) => ({
    params: { id: page.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(
    "🚀 ~ file: [id].tsx ~ line 15 ~ getStaticProps ~ pathname",
    params.id
  );
  const page = await notionClient.pages.retrieve({
    page_id: params.id,
  });
  const block = await notionClient.blocks.children.list({
    block_id: params.id,
  });
  console.log("🚀 ~ file: [id].tsx ~ line 33 ~ getStaticProps ~ page", page);

  return {
    props: { page, block },
  };
};

export default Post;
