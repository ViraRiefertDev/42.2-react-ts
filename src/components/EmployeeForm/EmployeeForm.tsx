import { useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../Input/Input';
import Button from '../Button/Button';
import {
  EmployeeFormContainer,
  EmployeeFormTitle,
  InputsContainer,
} from './styles';
import { EmployeeFormValue, EMPLOYEE_FORM_NAMES } from './types';
import Checkbox from 'components/CheckBox/CheckBox';

function EmployeeForm() {
  const nameRegx = /^[a-zA-Z]+$/;

  const schema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required('Field first name is required')
      .test(
        'Check min and max first name length',
        'Min 2 and Max 50 symbols',
        (value) => value.length >= 2 && value.length <= 50
      )
      
      .matches(nameRegx, 'First name must contain only latin letters'),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required('Field last name is required')
      .test(
        'Check last name length',
        'Max 15 symbols',
        (value) => value.length <= 15
      )
      .matches(nameRegx, 'Last name must contain only latin letters'),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .max(80, 'Max 80')
      .min(18, 'Min 18'),
    [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
    .required('Field position is required')
    .test('Check max age length', 'Max 30 Symbols', (value)=>value.length<=30)  
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: '',
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: '',
      [EMPLOYEE_FORM_NAMES.AGE]: '',
      [EMPLOYEE_FORM_NAMES.POSITION]: '',
      [EMPLOYEE_FORM_NAMES.USAGE_RULES]: false,
    } as EmployeeFormValue,
    validationSchema: schema,
    validateOnChange:false,
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
          placeholder='Enter your first name'
          label='FirstName*'
          value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        />
        <Input
          name={EMPLOYEE_FORM_NAMES.LAST_NAME}
          id='last_name'
          placeholder='Enter your last name'
          label='LastName*'
          value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
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
          label='Position*'
          value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
        />
        <Checkbox
          name={EMPLOYEE_FORM_NAMES.USAGE_RULES}
          id='usage_rules'
          label = 'Agree to Usage Rules'
          value={(formik.values[EMPLOYEE_FORM_NAMES.USAGE_RULES])}
          onChange={formik.handleChange}
          error={formik.errors[EMPLOYEE_FORM_NAMES.USAGE_RULES]}
        />
      </InputsContainer>
      <Button name='Create' type='submit' disabled={!formik.values.usage_rules}/>
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
