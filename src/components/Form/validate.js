function validate(values) {
  const errors = {};

  if(!values.name) errors.name = "Este campo es obligatorio";

  if(!values.email) {
    errors.email = "Este campo es obligatorio";
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email.trim())) {
    errors.email = "Este formato es incorrecto";
  }

  if(values.phone) {
    if((values.phone * 1).toString() === "NaN") {
      errors.phone = "Solo se aceptan números";
    }
  }

  if(!values.text) errors.text = "Este campo es obligatorio";

  return errors;
}

export default validate;
