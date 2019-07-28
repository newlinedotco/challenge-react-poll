import * as React from 'react';
import styled from 'styled-components';
import { QandAsDocument } from '../types';

type Props = {
  qandas: QandAsDocument /* q and a's -- questions and answers document */;
};

const PollWrapper = styled.div``;

export default function Poll({ qandas }: Props) {
  console.log('questions and answers: ', qandas);
  return <PollWrapper>The Poll implementation goes here</PollWrapper>;
}
