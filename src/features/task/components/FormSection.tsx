import { Form, useFormik } from 'formik';
import React from 'react';
import { MdTitle, MdPlace } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import tw from 'twin.macro';

import taskItemState from '../recoil/taskRecoil';
import styles from '../styles/Form.module.css';
import { task } from '../type/TaskType';

const FormSection = () => {
  const [taskItem] = useRecoilState(taskItemState);
  const { iconName, showIconList } = taskItem;

  const formik = useFormik({
    initialValues: {
      iconName: '',
      taskType: 'business',
      title: '',
      place: '',
      note: '',
      dueTime: '',
      urgent: 1,
    },
    onSubmit,
  });

  function onSubmit(values: task) {
    values.iconName = iconName;
    console.log(values);
  }

  const animationOption = `${
    showIconList ? 'translate-y-28 md:translate-y-10  ' : 'translate-y-0  '
  } transform ease-linear duration-300 `;

  return (
    <FormSectionBlock className={animationOption} onSubmit={formik.handleSubmit}>
      <select className={styles.select_style} {...formik.getFieldProps('taskType')}>
        <option value="business">business</option>
        <option value="Personal">Personal</option>
      </select>

      <select className={styles.select_style} {...formik.getFieldProps('urgent')}>
        <option value={1}>Importaint</option>
        <option value={2}>moderate </option>
        <option value={2}>unimportant </option>
      </select>

      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="Title"
          className={styles.input_style_text}
          {...formik.getFieldProps('title')}
        />
        <div className={styles.input_icon_wrapper}>
          <MdTitle />
        </div>
      </div>

      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="place"
          className={styles.input_style_text}
          {...formik.getFieldProps('place')}
        />
        <div className={styles.input_icon_wrapper}>
          <MdPlace />
        </div>
      </div>

      <div className={styles.input_wrapper}>
        <input
          type="text"
          placeholder="notification"
          className={styles.input_style_text}
          {...formik.getFieldProps('note')}
        />
        <div className={styles.input_icon_wrapper}>
          <TbNotes />
        </div>
      </div>

      <div className={styles.input_wrapper}>
        <input
          type="datetime-local"
          placeholder="dueTime"
          className={styles.input_style}
          {...formik.getFieldProps('dueTime')}
        />
      </div>

      <button type="submit" className={styles.button}>
        Add Your Thing
      </button>
    </FormSectionBlock>
  );
};

const FormSectionBlock = tw.form`flex flex-col items-center justify-center space-y-6 w-full mt-16 md:mt-32`;

export default FormSection;
