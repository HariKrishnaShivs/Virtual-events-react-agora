import React from "react";
import './OtpInputs.css'

class OtpInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { otp: [] };
    this.otpTextInput = [];
  }

  //   componentDidUpdate() {
  //     this.otpTextInput[0].focus();
  //   }

  renderInputs() {
    const inputs = Array(6).fill(0);
    const txt = inputs.map((i, j) => (
      <div className=" otpdiv" key={j}>
        <input
          class="otpinpnum"
          id={`input-otp${j}`}
          type="text"
          maxLength="1"
          pattern="[0-9]{1}"
          onChange={(e) => this.focusNext(j, e.target.value)}
          onKeyUp={(e) => this.focusPrevious(e, j)}
          ref={(ref) => (this.otpTextInput[j] = ref)}
        />
      </div>
    ));
    return txt;
  }

  focusPrevious(event, index) {
    if (event.keyCode === 8 && index === 5) {
      console.log(event.keyCode, index);
      this.otpTextInput[index - 1].focus();
    } else if (event.keyCode === 8 && index !== 0)
      this.otpTextInput[index - 1].focus();

    if (event.keyCode === 13 && index === 5) this.props.submitOtp();
  }

  focusNext(index, value) {
    if (index < this.otpTextInput.length - 1 && value) {
      this.otpTextInput[index + 1].focus();
    }
    const otp = this.state.otp;
    otp[index] = value;
    this.setState({ otp });
    this.props.onChangeOtp(this.state.otp.join(""));
  }

  render() {
    return (
      <div class="otp-window container">
        <div class="row leftmar">{this.renderInputs()}</div>
      </div>
    )
  }
}

export default OtpInputs;
