import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { tweetsSelector } from '@/store/slices/tweets.slice';
import { authSelector } from '@/store/slices/auth.slice';
import { errorSelector, removeError } from '@/store/slices/error.slice';
import { getTweets } from '@/store/thunks/tweetsThunks';

import Header from '@/components/Header';
import SectionTwo from '@/components/sections/SectionTwo';
import ErrorDialog from '@/components/UI/Dialogs/ErrorDialog';

import type { AppDispatch } from '@/store/types';

function ProfilePage() {
  const tweets = useSelector(tweetsSelector);
  const authStore = useSelector(authSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleErrorModalClose = () => {
    dispatch(removeError());
  };

  useEffect(() => {
    dispatch(getTweets(authStore.user?.id));
  }, [dispatch]);

  return (
    <main>
      <Header />
      <SectionTwo tweets={tweets} editable />
      {error.isError && (
        <ErrorDialog
          showDialog={error.isError}
          message={error.errorMessage}
          handleModalClose={handleErrorModalClose}
        />
      )}
    </main>
  );
}

export default ProfilePage;
