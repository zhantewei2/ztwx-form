import {Subject, SubjectOrder} from "./Subject";

export type ValidatorErrMessage = ((value: any) => string) | string;

export type ValueType = string | number | undefined |boolean;

export type FormVal= Record<string, ValueType>;

export interface Validator {
    apply: (value: ValueType,formValue?:FormVal) => boolean;
    name: string;
    errMessage: ValidatorErrMessage;
}


export interface Controller {
    id: string;
    validator: Validator | Validator[];
    value?: ValueType;
    errors?: string[];
    valueChange?: Subject<Controller>;
    reset?: () => void;
    _value?: ValueType;
    _changed?:boolean;
    changed?:boolean;  //值是否改变
    valueChangeSubjectOrder?:SubjectOrder<any>;
    changeObservable?:()=>Subject<Controller>;
    _changeObservable?:Subject<Controller>;
}
export type FnValidatorCb=(value:ValueType,formVal:FormVal)=>boolean;