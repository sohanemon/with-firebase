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
