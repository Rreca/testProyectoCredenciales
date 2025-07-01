import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import credencialesDB from '../api/credencialesDB';
import {Names} from '../interfaces/responseInterface';
import {useAlert} from './useAlert';

interface Register {
  isLoading: boolean;
  names?: Names;
  // cast: Cast[];
}

export const useRegister = () => {
  const {createAlert} = useAlert();
  const [state, setstate] = useState<Register>({
    isLoading: true,
    names: undefined,
  });

  const getNames = async dni => {
    const RegisterPromise = credencialesDB.get<Names>(
      '/GetNameListFromDocument?NumDocumento=' + dni, //5644416
    );

    let namesResp = null;
    try {
      [namesResp] = await Promise.all([RegisterPromise]);
    } catch (error) {
      if (error.response.status === 0) {
        createAlert(
          'Por favor revisa tu conexión a internet y vuelve a intentarlo',
          'Error en la red',
        );
      } else {
        createAlert(
          'Código de estado ' + error.response.status,
          'Error en el servidor',
        ); //response documentacion https://github.com/axios/axios   Handling Errors
      }

      setstate({
        isLoading: false,
        names: undefined,
      });
      return null;
    }

    // console.log('RESPONSE API: ' + JSON.stringify(namesResp));

    setstate({
      isLoading: false,
      names: namesResp.data,
    });
    return namesResp.data;
  };

  return {...state, getNames};
};
