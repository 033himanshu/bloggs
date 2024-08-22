import React, {useState, useEffect, useMemo} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import {useAllPosts} from '../util/useAllPosts';

function AllPosts() {
  const posts = useAllPosts()
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts?.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts