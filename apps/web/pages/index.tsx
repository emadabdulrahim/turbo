import { GetStaticProps } from "next";
import NextLink from "next/link";
import * as React from "react";
import { Container, Heading, HStack, Link, Text, VStack } from "ui";
import { notionClient } from "../lib/notion";

const PostPreview = ({ title, intro, id }) => {
  return (
    <VStack
      space='3'
      css={{
        "& + &": {
          marginTop: "$6",
          paddingTop: "$6",
          borderTop: "1px solid $borderMuted",
        },
      }}
    >
      <NextLink as={`/blog/${id}`} href='/blog/[id]'>
        <Heading size='6'>{title}</Heading>
      </NextLink>
      <Text>{intro}</Text>
    </VStack>
  );
};

export default function Web({ morningPages }) {
  console.log(
    "🚀 ~ file: index.tsx ~ line 23 ~ Web ~ morningPages",
    morningPages
  );

  const recentsPosts = morningPages.results.slice(0, 5);
  return (
    <div>
      <Container size='wide' css={{ py: "$10" }}>
        <HStack space='8' css={{ justifyContent: "space-between" }}>
          <VStack
            space='5'
            css={{
              maxWidth: 380,
              pr: "$8",
              borderRight: "1px solid $borderMuted",
            }}
          >
            <Heading size='8'>
              Emad Abdulrahim — Designer <em>&</em> Engineer <br />
              based in San Francisco.
            </Heading>
            <Text>
              I often go by Moody. My mom is responsible for that nickname since
              I was five. I love her.
            </Text>
            <Text>
              I work at the intersection of design and engineering. I pay close
              attention to typography, visual hierarchy, and interaction design.
            </Text>
            <Text>
              I’m currently a design engineer at{" "}
              <Link href='//ashbyhq.com' appearance='inline'>
                Ashby.
              </Link>
            </Text>
          </VStack>
          <VStack css={{ flex: "1 1 0%", maxWidth: 600, mt: "$5" }} space='5'>
            <Heading size='1'>
              Design <em>&</em> Code
            </Heading>
            {recentsPosts.map((post) => (
              <PostPreview
                key={post.id}
                intro=''
                title={post.properties.Name.title[0].text.content}
                id={post.id}
              />
            ))}
          </VStack>
        </HStack>
      </Container>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const morningPages = await notionClient.databases.query({
    database_id: "98f4ec3be2454107ab6018f3ad5a6d14",
  });

  return {
    props: {
      morningPages,
    },
  };
};
