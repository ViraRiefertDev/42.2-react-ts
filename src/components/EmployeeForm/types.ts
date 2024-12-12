export interface EmployeeFormValue {
  first_name: string;
  second_name: string;
  age: number|string;
  position: string;
  usage_rules: boolean;
}

export enum EMPLOYEE_FORM_NAMES {
  FIRST_NAME = 'first_name',
  SECOND_NAME = 'second_name',
  AGE = 'age',
  POSITION = 'position',
  USAGE_RULES = 'usage_rules'
}
