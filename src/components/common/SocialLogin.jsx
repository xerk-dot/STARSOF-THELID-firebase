import { FacebookFilled, FacebookOutlined, GithubFilled, GoogleOutlined, InstagramFilled, RedditOutlined, RedditSquareFilled, TwitterCircleFilled, TwitterOutlined } from '@ant-design/icons';
import PropType from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signInWithFacebook, signInWithGithub, signInWithGoogle, signInWithTwitter, signInWithInstagram, signInWithReddit} from '@/redux/actions/authActions';
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

  const onSignInWithTwitter = () => {
    dispatch(signInWithTwitter());
  };

  const onSignInWithInstagram = () => {
    dispatch(signInWithInstagram());
  };

  const onSignInWithReddit = () => {
    dispatch(signInWithReddit());
  };

  


  return (
    <div className="auth-provider">

    <AwesomeButton
      type="twitter" // Set button type (e.g., primary, secondary)
      disabled={isLoading}
      onPress={onSignInWithTwitter}
    >
        <TwitterOutlined style={{ fontSize: '26px'}}/>

        <div className="white-text">  Continue with Twitter </div>
    </AwesomeButton>
    <AwesomeButton
      type="messenger"
      disabled={isLoading}
      onPress={onSignInWithGoogle}
    >
      <GoogleOutlined style={{ fontSize: '26px'}}/>
      <div className="white-text">  Continue with Google </div>
    </AwesomeButton>


    <AwesomeButton
      type="facebook"
      disabled={isLoading}
      onPress={onSignInWithFacebook}
    >
      <FacebookFilled style={{ fontSize: '26px'}}/>
      
      
      <div className="white-text">  Continue with Facebook </div>
    </AwesomeButton>


    <AwesomeButton
      type="reddit" // Set button type (e.g., primary, secondary)
      disabled={isLoading}
      onPress={onSignInWithReddit}
    >
        <RedditOutlined style={{ fontSize: '26px'}}/>

        <div className="white-text">  Continue with Reddit </div>
        </AwesomeButton>

        
    <AwesomeButton
      type="github"
      disabled={isLoading}
      onPress={onSignInWithGithub}
    >
      <GithubFilled style={{ fontSize: '26px'}}/>
      <div className="white-text">  Continue with Github </div>
    </AwesomeButton>



      <AwesomeButton
      type="instagram" // Set button type (e.g., primary, secondary)
      disabled={isLoading}
      onPress={onSignInWithInstagram}
    >
        <InstagramFilled style={{ fontSize: '26px'}}/>

        <div className="white-text">  Continue with Instagram </div>
        </AwesomeButton>

  

    </div>
  );
};

SocialLogin.propTypes = {
  isLoading: PropType.bool.isRequired
};

export default SocialLogin;
