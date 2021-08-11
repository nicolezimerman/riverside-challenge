import { useEffect, useState } from "react";
import Transcription from "../Transcription";
import {getDialog} from "../../services/apis";
import {src} from '../../utils/consts';
import Loader from '../Loader';

const TranscriptionContainer = () =>{
  const [dialogs, setDialogs] = useState(); 
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const getCompleteDialog = async(url) => {
      const res = await getDialog(url);
      setDialogs(res);
      setIsLoading(false);
    }    
    getCompleteDialog(src.dialog);
  },[])

  if(isLoading){
    return <Loader />
  }else{
    return (
      <div>
        {
          dialogs.map(({speaker, start, text, data}, index) => (
            <Transcription key={index} speaker={speaker} start={start} text={text} data={data} />
          ))
        }
      </div>
    )
  }
  
}

export default TranscriptionContainer;