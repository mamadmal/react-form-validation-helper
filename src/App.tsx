
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './App.css'
import { yupResolver } from '@hookform/resolvers/yup/src/yup.js'


function App() {
  // you can give .matches() with regular expression
  const schema = yup.object().shape({
    name : yup.string().required("ستون نام اجباری"),
    email : yup.string().email().required(),
    age : yup.number().min(12).max(14).required("پدوفیل عزیز سن باید کمتر از 14 باشه ستونم"),
    password : yup.string().required("اجبار"),
    cpassword: yup.string().oneOf([yup.ref('password'), "ستون پسور شبیه هم"]).required()
  })

const {register, handleSubmit, formState:{errors}} = useForm({resolver :yupResolver(schema)})
const onFormValidate = (data)=>{
  console.log(data)
}
  return (
    <>
      <form onSubmit={handleSubmit(onFormValidate)}>
      <input type='text' placeholder='name' {...register('name')}/>
      {errors.name && (
        <p>{errors.name?.message}</p>
      )}
      <input type='text' placeholder='email'{...register('email')}/>
      <input type='number' placeholder='age' {...register('age')}/>
      { // and so one fo rest you musculer body
      errors.age && (
        <p>{errors.age?.message}</p>
      )}
      <input type='password' placeholder='password' {...register('password')}/>
      {errors.password && (
        <p>{errors.password?.message}</p>
      )}
      <input type='password' placeholder='confirm password...' {...register('cpassword')}/>
      {errors.cpassword && (
        <p>{errors.cpassword?.message}</p>
      )}
      <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
