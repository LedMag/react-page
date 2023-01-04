
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductForm, setProductForm } from 'redux/actions/actionCreator';
import { GET_ALL_PRODUCTS, POST_PRODUCT } from 'redux/constans';
import { 
  Section,
  Label,
  Input,
  Img,
  ImageBox,
  Button,
  Error
} from './StyleInput'; 

const InputImages = ({getFile, deleteFile}: {getFile: Function, deleteFile: Function}): JSX.Element => {
  const [image, setImage] = useState('');
  const [file, setFile] = useState<File>();

  useEffect( () => {
    if(file) {
      setPreview(file);
      getFile(file);
    }
  }, [file])

  const onSelectFile = (event: any) => {
    setFile(event.target.files[0]);
    // FOR BUG IN CHROME
    // event.target.value = "";
  };

  const setPreview = (file: File) => {
    const imageURL: string = URL.createObjectURL(file);
    setImage((previousImages) => previousImages.concat(imageURL));
  }

  function deleteHandler(image: string, e: any) {
    setImage('');
    deleteFile(file?.name);
    URL.revokeObjectURL(image);
  }

  return (
    <Section>
      {image ? (
        <>
        <ImageBox>
          <Img src={image} height="200" alt="upload" />
          <Button onClick={(e) => deleteHandler(image, e)}>
            delete image
          </Button>
        </ImageBox>
        </>
      ) : (
        <Label>
          + Add Image
          <Input
            type="file"
            name="image"
            accept="image/*"
            onChange={ (e) => {
              onSelectFile(e)
            }}
          />
        </Label>
      )}
    </Section>
  );
}

export default InputImages;
