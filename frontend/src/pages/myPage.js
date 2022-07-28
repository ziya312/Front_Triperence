import 'components/Pages/myPage.css';
import MyPageoption from 'components/myPagecomponents/myPageoption';
import React, { useState } from 'react';
import AM from 'components/myPagecomponents/optionckd/AM';

const MyPage = () => {
  const [option, setoption] = useState('');
  const onchange = (e) => {
    if (e.target.value === 'AM') {
      setoption(e.target.value);
      return 'a';
    } else {
      if (e.target.value === 'B') {
        setoption(e.target.value);
      } else {
        //탈퇴
      }
    }
  };

  return (
    <section className="mainsection">
      <article className="option2">
        <MyPageoption />

        <label className="option1">
          <input
            onChange={onchange}
            style={{ display: 'none' }}
            value="AM"
            type="radio"
            name="option"
          />
          <div>
            Account Management &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;>
          </div>
        </label>
        <label className="option1">
          <input
            onChange={onchange}
            value="B"
            style={{ display: 'none' }}
            type="radio"
            name="option"
          />
          <div>
            Bookmark &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; >
          </div>
        </label>
        <label className="option1">
          <input
            onChange={onchange}
            value="U"
            style={{ display: 'none' }}
            type="radio"
            name="option"
          />
          <div>
            Unregister &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;>
          </div>
        </label>
      </article>

      <article className="statuis">
        {option === 'AM' ? <AM /> : option === 'B' ? <div>qeqeqeqqe</div> : <div>vxczvzxcv</div>}
      </article>
    </section>
  );
};

export default MyPage;
