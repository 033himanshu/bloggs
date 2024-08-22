import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../store/postSlice'
import { useEffect, useMemo, useState } from 'react'
import appwriteService from '../appwrite/config'

export const useAllPosts = () => {
    const dispatch = useDispatch()
    const allPostsFromState = useSelector(state => state.post.allPosts)
    const isSet = useSelector(state => state.post.isSet)
    const [allPosts, setAllPosts] = useState(allPostsFromState)
    useEffect(()=> {
        const fetchPosts = async () => {
            if(!isSet){
                console.log("function called atleast")
                const fetchedPosts = (await appwriteService.getPosts()).documents
                dispatch(setPosts({allPosts : fetchedPosts}))
                setAllPosts(fetchedPosts)
            }else{
                setAllPosts(allPostsFromState)
            }
        }
        fetchPosts()
    },[dispatch, isSet, allPostsFromState]);
    // console.log("This is called")
    // console.log(allPosts)
    return allPosts;
}