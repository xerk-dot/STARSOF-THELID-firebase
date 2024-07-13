import { FacebookFilled, FacebookOutlined, GithubFilled, GoogleOutlined, InstagramFilled } from '@ant-design/icons';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signInWithFacebook, signInWithGithub, signInWithGoogle } from '@/redux/actions/authActions';
import { AwesomeButton } from "react-awesome-button";

const SocialLogin = ({ isLoading }) => {
  const dispatch = useDispatch();

  const onSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const onSignInWithFacebook = () => {
    dispatch(signInWithFacebook());
  };

  const onSignInWithGithub = () => {
    dispatch(signInWithGithub());
  };

  

  


  return (
    <div className="auth-provider">



    <AwesomeButton
      type="facebook"
      disabled={isLoading}
      onPress={onSignInWithFacebook}
    >
      <FacebookFilled style={{ fontSize: '26px'}}/>
      Continue with Facebook
    </AwesomeButton>
    <AwesomeButton
      type="messenger"
      disabled={isLoading}
      onPress={onSignInWithGoogle}
    >
      <GoogleOutlined style={{ fontSize: '26px'}}/>
      Continue with Google
    </AwesomeButton>
    <AwesomeButton
      type="github"
      disabled={isLoading}
      onPress={onSignInWithGithub}
    >
      <GithubFilled style={{ fontSize: '26px'}}/>
      Continue with GitHub
    </AwesomeButton>


      <AwesomeButton
      type="instagram" // Set button type (e.g., primary, secondary)
      disabled={isLoading}
      onPress={onSignInWithFacebook}
    >
        <InstagramFilled style={{ fontSize: '26px'}}/>

        Continue with Instagram
    </AwesomeButton>
    </div>
  );
};

SocialLogin.propTypes = {
  isLoading: PropType.bool.isRequired
};

export default SocialLogin;
