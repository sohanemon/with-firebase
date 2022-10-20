# [react-hook-form](https://react-hook-form.com/)

## Basics

- register input with `register('email')` function
- inject the output from register in input. `<input {...register('name')}/>`
- pass the `handleSubmit` function from `useForm()`
  ```js
  <form onSubmit={handleSubmit((data) => console.log(data))}>...</form>
  ```
  and avoid this
  ```js
  <form onSubmit={() => handleSubmit(callback)}>...</form>
  ```
- inside the `form` there should be at least a button or type='submit'

## Intermediate (validation)

- `register()` takes two params. First is name and second one is options which is optional. [show more](./src/assets/Screenshot_1.png)
- ` {...register("email", { required: "Email is required" })}` this required field will return as a message.
- find the error at `const {formState : {errors}} = useForm()`

# _Private_ Route using [React router](https://reactrouter.com)

## Basic

- create a component that returns it's children on condition.

```js
const PrivateRoute = ({ children }) => {
  if (user?.uid) return children;
  return <>Loading...</>;
};

export default PrivateRoute;
```

- now wrap any component with `PrivateRoute`

```js
{
  path: "/",
  element: (
    <PrivateRoute>
      <Home />
    </PrivateRoute>
  ),
},
```

## Intermediate

- Go to different page if condition doesn't full fill

```js
const PrivateRoute = ({ children }) => {
  if (user?.uid) return children;
  return <Navigate to={"/signin"}></Navigate>;
};
```

- use `Navigate` component instead of `useNavigate()` hook there.

```js
const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(User);
  if (user?.uid) return children;
  else navigate("/signin");
};
```

> `useNavigate` works on events only

## Redirect to previous path after private route

- navigate with state & replace

```js
//private route.jsx
const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  if (user?.uid) return children;

  return <Navigate state={{ pathname }} to={"/login"} replace></Navigate>;
  // navigated from pathname
  // passing a props named state
};
```

> state props will be injected to the location of `/login`

- get the pathname

```js
// login.jsx
const {
  state: { pathname },
} = useLocation();
// location.state.pathname // state={{ pathname }}
```

- now we know the previous location and go with

```js
//login.jsx
setTimeout(() => navigate(pathname), 100);
```
