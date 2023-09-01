/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import validate from "./validate";
import { ButtonStyle, Container } from "./styles";
import InputCustom from "./input";
import { Button, Spinner } from "reactstrap";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSend, setIsSend] = useState(false);

  const handleSubmit = (values) => {
    setIsLoading(!isLoading);
    emailjs.send("service_ya5o1mp","template_i4ui8rj", {
      from_name: values.name,
      reply_to: values.email,
      phone: values.phone,
      message: values.text
    }, "9FHeLr3ZUyP4scmM2").then(result => {
      setIsLoading(false);
      setIsSend(true);
      console.log(result);
    }).catch(error => {
      setIsLoading(false);
      setIsSend(false);
      console.error(error.message);
    });
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    text: ""
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit
      }) => (
        <Container onSubmit={handleSubmit}>
          <InputCustom 
            id="name"
            label="Nombre"
            placeholder="Tu Nombre"
            value={values.name}
            touched={touched.name}
            error={errors.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            disabled={isSend}
          />
          <InputCustom 
            id="email"
            label="Correo"
            placeholder="alguien@ejemplo.com"
            value={values.email}
            touched={touched.email}
            error={errors.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            disabled={isSend}
          />
          <InputCustom 
            id="phone"
            label="Teléfono (*opcional)"
            placeholder=""
            value={values.phone}
            touched={touched.phone}
            error={errors.phone}
            handleChange={handleChange}
            handleBlur={handleBlur}
            disabled={isSend}
          />
          <InputCustom 
            id="text"
            label="Comentarios"
            type="text"
            placeholder="Escribe tu duda aquí"
            value={values.text}
            touched={touched.text}
            error={errors.text}
            handleChange={handleChange}
            handleBlur={handleBlur}
            disabled={isSend}
          />
          <Button
            type="submit"
            disabled={!isValid || isLoading || isSend}
            color="success"
            css={ButtonStyle}
          >
            {
              isLoading
              ? 
                <>
                  <Spinner size="sm" />
                  {" "}
                  Enviando...
                </>
              :
                isSend
                ?
                  "Enviado"
                :
                  "Enviar"
            }
          </Button>
        </Container>
      )}
    </Formik>
  );
}

export default Form;
