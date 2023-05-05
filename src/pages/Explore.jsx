/* eslint-disable react-hooks/exhaustive-deps */
import { SideNavBar } from '../components/layouts/SideNavBar';
import { TopBar } from '../components/TopBar';
// import { SearchBar } from '../components/SearchBar';
// import { WhoToFollow } from '../components/cards/WhoToFollow';
import { STATUSES } from '../utilities/statusesConstants';
import { getAllPosts } from '../features/post/postSlice';
// import { setExplorePosts } from '../features/post/postSlice';
// import { sortByCategories } from '../utilities/utils';
import { useCrudToast } from '../hooks/useCrudToast';
import { useBookmarkToast } from '../hooks/useBookmarkToast';
import { useLikeToast } from '../hooks/useLikeToast';
import {
  Box,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MobileMenu } from '../components/layouts/MobileMenu';
import { CreatePostModal } from '../components/CreatePostModal';
export const Explore = () => {
  // const explorePosts = useSelector(state => state.post.explorePosts);
  
  // const allPosts = useSelector(state => state.post.allPosts);
  // const allPostsStatus = useSelector(state => state.post.allPostsStatus);
  const postModalState = useSelector(state => state.postModal);
  // const authState = useSelector(state => state.auth);
  // const currentUserId = authState.userData.uid;
  const dispatch = useDispatch();
  // const [currentCategory, setCurrentCategory] = useState('Trending');

  useEffect(() => {
    dispatch(getAllPosts('newest'));
  }, [postModalState.status == STATUSES.SUCCESS]);

  // useEffect(() => {
  //   if (allPostsStatus == 'success') {
  //     dispatch(setExplorePosts(sortByCategories(allPosts, currentCategory)));
  //   }
  // }, [allPostsStatus == 'success', currentCategory]);

  //use-Effect Toasts
  useCrudToast();
  useLikeToast();
  useBookmarkToast();

  return (
    <Container maxWidth="100vw" padding={0}>
      <TopBar />
      <Grid
        templateColumns={['0.9fr', '0.9fr', '0.9fr', '1fr 3fr 1.5fr']}
        gap="1"
        justifyContent="center"
        marginTop="5rem"
      >
        <Box
          as={GridItem}
          position="sticky"
          top="86px"
          left="10px"
          height="max-content"
          display={['none', 'none', 'none', 'block']}
        >
          <SideNavBar />
        </Box>

       
        {/* <Box
          as={GridItem}
          position="sticky"
          top="86px"
          right="10px"
          height="max-content"
          display={['none', 'none', 'none', 'block']}
        >
          <SearchBar />
          <WhoToFollow />
        </Box> */}
        <Box display={['block', 'block', 'none']}>
          <CreatePostModal />
        </Box>
        <MobileMenu />
      </Grid>
    </Container>
  );
};
