import React, { useEffect } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { postData } from "../../APIServices/CRUDServices";
import "./authPage.sass";

interface IAuthPageProps {}

export function AuthPage(props: IAuthPageProps) {
  return (
    <Grid container justify="center" alignItems="center" direction="row">
      <form
        className="auth-form"
        onSubmit={e => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          postData("api/auth/register", formData).then(res => console.log(res));
        }}
      >
        <TextField name="username" label="username" value="Name" required />
        <TextField
          name="email"
          label="email"
          type="email"
          value="email@mail.com"
          required
        />
        <TextField
          name="password"
          label="password"
          type="password"
          value="password"
          required
        />
        <Input type="submit" value="Submit" />
      </form>
    </Grid>
  );
}
