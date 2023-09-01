/** @jsxImportSource @emotion/react */
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { InputStyle, LabelStyle } from "./styles";

function InputCustom({ 
  id,
  label,
  disabled,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
  error,
  touched }) {
  return (
    <FormGroup>
      <Label
        css={LabelStyle}
        htmlFor={id}
      >
        { label }
      </Label>
      <Input
        css={InputStyle}
        id={id}
        name={id}
        disabled={disabled}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        invalid={error && touched}
        valid={!error && touched}
      />
      {
        error && touched && (
          <FormFeedback>{ error }</FormFeedback>
        )
      }
    </FormGroup>
  );
}

export default InputCustom;
