import { useDispatch } from 'react-redux';

import { Form } from './authForm.styles';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          required
          placeholder="Alexander"
          minLength={3}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="derovse@gmail.com"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={6}
          required
          placeholder="*******"
        />
      </label>
      <button type="submit">Register</button>
    </Form>
  );
};
