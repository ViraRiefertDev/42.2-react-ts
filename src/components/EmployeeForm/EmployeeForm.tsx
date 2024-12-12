import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { EmployeeFormContainer, EmployeeFormTitle, InputsContainer } from './styles';
import { EmployeeFormValue, EMPLOYEE_FORM_NAMES } from './types';

function EmployeeForm() {
  const schema = Yup.object().shape({});

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: '',
      [EMPLOYEE_FORM_NAMES.SECOND_NAME]: '',
      [EMPLOYEE_FORM_NAMES.AGE]: '',
      [EMPLOYEE_FORM_NAMES.POSITION]: '',
      [EMPLOYEE_FORM_NAMES.USAGE_RULES]: false,
    } as EmployeeFormValue,

    validationSchema: schema,
    onSubmit: (values: EmployeeFormValue) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <EmployeeFormTitle>Employee Login Form</EmployeeFormTitle>
      <InputsContainer>
        <Input
          name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
          id='first_name'
          placeholder='Enter your firstname'
          label='FirstName'
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.SECOND_NAME}
          id='second_name'
          placeholder='Enter your secondname'
          label='SecondName'
          value={formik.values[EMPLOYEE_FORM_NAMES.SECOND_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.SECOND_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.AGE}
          type='number'
          id='age'
          placeholder='Enter your age'
          label='Age'
          value={String(formik.values[EMPLOYEE_FORM_NAMES.AGE])}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.POSITION}
          id='position'
          placeholder='Enter your position'
          label='Position'
          value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
        />
      </InputsContainer>
      <Button name='Create' type='submit'/>
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
