import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import loginValidate from '../lib/validate';
import { loginInfo } from '../type/authType';

export default function Login({ toggle }: { toggle: () => void }) {
  const [show, setShow] = useState(false);
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: loginValidate,
    onSubmit,
  });

  async function onSubmit(values: loginInfo) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/tasks',
    });

    if (status && status.ok) {
      status.url !== null && router.push(status.url);
    }
  }

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', { callbackUrl: '/tasks' });
  }

  // Github Login
  async function handleGithubSignin() {
    signIn('github', { callbackUrl: '/tasks' });
  }

  return (
    <>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Tasks_APP</h1>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email ? 'border-rose-600' : ''
            }`}
          >
            <input
              type="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}

          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password ? 'border-rose-600' : ''
            }`}
          >
            <input
              type={`${show ? 'text' : 'password'}`}
              placeholder="password"
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" onClick={handleGoogleSignin} className={styles.button_custom}>
              Sign In with Google{' '}
              <Image src={'/assets/google.svg'} width="20" height={20} alt="googleLogo"></Image>
            </button>
          </div>
          <div className="input-button">
            <button type="button" onClick={handleGithubSignin} className={styles.button_custom}>
              Sign In with Github{' '}
              <Image src={'/assets/github.svg'} width={25} height={25} alt="githubLogo"></Image>
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 " onClick={toggle}>
          don{`'`}t have an account yet?{' '}
          <span className="text-blue-700 cursor-pointer">Sign Up</span>
        </p>
      </section>
    </>
  );
}
