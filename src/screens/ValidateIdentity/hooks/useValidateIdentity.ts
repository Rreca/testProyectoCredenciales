import {useState} from 'react';
import credencialesDB from '../../../api/credencialesDB';
import {Response} from '../../../interfaces/responseInterface';

interface IValidationState {
  isLoading: boolean;
}
export interface postParams {
  NumDocumento: string;
  DeviceID: string;
  NomPersona: string;
}

export const useValidateIdentity = () => {
  const [state, setState] = useState<IValidationState>({
    isLoading: false,
  });

  const setRegisterDevice = async (params: postParams) => {
    setState({
      isLoading: true,
    });

    const registerDevicePromise = credencialesDB.post<Response>(
      '/RegisterDevice',
      params,
    );

    return await registerDevicePromise
      .then(registerDeviceResp => {
        return registerDeviceResp.data;
      })
      .finally(() => {
        setState({
          isLoading: false,
        });
      });
  };

  return {...state, setRegisterDevice};
};
