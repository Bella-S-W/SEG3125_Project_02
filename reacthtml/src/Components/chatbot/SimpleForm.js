import React from 'react';
import ChatBot from 'react-simple-chatbot';

// all available config props
const config ={
  width: "400px",
  height: "500px",
  floating: true,
};

const theme = {
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function SimpleForm() {
    return (<div>
      <ChatBot 
        steps={[
          {
            id: 'hello',
            message: 'Hello, I am a Game of Thrones chatbot',
            trigger: 'intro',
          },
          // {
          //   id: 'askName',
          //   message: 'What is your name?',
          //   trigger: 'introduction',
          // },
          // {
          //   id: 'introduction',
          //   user: true,
          //   end: true,
          //   trigger: 'intro',
          // },
          {
            id:'intro', 
            message:'Do you agree to the Terms and Conditions?', 
            trigger:'intro-user',
          },
          {
            id:'intro-user', 
            options:[
            {value:'y', label:'Yes', trigger:'yes-response'},
            {value:'n', label:'No', trigger:'no-response'},
            ] 
          },
          {
            id:'yes-response', 
            message:'Great!', 
            end:true,
          },
          {
            id:'no-response', 
            message:'Sorry to hear that.', 
            end:true,
          },
        ]}
        {...config}
      />
      </div>
        );
      }

export default SimpleForm;
