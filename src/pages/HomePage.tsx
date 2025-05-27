import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { AuthDialogProvider } from '@/contexts/AuthDialogContext';
import { getTweets } from '@/store/thunks/tweetsThunks';
import { tweetsSelector } from '@/store/slices/tweets.slice';
import { errorSelector, removeError } from '@/store/slices/error.slice';

import Header from '@/components/Header';
import SectionOne from '@/components/sections/SectionOne';
import SectionTwo from '@/components/sections/SectionTwo';
import ErrorDialog from '@/components/UI/Dialogs/ErrorDialog';
import AuthDialog from '@/components/UI/Dialogs/AuthDialog';
import CookiesDialog from '@/components/UI/Dialogs/CookiesDialog';

import type { AppDispatch } from '@/store/types';

function HomePage() {
  const error = useSelector(errorSelector);
  const tweets = useSelector(tweetsSelector);
  const dispatch = useDispatch<AppDispatch>();

  const handleErrorModalClose = () => {
    dispatch(removeError());
  };

  useEffect(() => {
    dispatch(getTweets());
  }, [dispatch]);

  return (
    <main>
      <AuthDialogProvider>
        <Header />
        <SectionOne />
        <SectionTwo tweets={tweets} editable={false} />
        <CookiesDialog />
        <AuthDialog />
        {error.isError && (
          <ErrorDialog
            showDialog={error.isError}
            message={error.errorMessage}
            handleModalClose={handleErrorModalClose}
          />
        )}
      </AuthDialogProvider>
    </main>
  );
}

export default HomePage;
