import SingleItem from "../common/Button/SingleItem";
import React, {memo} from "react";
import s from './Cars.module.scss'
import {CarSpecType} from "../BLL/car_spec-reducer";

type carModelsPropsType = {
    openModelInfo: (id: string) => void,
    carSpecs: CarSpecType[]
}
export default memo(function CarTypeList({carSpecs, openModelInfo}: carModelsPropsType) {
        return <div className={s.containerModels}>
            {carSpecs.map(cc => <SingleItem key={cc._id} id={cc._id}
                                            callback={openModelInfo}>{cc.type}</SingleItem>)}
        </div>
    }
)
