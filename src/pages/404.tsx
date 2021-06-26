import { styled } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const NotFoundWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
`;

const NotFoundStatus = styled('p')`
  font-size: 20rem;
  padding: 2rem;
  border-right: solid black 3px;
  text-shadow: 8px 7px 0px #5dabcd;
  cursor: default;
  user-select: none;
`;

const NotFoundTextWrapper = styled('div')`
  padding: 1.5rem;
  font-size: 1.7rem;
`;

const NotFoundHeader = styled('h1')`
  font-size: 2em;
  text-transform: uppercase;
  cursor: default;
  user-select: none;
`;

const NotFoundParagraph = styled('p')`
  font-size: 1.2em;
  text-transform: capitalize;
  font-weight: bold;
  cursor: default;
  user-select: none;
`;

const NotFoundLinkBack = styled('a')`
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 1rem;
  font-size: 1.2em;
  border-bottom: solid black 1px;
`;

const NotFoundLinkIcon = styled(IoIosArrowBack)`
  margin-right: 0.2rem;
`;

const NotFound: NextPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundStatus>404</NotFoundStatus>
      <NotFoundTextWrapper>
        <NotFoundHeader>sorry !</NotFoundHeader>
        <NotFoundParagraph>
          the page you&apos;re looking for <br /> was not found
        </NotFoundParagraph>
        <NotFoundLinkBack href="/">
          <NotFoundLinkIcon />
          Go Back
        </NotFoundLinkBack>
      </NotFoundTextWrapper>
    </NotFoundWrapper>
  );
};

export default NotFound;
