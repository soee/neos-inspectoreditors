import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {HuePicker} from "react-color";

const VisibleColorPickerComponent = {
  height: "100%",
  display: "block"
};

const InvisibleColorPickerComponent = {
  height: 0,
  display: "none"
};

export default class ColorPickerEditor extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    commit: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: props.value ? props.value: "#323232",
      colorPickerStyles: InvisibleColorPickerComponent
    };
    this.width = "268";

    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleChangeColor = newColor => {
    this.props.commit(newColor.hex);
    this.setState({
      selectedColor: newColor.hex
    });
  };

  onBlur() {
    this.setState({
      colorPickerStyles: InvisibleColorPickerComponent
    });
  }

  onFocus() {
    this.setState({
      colorPickerStyles: VisibleColorPickerComponent
    });
  }

  render() {
    return (
      <div>
        <div style={{display: "flex", alignItems: "center", marginBottom: 5}}>
          <div style={{padding: "5px", height: "30px", width: "54%", backgroundColor: this.state.selectedColor}}></div>
          <input type={'text'}
                 value={this.state.selectedColor}
                 style={{width: "46%"}}
                 onBlur={this.onBlur}
                 onFocus={this.onFocus}
          />
        </div>
        <div style={this.state.colorPickerStyles}>
          <HuePicker color={this.props.value} width={this.width} onChange={this.handleChangeColor}/>
        </div>
      </div>
    );
  }
}
