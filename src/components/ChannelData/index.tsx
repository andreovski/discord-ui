import React from 'react';

import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  return (
      <Container>
        <Messages>
          {Array.from(Array(13).keys()).map((n) => (
            <ChannelMessage
              key={n}
              author="Andreovski"
              date="21/11/2021"
              content="Eai meu caros, como está o clima hoje?"
            />
        ))}

        <ChannelMessage 
          author="chipchrome"
          date="21/11/2021"
          content="Muita neve, ta difícil a vida"
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input 
          type="text" 
          placeholder="Começe uma conversa em #chat-livre" 
        />

        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
