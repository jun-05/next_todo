import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MdTitle, MdPlace } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import tw from 'twin.macro';
import { object, string, number } from 'yup';
import { useTask } from '../hooks/useTask';

import taskItemState from '../recoil/taskRecoil';
import styles from '../styles/Form.module.css';
import { task } from '../type/TaskType';

const AddFormSection = () => {
  const router = useRouter();
  const [taskItem] = useRecoilState(taskItemState);
  const { iconName, showIconList } = taskItem;

  const formik = useFormik({
    initialValues: {
      iconName: '',
      taskType: 'Business',
      title: '',
      place: '',
      note: '',
      dueTime: '',
      urgent: 1,
    },
    validationSchema: object({
      iconName: string().required(),
      title: string().required('Required').min(1).max(30, 'Must be less then 20 characters long'),
      place: string().max(20, 'Must be less then 20 characters lon'),
      note: string().max(30, 'Must be less then 30 characters long'),
      dueTime: string().required('Required'),
      urgent: number().max(3, 'Invalid Value').required('Required'),
    }),
    onSubmit,
  });

  useEffect(() => {
    formik.setFieldValue('iconName', iconName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iconName]);

  const { data: session } = useSession();

  const { addMutation } = useTask();

  function onSubmit(values: task) {
    if (!session) {
      alert('not valid user');
      return;
    }
    try {
      addMutation.mutate(values);

      router.push('/tasks');
    } catch (e) {
      alert(`${e} 가 발생하였습니다.`);
    }
  }

  const animationOption = `${
    showIconList ? 'translate-y-28 md:translate-y-10  ' : 'translate-y-0  '
  } transform ease-linear duration-300 `;

  return (
    <FormSectionBlock className={animationOption} onSubmit={formik.handleSubmit}>
      <select className={styles.select_style} {...formik.getFieldProps('taskType')}>
        <option value="Business">Business</option>
        <option value="Personal">Personal</option>
      </select>
      <select className={styles.select_style} {...formik.getFieldProps('urgent')}>
        <option value={1}>Importaint</option>
        <option value={2}>Moderate </option>
        <option value={2}>Unimportant </option>
      </select>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="title"
          className={styles.input_style_text}
          name="title"
          onChange={formik.handleChange}
        />
        <div className={styles.input_icon_wrapper}>
          <MdTitle />
        </div>
        {formik.errors.title && (
          <span className={styles.input_error_span}>{formik.errors.title}</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="place (option)"
          className={styles.input_style_text}
          name="place"
          onChange={formik.handleChange}
        />
        <div className={styles.input_icon_wrapper}>
          <MdPlace />
        </div>
        {formik.errors.place && (
          <span className={styles.input_error_span}>{formik.errors.place}</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="notification (option)"
          className={styles.input_style_text}
          name="note"
          onChange={formik.handleChange}
        />
        <div className={styles.input_icon_wrapper}>
          <TbNotes />
        </div>
        {formik.errors.note && (
          <span className={styles.input_error_span}>{formik.errors.note}</span>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <input
          type="datetime-local"
          className={styles.input_style}
          data-placeholder="dueTime"
          name="dueTime"
          onChange={formik.handleChange}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Add Your Thing
      </button>
    </FormSectionBlock>
  );
};

const FormSectionBlock = tw.form`lg:max-w-[1280px] w-full flex flex-col items-center justify-center  space-y-6 m-auto mt-16 md:mt-32`;

export default AddFormSection;
