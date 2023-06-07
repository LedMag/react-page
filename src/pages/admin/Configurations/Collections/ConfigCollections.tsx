import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CollectionForm from './CollectionCard/CollectionForm';
import CollectionDetails from './CollectionDetails/CollectionDetails';
import { CollectionList } from './CollectionDetails/CollectionDetailsStyle';
import { ConfigCollectionsContainer } from './ConfigCollectionsStyle';

type Image = {[key: string]: {files?: File[]}}; 

type Collection = {
    img_url: string,
    name: string,
    id: number,
    [key: string]: any
};

const ConfigCollections = ({collectionForm, handlerChange, saveCollection}: {collectionForm: any, handlerChange: any, saveCollection: any}/* {isAllowed}: {isAllowed: boolean} */): JSX.Element => {
    
    const [open, setOpen] = useState(false);
    const handlerClick = () => {
        setOpen(!open)
    }
    const {collections, lang} = useSelector((store: any)=>{
        return {
            collections: store.setData.collections.data,
            lang: (store.lang as string).split("-")[0]
        }
    })

    const renderCollections = (collections: Collection[]): Array<JSX.Element> | undefined => {
        console.log(collections);

        if(!collections?.length) return;
        return collections.map((collection: Collection)=>{
            const desc: string = `description_${lang}`;
            return (<CollectionDetails key={collection.id} src={collection.img_url} name={collection.name} desc={collection[desc]}></CollectionDetails>)
        })
    }

    return (
        <ConfigCollectionsContainer onClick={handlerClick}>
            <CollectionList>
                {renderCollections(collections)}
                <CollectionForm form={collectionForm} handlerChange={handlerChange}
				saveCollection={saveCollection}></CollectionForm>
            </CollectionList>
        </ConfigCollectionsContainer>
    )
}

export default ConfigCollections;